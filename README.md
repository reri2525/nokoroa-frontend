# Tabi Memory

旅行の思い出を記録・共有するためのアプリケーション

## サービス概要

Tabi Memoryは、旅行の思い出をデジタルで記録し、共有するためのプラットフォームです。
写真、日記、場所情報などを組み合わせて、あなただけの旅行記録を作成できます。

## 技術スタック

### フロントエンド

- **フレームワーク**: Next.js 15.3.1
- **言語**: TypeScript
- **UIライブラリ**: Material-UI (MUI) v7
- **フォーム管理**: React Hook Form + Zod
- **HTTPクライアント**: Axios
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

## Docker環境

```bash
# 開発環境の起動
docker-compose up
```
