# Nokoroa

旅行の思い出を記録・共有するためのアプリケーション

## サービス概要

Nokoroaは、旅行の思い出をデジタルで記録し、共有するためのプラットフォームです。
写真、日記、場所情報などを組み合わせて、あなただけの旅行記録を作成できます。

## 機能

- 写真とメモの組み合わせによる思い出の記録
- 感情や体験の詳細な記録
- 思い出の振り返りと共有
- 旅の記録の時系列での管理

## 技術スタック

### フロントエンド

- **フレームワーク**: Next.js 15.3.1
- **言語**: TypeScript
- **UIライブラリ**: Material-UI (MUI) v7
- **フォーム管理**: React Hook Form + Zod
- **スタイリング**: Emotion

### 開発環境

- **コンテナ化**: Docker
- **コード品質**: ESLint, Prettier
- **型チェック**: TypeScript

## 主要ライブラリ

- **@mui/material**: UIコンポーネントライブラリ
- **@emotion/react**: CSS-in-JSソリューション
- **react-hook-form**: フォーム状態管理
- **zod**: スキーマバリデーション
- **axios**: HTTPクライアント

## 開発環境のセットアップ

1. リポジトリのクローン

```bash
git clone https://github.com/yourusername/tabi-memory-frontend.git
cd tabi-memory-frontend
```

2. 依存関係のインストール

```bash
npm install
```

3. 開発サーバーの起動

```bash
npm run dev
```

4. Dockerを使用する場合

```bash
docker-compose up
```

## ライセンス

MIT
