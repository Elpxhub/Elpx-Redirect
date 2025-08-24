import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import  ElpxLogo from "@/assets/Logo123.svg";
import { ChevronLeft, ChevronRight, User, Building2, Check } from "lucide-react";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    identity: "",
    categories: [] as string[],
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const totalSteps = 3;

  const categories = [
    "Art",
    "Business",
    "Community",
    "Education",
    "Environment",
    "Events",
    "Faith",
    "Medical",
    "Music",
    "Nature",
    "Politics",
    "Sports",
    "Tech",
    "Travel",
    "Other",
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCategoryToggle = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup:", formData);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.identity !== "";
      case 2:
        return formData.categories.length > 0;
      case 3:
        return formData.fullName && formData.email && formData.password && 
               formData.confirmPassword && formData.password === formData.confirmPassword;
      default:
        return false;
    }
  };

  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="min-h-screen bg-primary flex">
      {/* Left side - Static content */}
      <div className="hidden md:flex md:w-2/5 pl-20 pr-20 py-8 items-center p-2">
        <div className="w-full">
          <div className="mb-8">
            <div>
              <img className="h-20" src={ElpxLogo} alt="Elpx Logo" />
            </div>
            <h1 className="text-white text-[24px] font-bold mb-4">Welcome to Elpx</h1>
            <h1 className="text-white text-[48px] font-bold mb-4">Let’s begin your <br /> fundraising journey!</h1>
            <p className="text-white/90 text-lg">We’re here to guide you every step of the way.</p>
          </div>
        </div>
      </div>

      {/* Right side - Dynamic form content */}
      <div className="flex-1 bg-gray-50 flex items-center justify-center p-8">
        <div className="w-full max-w-[750px]">
          {/* Progress indicators */}
          <div className="flex items-center justify-center mb-8 space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    step < currentStep
                      ? "bg-primary text-white"
                      : step === currentStep
                      ? "bg-primary text-white"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  {step < currentStep ? <Check className="w-4 h-4" /> : step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-12 h-0.5 mx-2 transition-colors ${
                      step < currentStep ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <Card className="p-8 shadow-lg border-0">
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {/* Step 1: Select Identity */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Who are you?</h2>
                      <p className="text-gray-600 text-sm">This helps us get to know you and your fundraising needs.</p>
                    </div>

                    <div className="space-y-4">
                      <div
                        onClick={() => setFormData({ ...formData, identity: "individual" })}
                        className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.identity === "individual"
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            formData.identity === "individual" ? "bg-primary text-white" : "bg-gray-100"
                          }`}>
                            <User className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Individual</h3>
                            <p className="text-sm text-gray-600">Donations and campaigns are made for you.</p>
                          </div>
                        </div>
                      </div>

                      <div
                        onClick={() => setFormData({ ...formData, identity: "organization" })}
                        className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.identity === "organization"
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            formData.identity === "organization" ? "bg-primary text-white" : "bg-gray-100"
                          }`}>
                            <Building2 className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Organization</h3>
                            <p className="text-sm text-gray-600">Donations and campaigns are made for your organization</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Fundraising Purpose */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">What best describes what you're crowdfunding?</h2>
                      <p className="text-gray-600 text-sm">Let us know your categories.</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => {
                        const isSelected = formData.categories.includes(category);
                        return (
                          <span
                            key={category}
                            onClick={() => handleCategoryToggle(category)}
                            className={`cursor-pointer px-4 py-2 text-sm font-medium rounded-full border transition-all
                              ${
                                isSelected
                                  ? "border-primary bg-primary/10 text-primary"
                                  : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-200"
                              }
                            `}
                          >
                            {category}
                          </span>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Account Credentials */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Create an Account</h2>
                      <p className="text-gray-600 text-sm">Almost there! Just a few more details to get started.</p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Create a password"
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 border-primary text-primary rounded-lg hover:bg-primary/10"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </Button>

                {currentStep === totalSteps ? (
                  <Button
                    type="submit"
                    disabled={!isStepValid()}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Finish
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                )}
              </div>

              <div className="text-center text-sm text-gray-600 mt-6">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Log in
                </Link>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;