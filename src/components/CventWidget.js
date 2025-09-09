import React, { useEffect, useRef } from 'react';

const CventWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const scriptId = 'cvent-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = 'https://web.cvent.com/event_guest/v1/embed/10a69481-9d04-4cbc-b0d0-66b45a176423.js';
      document.body.appendChild(script);
    }

    // Function to handle incoming postMessage events
    const handlePostMessage = (event) => {
      if (event.origin !== 'https://web.cvent.com') return;

      const { data } = event;
      if (data && data.message === 'registrationLoaded' && widgetRef.current) {
        widgetRef.current.style.height = `${data.height}px`;
      }
    };

    // Add the event listener for postMessage events
    window.addEventListener('message', handlePostMessage);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      window.removeEventListener('message', handlePostMessage);
    };
  }, []);

  // Use className for TailwindCSS styles, and ref for dynamic height adjustments
  return <div ref={widgetRef} className="w-100 cvt-embed" data-cvt-embed></div>;
};

export default CventWidget;
