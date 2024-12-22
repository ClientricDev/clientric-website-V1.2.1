import SEO from '../components/common/SEO';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Learn about how Clientric CRM Consulting collects, uses, and protects your personal information. Read our comprehensive privacy policy."
        canonical="https://clientric.co/privacy"
      />
      
      <div className="min-h-screen bg-surface pt-24">
        <div className="container mx-auto px-4 py-16">
          <article className="max-w-4xl mx-auto prose prose-invert">
            <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
            
            <p className="text-gray-300 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300">
                At Clientric CRM Consulting ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and safeguard your data when you use our website and services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-bold text-white mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li>Name and contact information</li>
                <li>Business information</li>
                <li>Communication preferences</li>
                <li>Service inquiries and feedback</li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-3">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Website usage statistics</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze website performance and user behavior</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Protection</h2>
              <p className="text-gray-300">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
              <p className="text-gray-300">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
              <p className="text-gray-300">
                If you have questions about this privacy policy or our practices, please contact us at:
                <br />
                Email: privacy@clientric.co
                <br />
                Phone: (866) 596-0362
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}