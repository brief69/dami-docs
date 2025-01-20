# Dami Protocol Documentation

Dami Protocol（ダミ・プロトコル）の公式ドキュメントサイトです。

## 概要

このプロジェクトは、次世代の分散型アプリケーション向けプロトコルであるDami Protocolの技術仕様、開発者ガイド、APIリファレンスを提供するドキュメントサイトです。

## 技術スタック

- [Vite](https://vitejs.dev/) - ビルドツール
- [React](https://react.dev/) - UIフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型付きJavaScript
- [shadcn/ui](https://ui.shadcn.com/) - UIコンポーネントライブラリ
- [Tailwind CSS](https://tailwindcss.com/) - CSSフレームワーク
- [Firebase Hosting](https://firebase.google.com/docs/hosting) - ホスティングサービス

## 開発環境のセットアップ

### 一般的な開発者向け
```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build
```

### プロジェクト管理者向け（デプロイ権限必要）
```bash
# Firebase CLIのインストール（初回のみ）
npm install -g firebase-tools

# Firebaseへのログイン
firebase login

# Firebaseへのデプロイ
firebase deploy
```

## プロジェクト構成

```
dami-docs/
├── src/
│   ├── components/     # UIコンポーネント
│   ├── contexts/       # Reactコンテキスト
│   ├── lib/           # ユーティリティ関数
│   ├── pages/         # ページコンポーネント
│   └── utils/         # ヘルパー関数
├── docs/              # ドキュメントコンテンツ
└── public/            # 静的ファイル
```

## 多言語対応

現在、以下の言語をサポートしています：

- 日本語 (デフォルト)
- English
- 中文

## コントリビューション

プロジェクトへの貢献を歓迎します。以下のガイドラインに従ってください：

1. このリポジトリをフォークする
2. 機能追加やバグ修正用の新しいブランチを作成する
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. 変更を加え、コミットする
4. `/docs` ディレクトリ内に変更内容の詳細を記録する
   - フォーマット: `d{YY}-{MM}-{DD}.md`
   - 例: `d25-01-20.md`
5. プルリクエストを作成する

## 開発前の準備

1. 環境変数の設定
   - `.env` ファイルを作成し、必要な環境変数を設定
   ```env
   VITE_FIREBASE_API_KEY=xxx
   VITE_FIREBASE_AUTH_DOMAIN=xxx
   # その他の必要な環境変数
   ```

2. Firebase設定
   - Firebaseプロジェクトの作成
   - Firebase CLIでのログイン
   ```bash
   firebase login
   ```

## ライセンス

MIT License

Copyright (c) 2024 Dami Protocol

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
