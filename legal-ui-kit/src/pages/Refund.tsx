import React from 'react';
import LegalLayout from '../components/LegalLayout';

const Refund: React.FC = () => {
  return (
    <LegalLayout title="Return & Refund Policy">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Commitment
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We stand behind the quality of our products and services. If you are not completely satisfied with your purchase, we offer a comprehensive return and refund policy to ensure your satisfaction.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This policy outlines the terms and conditions for returns, refunds, and exchanges. Please read this policy carefully before making a purchase, as it forms part of our terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Return Eligibility
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            To be eligible for a return, items must meet the following conditions:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
            <li>Request must be made within 30 days of purchase</li>
            <li>Items must be in original condition and packaging</li>
            <li>Digital products must not have been downloaded or accessed</li>
            <li>Services must not have been substantially provided</li>
            <li>Custom or personalized items are generally non-returnable</li>
            <li>Items must include original receipt or proof of purchase</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Return Process
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            To initiate a return, please follow these steps:
          </p>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
            <li>Contact our customer service team at <a href="mailto:info@devlance.org" className="text-blue-600 dark:text-blue-400 hover:underline">info@devlance.org</a></li>
            <li>Provide your order number and reason for return</li>
            <li>Await return authorization and instructions</li>
            <li>Package items securely with original packaging</li>
            <li>Ship items using provided return label (if applicable)</li>
            <li>Allow 5-10 business days for processing after receipt</li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Refund Policy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Once your return is received and inspected, we will process your refund according to the following terms:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
            <li>Full refund for items returned in original condition</li>
            <li>Refunds processed to original payment method</li>
            <li>Processing time: 5-10 business days after approval</li>
            <li>Shipping costs are non-refundable (unless our error)</li>
            <li>Partial refunds may apply for used or damaged items</li>
            <li>Bank processing may take additional 3-5 business days</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Exchange Policy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We offer exchanges for the following situations:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
            <li>Defective or damaged items received</li>
            <li>Wrong item shipped by our error</li>
            <li>Size or color exchanges (where applicable)</li>
            <li>Upgraded service packages</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Exchanges are subject to availability and must be requested within the return window. Additional charges may apply for upgraded items or services.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Non-Returnable Items
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Certain items and services are not eligible for return or refund:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
            <li>Digital downloads that have been accessed</li>
            <li>Custom or personalized products</li>
            <li>Services that have been fully delivered</li>
            <li>Consumable items that have been used</li>
            <li>Items damaged by misuse or normal wear</li>
            <li>Items returned without original packaging</li>
            <li>Items returned after the 30-day window</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Shipping and Handling
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Return shipping costs are generally the responsibility of the customer, except in the following cases:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
            <li>Items were damaged during shipping</li>
            <li>Wrong items were sent due to our error</li>
            <li>Items were defective upon arrival</li>
            <li>Items significantly differ from description</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We recommend using a trackable shipping method for returns. We are not responsible for items lost or damaged during return shipping.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            For questions about returns, refunds, or exchanges, please contact our customer service team at{' '}
            <a href="mailto:info@devlance.org" className="text-blue-600 dark:text-blue-400 hover:underline">
              info@devlance.org
            </a>
            . Our team is available to assist you and will respond to your inquiry within 24 hours during business days.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
};

export default Refund;