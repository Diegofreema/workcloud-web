import type React from "react";


export const Faq = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Quick answers to common questions about HotpiceConnect.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">How do I get started as a hospital?</h3>
                        <p className="text-gray-600">
                            Download our app, complete the hospital verification process, and start connecting with qualified nurses
                            in your area.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">What qualifications do nurses need?</h3>
                        <p className="text-gray-600">
                            All nurses must be licensed, pass background checks, and complete our platform-specific training
                            modules.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Is the platform HIPAA compliant?</h3>
                        <p className="text-gray-600">
                            Yes, HospiceConnect is fully HIPAA compliant with end-to-end encryption and secure data handling
                            protocols.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">What areas do you serve?</h3>
                        <p className="text-gray-600">
                            We&apos;re currently available in major metropolitan areas and expanding rapidly. Check our app for
                            availability in your region.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

