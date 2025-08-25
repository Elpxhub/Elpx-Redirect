import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ElpxLogo from "@/assets/Logo123.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    navigate("/dashboard");
    console.log("Login:", { email, password });
  };

  return (
    <div>
      <div className="min-h-screen bg-primary flex">
        {/* Left side - Static content */}
        <div className="hidden md:flex md:w-2/5 pl-20 pr-20 py-8 items-center p-2">
          <div className="w-full">
            <div className="mb-8">
              <div>
                <img className="h-20" src={ElpxLogo} alt="Elpx Logo" />
              </div>
              <h1 className="text-white text-[24px] font-bold">
                Welcome to Elpx
              </h1>
              <h1 className="text-white text-[48px] font-bold">
                Let’s begin your <br /> fundraising journey!
              </h1>
              <p className="text-white/90 text-lg">
                We’re here to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Dynamic form content */}
        <div className="flex-1 bg-white flex items-center justify-center p-8">
          <div className="w-full bg-white p-7 max-w-[750px]">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Login</h2>
            <div className="text-sm text-gray-600 mb-3">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover"
              >
                Continue
              </Button>

              {/* <div className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
