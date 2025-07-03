import React from 'react';
import {
  Shield,
  Users,
  Lock,
  Eye,
  FileText,
  AlertCircle,
  RefreshCw,
  UserX,
  Link,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                Privacy Policy & User Agreement
              </h1>
              <p className="text-slate-600 mt-1">
                Workcloud Digital Workspace Platform
              </p>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-700 hover:bg-blue-200"
          >
            Last Updated: {new Date().toLocaleDateString()}
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    Introduction
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    Workcloud is a digital workspace platform that enables
                    individuals to connect with organizations for
                    problem-solving, communication, and service delivery. This
                    policy outlines how we collect, use, protect, and share your
                    personal information and the rules for using our services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                  <Eye className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    Information We Collect
                  </h2>
                  <p className="text-slate-700 mb-6">
                    We collect the following types of information:
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="p-4 bg-slate-50 rounded-lg border">
                      <h3 className="font-semibold text-slate-900 mb-2">
                        Personal Information
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Name, email address, phone number, profile photo, etc.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border">
                      <h3 className="font-semibold text-slate-900 mb-2">
                        Organizational Data
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Company name, industry, staff categories, workspace
                        preferences.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border">
                      <h3 className="font-semibold text-slate-900 mb-2">
                        Usage Data
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Pages visited, organizations connected with, time spent
                        on the platform.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border">
                      <h3 className="font-semibold text-slate-900 mb-2">
                        Communication Data
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Video call logs, messages, reviews, and collaboration
                        activity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card className="border-l-4 border-l-purple-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="text-slate-700 mb-4">
                    We use your information to:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Provide and improve our services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Facilitate communication between users and organizations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Customize your Workcloud experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Send updates, notifications, and service-related
                        messages
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Ensure platform safety, security, and fraud prevention
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-100 rounded-lg flex-shrink-0">
                  <Link className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    Data Sharing
                  </h2>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-orange-800">
                      We do not sell your personal data.
                    </p>
                  </div>
                  <p className="text-slate-700 mb-4">
                    We may share information:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        With organizations you connect with on Workcloud
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        With trusted service providers (e.g., hosting,
                        analytics, payment processors)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>To comply with legal obligations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card className="border-l-4 border-l-red-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-red-100 rounded-lg flex-shrink-0">
                  <Lock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    Security
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    We implement appropriate security measures including
                    encrypted communications, access controls, and secure
                    storage to protect your data.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="border-l-4 border-l-indigo-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-indigo-100 rounded-lg flex-shrink-0">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    Your Rights
                  </h2>
                  <p className="text-slate-700 mb-4">You have the right to:</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="text-slate-700">
                        Access and update your personal information
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="text-slate-700">
                        Delete your account at any time
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg sm:col-span-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="text-slate-700">
                        Opt-out of non-essential communications
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="border-l-4 border-l-teal-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-teal-100 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    User Responsibilities
                  </h2>
                  <p className="text-slate-700 mb-4">
                    By using Workcloud, you agree to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 p-3 bg-teal-50 rounded-lg">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">
                        Provide accurate and updated information
                      </span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-teal-50 rounded-lg">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">
                        Respect other users and organizations
                      </span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-teal-50 rounded-lg">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">
                        Not use the platform for illegal or unethical purposes
                      </span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-teal-50 rounded-lg">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">
                        Refrain from impersonation, harassment, or
                        misrepresentation
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Suspension */}
          <Card className="border-l-4 border-l-red-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-red-100 rounded-lg flex-shrink-0">
                  <UserX className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    Account Suspension or Termination
                  </h2>
                  <p className="text-slate-700 mb-4">
                    Accounts may be suspended or terminated for:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-slate-700">
                        Fraudulent behavior
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-slate-700">Impersonation</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-slate-700">Harassment</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-slate-700">Policy violations</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="border-l-4 border-l-cyan-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-cyan-100 rounded-lg flex-shrink-0">
                  <RefreshCw className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    Updates to this Policy
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    We may update this Policy periodically. We will notify you
                    via email or app notification when significant changes are
                    made.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center py-8 border-t border-slate-200">
          <p className="text-slate-600">
            For questions about this Privacy Policy, please contact us at{' '}
            <a
              href="mailto:workcloud009@gmail.com"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              workcloud009@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
