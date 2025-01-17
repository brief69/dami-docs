import CodeBlock from "@/components/CodeBlock";
import { Card } from "@/components/ui/card";

const Technical = () => {
  const sampleCode = `
// Initialize Dami client
const dami = new DamiClient({
  endpoint: "wss://your-endpoint",
  apiKey: "your-api-key"
});

// Connect to the network
await dami.connect();

// Send a message
await dami.send({
  channel: "main",
  data: { message: "Hello, Dami!" }
});`;

  return (
    <div className="content-section pt-24">
      <h1 className="text-4xl font-bold mb-8">Technical Details</h1>
      
      <Card className="p-6 mb-8">
        <p className="text-gray-400 whitespace-pre-line">
          ああ、長い文章か、と思ったり、時間がなかったり、眠かったりするでしょう。
          そんな君は、この文章を読まずにその画面を閉じたり、前のページに戻っていい。
          これは、読まなくていいということで、読まないといけないような気がしてしまう効果を誘発するためのものでも、突き放す意味もない。

          なぜなら、これからここで説明する長い文章は、これを読まなくても君が損をしない仕組みについての詳細な説明だからだ。

          一方で読んでいくにあたり有益な情報や有益なはっけんがないということではないので、チャットgptなどの生成aiに理解できるまで説明してもらうのもいいだろう。
        </p>
      </Card>

      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Protocol Architecture</h2>
          <p className="text-gray-400">
            The Dami protocol is built on a layered architecture that ensures
            efficient data transmission while maintaining security and reliability.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Implementation Example</h2>
          <CodeBlock code={sampleCode} />
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>End-to-end encryption using AES-256-GCM</li>
            <li>WebSocket-based real-time communication</li>
            <li>Binary protocol format for efficient data transfer</li>
            <li>Automatic reconnection and state recovery</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Technical;