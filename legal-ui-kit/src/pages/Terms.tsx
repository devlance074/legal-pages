import React from 'react';
import LegalLayout from '../components/LegalLayout';

const Terms: React.FC = () => {
  return (
    <LegalLayout title="Terms & Conditions">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Agreement to Terms
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            By accessing and using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            These terms constitute a legally binding agreement between you and Devlance. We reserve the right to modify these terms at any time, and such modifications will be effective immediately upon posting.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Use of Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
            <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
            <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of our services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            User Accounts
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account. You may not use as a username the name of another person or entity or that is not lawfully available for use.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Intellectual Property Rights
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The services and their original content, features, and functionality are and will remain the exclusive property of Devlance and its licensors. The services are protected by copyright, trademark, and other laws.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent. Nothing in these Terms constitutes a transfer of any intellectual property rights from us to you.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Termination
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We may terminate or suspend your account and bar access to the services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            If you wish to terminate your account, you may simply discontinue using the services. Upon termination, your right to use the services will cease immediately.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Disclaimer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The information on our services is provided on an "as is" basis. To the fullest extent permitted by law, we exclude all representations, warranties, conditions, or other terms which might otherwise have effect in relation to the services.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We will not be liable for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with use of, or inability to use, our services.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            If you have any questions about these Terms & Conditions, please contact us at{' '}
            <a href="mailto:info@devlance.org" className="text-blue-600 dark:text-blue-400 hover:underline">
              info@devlance.org
            </a>
            . We will respond to your inquiry as soon as possible.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
};

export default Terms;