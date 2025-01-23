import { Card } from "@/components/ui/card";

const Donate = () => {
  const bitcoinAddress = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"; // 仮のBTCアドレス

  return (
    <div className="min-h-screen px-4 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">資金提供</h1>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Bitcoinで資金提供</h2>
          <p className="text-gray-400 mb-4">
            以下のBitcoinアドレスに送金することで、プロジェクトに資金を提供することができます。
          </p>
          <div className="bg-gray-800 p-4 rounded-md">
            <code className="text-sm text-gray-300 break-all">{bitcoinAddress}</code>
          </div>
          <p className="text-gray-400 mt-4">
            ※このアドレスは仮のものです。実際の送金の前に正式なアドレスを確認してください。
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Donate; 