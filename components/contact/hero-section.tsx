import type React from 'react';

export const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Have questions about Workcloud? We&apos;re here to assist
          organizations and individuals.
        </p>
      </div>
    </section>
  );
};
