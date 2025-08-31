import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-xl">e</span>
            </div>
            <span className="text-white font-semibold text-2xl">etps</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-6">
            Turn your ideas into reality
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful fundraisers and start your journey today. 
            Create campaigns, share your story, and reach your goals.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Start Fundraising
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
