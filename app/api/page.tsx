"use client";

// Declare SwaggerUIBundle on the window object
declare global {
  interface Window {
    SwaggerUIBundle: (options: { url: string; dom_id: string }) => void;
  }
}

import { useEffect } from 'react';

const SwaggerPage: React.FC = () => {
  useEffect(() => {
    // Dynamically load Swagger UI JavaScript and CSS files
    const loadSwaggerUI = () => {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.52.2/swagger-ui-bundle.js';
      script.onload = () => {
        window.SwaggerUIBundle({
          url: '/swagger.yml',
          dom_id: '#swagger-ui',
        });
      };

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.52.2/swagger-ui.css';
      document.head.appendChild(link);
      document.body.appendChild(script);
    };

    // Load Swagger UI assets
    loadSwaggerUI();

    // Clean up the resources after component unmounts
    return () => {
      const script = document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.52.2/swagger-ui-bundle.js"]');
      const link = document.querySelector('link[href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.52.2/swagger-ui.css"]');
      script?.remove();
      link?.remove();
    };
  }, []);

  return <div id="swagger-ui" style={{ height: '100vh' }} />;
};

export default function App() {
    return <SwaggerPage />
}