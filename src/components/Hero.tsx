import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          Welcome to Dami Protocol
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12">
          A revolutionary internet protocol designed for the next generation of
          decentralized applications.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/basics">
            <Button
              size="lg"
              className="w-full md:w-auto"
            >
              Learn the Basics
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/technical">
            <Button
              variant="secondary"
              size="lg"
              className="w-full md:w-auto"
            >
              Explore Technical Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;