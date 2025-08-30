import { Mail } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Contact Information
      </h2>

      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Email Us
            </h3>
            <p className="text-gray-600"> diegofreeman78@gmail.com</p>
          </div>
        </div>

        {/* <div className="flex items-start space-x-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <MapPin className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Visit Us
            </h3>
            <p className="text-gray-600">18047 Beach Blvd Unit #8108</p>
            <p className="text-gray-600">Huntington Beach, CA 92648</p>
          </div>
        </div> */}
      </div>

      {/* Emergency Contact */}
    </div>
  );
};
