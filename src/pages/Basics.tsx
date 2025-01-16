import { Card } from "@/components/ui/card";

const Basics = () => {
  return (
    <div className="content-section pt-24">
      <h1 className="text-4xl font-bold mb-8">Learn the Basics</h1>
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">What is Dami?</h2>
          <p className="text-gray-400">
            Dami is a next-generation internet protocol that enables secure,
            efficient, and decentralized communication between applications and
            services.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Enhanced security through advanced encryption</li>
            <li>Improved performance with optimized data transfer</li>
            <li>Decentralized architecture for better reliability</li>
            <li>Simple integration with existing systems</li>
          </ul>
        </Card>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-400 mb-4">
            Start using Dami in your applications with these simple steps:
          </p>
          <ol className="list-decimal list-inside text-gray-400 space-y-2">
            <li>Install the Dami client library</li>
            <li>Configure your connection settings</li>
            <li>Initialize the Dami protocol in your application</li>
            <li>Begin sending and receiving data</li>
          </ol>
        </Card>
      </div>
    </div>
  );
};

export default Basics;