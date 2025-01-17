import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen px-4">
      <div className="max-w-4xl mx-auto pt-24">
        <div className="text-center mb-24">
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

        <div className="space-y-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
            {t.whatIsDami}
          </h2>
          
          {Object.values(t.principles).map((principle, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">{principle.title}</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-300">
                {principle.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-lg">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;