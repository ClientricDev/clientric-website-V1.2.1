import { useState, useEffect } from 'react';
import Button from '../common/Button';

// ... rest of the imports and pricingTiers array ...

export default function PricingSection() {
  // ... rest of the component code ...

  return (
    <section id="pricing-section" className="py-16 bg-surface overflow-x-hidden relative">
      {/* ... rest of the JSX ... */}
      
      {/* Call to Action */}
      <div className="mt-8 text-center">
        <Button href="/contact">
          Schedule Free Consultation
        </Button>
      </div>
    </section>
  );
}