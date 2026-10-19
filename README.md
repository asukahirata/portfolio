# ASUKA Portfolio

HTML / CSS / JavaScript だけで動く、1ページ完結のシンプルなポートフォリオです。ビルドツール不要。

## 構成
- index.html：サイトの内容（About / Works / Skills / Contact）
- style.css：デザイン・レスポンシブ対応
- script.js：フッターの年号更新
- assets/：スクリーンショット等を入れるフォルダ

## 使い方
1. `index.html` をブラウザで開く。
2. 実績名、仕事内容、プロフィールを自身の実際の内容に書き換える。
3. `hello@example.com` を公開用メールアドレスに変更する。
4. 画像を入れる場合は `assets/work-01.jpg` などを保存し、該当する `.work-thumb` の中身を `<img src="assets/work-01.jpg" alt="制作サイトのスクリーンショット">` に変更する。画像全面にしたい場合はCSSに `.work-thumb img{width:100%;height:100%;object-fit:cover}` を追加する。
5. 実績の掲載許可、守秘義務、クライアント名、素材の利用条件を確認してから公開する。

## 色や幅の変更
`style.css` 冒頭の `:root` 内でカラー、コンテンツ最大幅（`--inner:1080px`）、左右余白（`--side`）を調整できます。

## 公開
GitHub Pages / Netlify / レンタルサーバーなどに、そのままアップロードできます。
