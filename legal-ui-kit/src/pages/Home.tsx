import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, RotateCcw, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const policies = [
    {
      title: 'Terms & Conditions',
      description: 'Learn about our terms of service and user agreement',
      icon: FileText,
      path: '/terms',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Privacy Policy',
      description: 'Understand how we collect, use, and protect your data',
      icon: Shield,
      path: '/privacy',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Return & Refund Policy',
      description: 'Review our policies for returns, refunds, and exchanges',
      icon: RotateCcw,
      path: '/refund',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Center</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Access our comprehensive legal policies and terms. We believe in transparency and want you to understand your rights and our commitments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <Link
                key={index}
                to={policy.path}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${policy.color} mb-6`}>
                  <policy.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {policy.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {policy.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Need Help?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                If you have questions about any of our policies, please don't hesitate to reach out.
              </p>
              <a
                href="mailto:info@devlance.org"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;