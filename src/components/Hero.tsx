import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          {t.welcome}
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12">
          {t.subtitle}
        </p>
        <div className="flex justify-center">
          <Link to="/technical">
            <Button variant="secondary" size="lg">
              {t.technicalDetails}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;