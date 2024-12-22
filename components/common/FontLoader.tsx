import { useEffect } from 'react';

export default function FontLoader() {
  useEffect(() => {
    // Switch font loading stylesheet from print to all
    const fontStylesheet = document.querySelector('link[media="print"]') as HTMLLinkElement;
    if (fontStylesheet) {
      fontStylesheet.media = 'all';
    }
  }, []);

  return null;
}