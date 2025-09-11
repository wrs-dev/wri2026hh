import '@/styles/globals.css';
import PlausibleProvider from 'next-plausible';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const smoothScroll = (targetY) => {
      let startY = window.pageYOffset;
      let distance = targetY - startY;
      let startTime = null;

      const duration = 500;

      const animateScroll = (currentTime) => {
        if (!startTime) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, startY + distance * progress);
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const hash = window.location.hash;
          if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
              const y = element.getBoundingClientRect().top + window.pageYOffset - 60;
              smoothScroll(y);
              observer.disconnect();
            }
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    router.events.on('routeChangeComplete', () => {
      setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
            smoothScroll(y);
          }
        }
      }, 1000);
    });

    return () => {
      observer.disconnect();
      router.events.off('routeChangeComplete');
    };
  }, [router.events]);

  const getLayoutProps = () => {
    const { title, description, socialImage } = pageProps;
    return {
      title: title || 'WRI 2026 Heavy Haul Conference Dallas',
      description: description || '31st Annual Wheel Rail Interaction Conference',
      socialImage: socialImage || '/wri2026-hh-social.png',
    };
  };

  return (
    <PlausibleProvider domain="wri2026hh.wheel-rail-seminars.com">
      <Layout {...getLayoutProps()}>
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  );
}

export default App;