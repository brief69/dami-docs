import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const Basics = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="content-section pt-24">
      <h1 className="text-4xl font-bold mb-8">{t.learnBasics}</h1>
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">{t.whatIsDami}</h2>
          <p className="text-gray-400">{t.damiDescription}</p>
        </Card>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">{t.keyBenefits}</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>{t.benefits.security}</li>
            <li>{t.benefits.performance}</li>
            <li>{t.benefits.decentralized}</li>
            <li>{t.benefits.integration}</li>
          </ul>
        </Card>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">{t.gettingStarted}</h2>
          <ol className="list-decimal list-inside text-gray-400 space-y-2">
            <li>{t.steps.install}</li>
            <li>{t.steps.configure}</li>
            <li>{t.steps.initialize}</li>
            <li>{t.steps.start}</li>
          </ol>
        </Card>
      </div>
    </div>
  );
};

export default Basics;