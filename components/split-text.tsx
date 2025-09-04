import { useRef, useEffect, useState, CSSProperties } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string
  splitType?: string
  from?: { opacity: number; y: number }
  to?: { opacity: number; y: number }
  threshold?: number
  rootMargin?: string
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  onLetterAnimationComplete?: () => void
}

const SplitText = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}: SplitTextProps) => {
  const elementRef = useRef<HTMLElement>(null);
  const animationCompletedRef = useRef(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useGSAP(
    () => {
      if (!elementRef.current || !text || !fontsLoaded) return;
      const el = elementRef.current;
      
      // Clean up previous instance
      const prevInstance = (el as any)._rbsplitInstance;
      if (prevInstance) {
        try {
          prevInstance.revert();
        } catch (e) {
          // ignore cleanup errors
        }
        (el as any)._rbsplitInstance = null;
      }

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign = marginValue === 0 ? '' : marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      let targets: Element[] = [];
      
      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === 'lines',
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
        reduceWhiteSpace: false,
        onSplit: (self: any) => {
          if (splitType.includes('chars') && self.chars?.length) {
            targets = self.chars;
          } else if (splitType.includes('words') && self.words?.length) {
            targets = self.words;
          } else if (splitType.includes('lines') && self.lines?.length) {
            targets = self.lines;
          } else {
            targets = self.chars || self.words || self.lines || [];
          }
          
          if (targets.length > 0) {
            gsap.fromTo(
              targets,
              { ...from },
              {
                ...to,
                duration,
                ease,
                stagger: delay / 1000,
                scrollTrigger: {
                  trigger: el,
                  start,
                  once: true,
                  fastScrollEnd: true,
                  anticipatePin: 0.4
                },
                onComplete: () => {
                  animationCompletedRef.current = true;
                  onLetterAnimationComplete?.();
                },
                willChange: 'transform, opacity',
                force3D: true
              }
            );
          }
        }
      });
      
      (el as any)._rbsplitInstance = splitInstance;

      return () => {
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === el) st.kill();
        });
        try {
          splitInstance.revert();
        } catch (e) {
          // ignore cleanup errors
        }
        (el as any)._rbsplitInstance = null;
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        onLetterAnimationComplete
      ],
      scope: elementRef
    }
  );

  const style: CSSProperties = {
    textAlign,
    wordWrap: 'break-word',
    willChange: 'transform, opacity'
  };
  
  const classes = `split-parent overflow-hidden inline-block whitespace-normal ${className}`;
  const commonProps = {
    ref: elementRef,
    style,
    className: classes,
    children: text
  };

  switch (tag) {
    case 'h1':
      return <h1 {...commonProps} />;
    case 'h2':
      return <h2 {...commonProps} />;
    case 'h3':
      return <h3 {...commonProps} />;
    case 'h4':
      return <h4 {...commonProps} />;
    case 'h5':
      return <h5 {...commonProps} />;
    case 'h6':
      return <h6 {...commonProps} />;
    default:
      return <p {...commonProps} />;
  }
};

export default SplitText;