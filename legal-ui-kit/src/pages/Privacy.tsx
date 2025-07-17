import React from 'react';
import LegalLayout from '../components/LegalLayout';

const Privacy: React.FC = () => {
  return (
    <LegalLayout title="Privacy Policy">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Information We Collect
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, and payment information.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We also automatically collect certain information when you use our services, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
            <li>Device information (IP address, browser type, operating system)</li>
            <li>Usage information (pages visited, time spent, clicks and interactions)</li>
            <li>Location information (if you enable location services)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We use the information we collect to provide, maintain, and improve our services. Specifically, we may use your information to:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
            <li>Process transactions and send related information</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Send technical notices, updates, and security alerts</li>
            <li>Communicate with you about products, services, and promotional offers</li>
            <li>Monitor and analyze usage patterns to improve our services</li>
            <li>Detect, prevent, and address technical issues and security vulnerabilities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Information Sharing
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy. We may share your information in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
            <li>With service providers who assist us in operating our services</li>
            <li>To comply with legal obligations or respond to lawful requests</li>
            <li>To protect our rights, privacy, safety, or property</li>
            <li>In connection with a merger, acquisition, or sale of assets</li>
            <li>With your explicit consent for specific purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Data Security
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
            <li>Encryption of sensitive data in transit and at rest</li>
            <li>Regular security assessments and penetration testing</li>
            <li>Access controls and authentication protocols</li>
            <li>Employee training on data protection practices</li>
            <li>Incident response procedures for security breaches</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Your Rights
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
            <li>Right to access your personal information</li>
            <li>Right to correct inaccurate or incomplete information</li>
            <li>Right to delete your personal information</li>
            <li>Right to restrict or object to processing</li>
            <li>Right to data portability</li>
            <li>Right to withdraw consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Cookies and Tracking
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We use cookies and similar tracking technologies to collect and track information about your use of our services. Cookies are small data files stored on your device that help us provide and improve our services.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our services. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device).
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Changes to This Policy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Your continued use of our services after any changes to this Privacy Policy will constitute your acceptance of such changes. We encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at{' '}
            <a href="mailto:info@devlance.org" className="text-blue-600 dark:text-blue-400 hover:underline">
              info@devlance.org
            </a>
            . We are committed to addressing your inquiries promptly and transparently.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
};

export default Privacy;