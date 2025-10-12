# React Animation Hooks Collection (TypeScript + React + Storybook)

React 18とTypeScriptで構築されたカスタムアニメーションフックのショーケースアプリです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-app-showcase-animation/demo/

## 主要機能

### アニメーションフック（30種類以上）

#### 基本アニメーション
- **Fade In/Out**: フェードイン・アウト効果
- **Count Up**: 数値カウントアップアニメーション
- **Typewriter**: タイプライター効果
- **Bounce**: バウンスアニメーション
- **Shake**: シェイクエフェクト
- **Pulse**: パルスアニメーション

#### インタラクション
- **Hover**: ホバーエフェクト
- **Draggable**: ドラッグ可能要素
- **Ripple**: リップルエフェクト
- **Magnetic Hover/Drag**: マグネット効果

#### UI要素
- **Modal**: モーダルアニメーション
- **Accordion**: アコーディオン展開
- **Carousel**: カルーセルスライダー
- **Slide Menu**: スライドメニュー
- **Flip Card**: カードフリップ効果
- **Loading Spinner**: ローディングスピナー

#### スクロール効果
- **Scroll Animation**: スクロール連動アニメーション
- **Scroll Snap**: スクロールスナップ
- **Smooth Scroll**: スムーススクロール

#### テキストエフェクト
- **Text Reveal**: テキスト表示エフェクト
- **Text Shuffle**: テキストシャッフル
- **Line Reveal**: ライン表示エフェクト
- **Number Scramble**: 数字スクランブル

#### 高度なエフェクト
- **Transform Interpolation**: 変形補間
- **Interpolate**: 値の補間
- **Blur Reveal**: ブラー表示エフェクト
- **Neon Pulse**: ネオンパルス
- **Wave Effect**: 波エフェクト
- **Staggered List**: 段階的リスト表示
- **Follow Cursor**: カーソル追従
- **Reveal On Hover**: ホバー時表示
- **Progress Bar**: プログレスバー

### 実装の特徴
- 外部アニメーションライブラリ不使用
- `requestAnimationFrame` を使用した高パフォーマンス実装
- TypeScriptによる型安全性
- 各フックに専用デモページとStorybook完備

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール
- **React Router** - ルーティング

## プロジェクト構造

```
src/
├── features/                      # 機能別モジュール（30+ animations）
│   ├── fade-in/                   # フェードインアニメーション
│   │   ├── useFadeIn.ts           # アニメーションフック
│   │   └── FadeInPage.tsx         # デモページ
│   ├── count-up/                  # カウントアップアニメーション
│   │   ├── useCountUp.ts
│   │   └── CountUpPage.tsx
│   ├── typewriter/                # タイプライターエフェクト
│   │   ├── useTypewriter.ts
│   │   └── TypewriterPage.tsx
│   └── ... (その他27+のアニメーション)
├── components/                    # 共通UIコンポーネント
│   ├── Navigation.tsx             # ナビゲーションメニュー
│   └── PageLayout.tsx             # ページレイアウト
├── pages/                         # アプリケーションページ
│   └── Home.tsx                   # ホームページ（ギャラリー）
├── stories/                       # Storybook用ストーリー
├── App.tsx                        # メインアプリ（ルーティング）
└── main.tsx                       # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License