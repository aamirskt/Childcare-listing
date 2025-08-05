'use client';

import { useEffect, useRef } from 'react';

export default function ReloadOnBack() {
  const hasMounted = useRef(false);

  useEffect(() => {
    const handlePopState = () => {
      // If there is no navigation history, reload the page
      if (!hasMounted.current) {
        window.location.reload();
      }
    };

    hasMounted.current = true;
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return null;
}