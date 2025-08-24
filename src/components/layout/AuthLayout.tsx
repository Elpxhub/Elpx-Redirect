import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-primary flex">
      {/* Left side - Green background with content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">e</span>
              </div>
              <span className="text-white font-semibold text-xl">lpx</span>
            </div>
            <h1 className="text-white text-3xl font-bold mb-2">{title}</h1>
            <p className="text-white/90 text-lg">{subtitle}</p>
          </div>
          
          {/* Form container */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            {children}
          </div>
        </div>
      </div>

      {/* Right side - Pattern or image (hidden on mobile) */}
      <div className="hidden lg:block flex-1 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 bg-primary/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;