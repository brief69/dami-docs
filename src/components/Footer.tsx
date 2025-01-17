import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-24 bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Dami Protocol</h3>
            <p className="text-gray-400">
              次世代の分散型アプリケーション向けプロトコル
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">リソース</h3>
            <ul className="space-y-2 text-gray-400">
              <li>ドキュメント</li>
              <li>開発者ガイド</li>
              <li>コミュニティ</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">お問い合わせ</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Twitter</li>
              <li>Discord</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <Button variant="link" className="text-xl font-semibold text-gray-400 hover:text-white transition-colors">
            資金を提供したい人こちら
          </Button>
          <p className="mt-4 text-gray-500">&copy; 2024 Dami Protocol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;