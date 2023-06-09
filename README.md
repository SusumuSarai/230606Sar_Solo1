# 230606Sar_Solo1

First solo project!
[素敵な Readme の書き方](https://qiita.com/koeri3/items/f85a617dcb6efebb2cab)
[基本的な書き方とフォーマットの構文＠Git](https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
[Awesome README](https://github.com/matiassingers/awesome-readme)

- [1.about_Application](#1.about_Application)
- [2.Setup](#2.Setup)
- [3.Render setting](#3.Render_setting)
- [4.Getting_Started_with_CreateReactApp](#4.Getting_Started_withCreateReactApp)

# 1.about_Application

ピアノ発表会のプログラムを HP で案内する

## アプリの構想

❤️ 素敵な　〜見たくなる・遊べる〜　ピアノ教室の HP を提供する　 ❤️
　・お知らせごとを共有できる　〜お知らせ欄　
　・ピアノ発表会のプログラムを見ることができる　〜プログラム欄
　・音楽への興味が深まる情報に触れられる　〜API との接続（曲／作曲家情報等）
　・幼児向け〜楽しい音を使ったお遊びができる　〜（構想中〜音符カード？）
　・過去の楽曲を調べることができる　〜データベース機能
　・生徒と先生のやりとりができる　　〜入力フォーム＆ID 登録

❤️ 機能　（直感的に使えること）
→【MVP】ピアノ発表会のプログラムを DB に溜めて、Web 上で見ることができる。
【Release2】　"Open Opus API" と繋げて、作曲家情報・画像を提供
【Release3】　プログラムの更新、問合せフォーム機能を追加
【Release4】　 css でデザイン性を高める

## 直近の目標

・目標：以下のフルスタック Web Application の MVP を 限定公開する（〜６/９金）
　 Must : ピアノ発表会’2022 のプログラムを（DB から取得し）見られる
　 better:ピアノ発表会’2023 の曲目を登録できる
　　 毎年の内容が振り返れるよう DATABESE "piano" に情報を溜める

・使用技術
Front : React + TypeScript
Server : Express
Database : Postges / Knex
Deploy : Render.com
Test : (not yet)

・評価基準
⭕️ 1. データベース、サーバーとフロントが繋がっていて、機能している
⭕️ 2. データベースのスキーマがあるか（Migration file）
⭕️ 3. API のエンドポイントがあるか (HTTP メソッド get)
⭕️ 4. React を使用したフロントサイド実装（useEffect/useState）
⭕️ 5. package.json 内にスクリプト（scripts）が書かれている
❌ 6. テストがあるか
⭕️ 7. README が書かれている（セットアップ、アプリの内容、および将来の計画）
⭕️ 8. デプロイされているか

# 2.Setup

## Git 操作

### リポジトリ作成

[リポジトリの作成](https://magazine.techacademy.jp/magazine/6235#sec3_1)
GitHub にログインした状態で以下にアクセス
https://github.com/new
「Repository name」の入力、必要に応じて「Description」も入力。
　※名前は小文字アルファベット＋許容な記号とする。大文字は react インストールで引っかかる
種類「Public」or「Private」選択。
　※ソースコードを公開したくない場合は「Private」を選択
README ファイル作成の場合は「Initialize this repository with a README」にチェック。
.gitignore や license については後で追加や変更ができるので、None を選択。

### 作業用ローカルブランチへのコピーと更新

以下 Terminal にて:
・ローカルの所定の場所にクローンし作業場所準備
`git clone (Code-SSH)`
※初回は"clone"、２回目以降は"pull" で (その時点の) master をコピーする

・作業用ブランチを設定
　ブランチ確認
`git branch`
　作業中ブランチに「＊」

・作業用ブランチに移動
`git checkout branchName`
　ブランチない場合、新規に作成
`git branch branchName`
・作業ブランチ再確認
`git branch`

※作業用ブランチ作成＋ブランチ切り替え
`git checkout -b branchName`

### 更新ファイルのブランチへの push

・作業後、アドとコミット
`git status`
`git add .`
`git status`
`git commit -m "comment"`

・リモートリポジトリ（更新 1 作業が終わったらそのブランチ）にプッシュ（アップ）する
`git push origin workbranch1`

### ※※以下 Git merge 関係は作成中・未確認

以下 Git にて
同時に作っていたファイルを合体するには、
co-worker がローカルの作業 branch にて \*\*\* を `pull` して `merge` 、コンフリクトを解消する

・master branch に `pull request` する
（co-worker が確認 OK || NG
OK なら `merge` して branch を `delete` する

### ブランチから 作業用に最新のファイルを pull（持ってくる）

対象のリポジトリ（メイン or リモートブランチ???）に入る（チェックアウト）
`git checkout ???`
リモートブランチ??? のコード取得
`git pull`
プルした内容（ファイルリスト）の確認
`ls`

※※ここまでお試し済み

### ブランチのマージ

※プルリクの場合は当該ブランチでいつものやり方？
メインの master ブランチに取り込む
まず作業中のブランチを master に切り替え
`git checkout master`
次に、sub1 ブランチの作業結果をマージ
`git merge sub1`

## Front／Back 共通

### React インストール

[Start a New React Project](https://react.dev/learn/start-a-new-react-project)
[React アプリに Node.js サーバープロキシを設定する方法](https://www.twilio.com/ja/blog/react-app-with-node-js-server-proxy-jp)
※事前に Node.js と npm をインストールしておくこと

`npm init react-app folderOrGitRepositryName`
※今回 Git でフォルダ 230606sar_solo1 を作ってそこで実施したのでその下にまた 230606sar_solo1 ができた 😅
　一旦このまま進めてみる

`cd folderOrGitRepositryName`

新しい React アプリケーションを実行し、正常に生成されたことを確認
`npm start`
回転する React ロゴが表示されたら OK

### サーバーの追加

[Express - install](https://expressjs.com/ja/starter/installing.html)
[sprint.express-http](https://github.com/codechrysalis/dig-imr-4-sprint.express-http)

Cmd/Ctrl + C でサーバーを停止し、npm を使用して Express をインストール
`npm install express --save-dev`

フロントエンドとサーバーを同時に実行できるように以下の依存関係を追加
　・node-env-run - 環境変数を読み込むための Dominik のモジュール。開発の設定ファイルから読み込み
　・nodemon - 変更時にサーバーを自動的に再起動
　・npm-run-all - 複数の npm スクリプトを同時に実行
　・express-pino-logger および pino-colada - サーバーのロギングを強化
`npm install node-env-run nodemon npm-run-all express-pino-logger pino-colada --save-dev`

・.env ファイルをプロジェクトディレクトリに作成(現時点記載なし)
・プロジェクトのディレクトリに .gitignore という名前のファイルを作成
.gitignore 中の最初の行に node_modules を追加
git status を実行して、 node_modules ディレクトリが無視されていることを確認

・プロジェクトディレクトリに、server という新しいディレクトリと server/index.js ファイルを作成
以下のテスト用コードを記載

```
const express = require('express');
const pino = require('express-pino-logger')();

const app = express(); app.use(express.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3001, () => console.log('Express server is running on localhost:3001') );
```

以降はまだ記載（転記）していません。HP 参照のこと

## typescript のインストール

※インストールしたものの、今回の開発では時間の関係上不使用※
[TypeScript チュートリアル -環境構築編-](https://qiita.com/ochiochi/items/efdaa0ae7d8c972c8103)
Terminal で
`npm install -g typescript`

```
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.
```

※上記の Error が出た場合は、管理者権限でインストール
`sudo npm install -g typescript`
この後の「Password:」は macOS アカウントのパスワードを入力

※※Git リポジトリでセキュリティ強化したかも〜merge 必要などのとセット？

`tsc -v` でバージョン表示（Version 5.1.3 など）されればインストール完了

## knex のインストール

[Knex.js - Installation](https://knexjs.org/guide/#node-js)
[](https://zenn.dev/wkb/books/node-tutorial/viewer/todo_06)
・knex.js モジュールをインストール
`npm install knex`
・knex.js の接続設定ファイルを作成
`npx knex init`
・knexfile.js というファイルの設定（下記）を実施
また本ファイル knexfile.js を ./db（新規作成） に移動し、以下の構成フォルダを作成
(./db/data/migrations, および seeds)

```
require("dotenv").config({
  path: "../.env",
});
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: "pg",
    connection: {
      user: process.env.DB_USER || "user",
      database: process.env.DB_NAME || "remainder",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
};
```

・同フォルダ（ ./db）にファイル 「knex.js」 を新規作成し、以下を記載

```
const knex = require("knex");
const knexConfig = require("./knexfile");
const environment = process.env.DATABASE_URL ? "production" : "development";

module.exports = knex(knexConfig[environment]);
```

・次に ./server/index.js から knex.js を読み込み
knex.js モジュールと設定が格納されている定数 knex を読み込み
`const knex = require('../db/knex');`

## PostgreSQL のインストール

Relational DATABASE (SQL: Structured Query Language) をインストールする
`npm install pg`
package.json の "scripts" に以下の "migrate, seed" スクリプトを追加、
"build" スクリプトを変更

```
"scripts": {
  "migrate-make": "npx knex migrate:make --knexfile db/knexfile.js",
  "migrate-latest": "npx knex migrate:latest --knexfile db/knexfile.js",
  "migrate-down": "npx knex migrate:down --knexfile db/knexfile.js",
  "migrate-back": "npx knex migrate:rollback --knexfile db/knexfile.js",
  "seed-make": "npx knex seed:make --knexfile db/knexfile.js",
  "seed-data": "npx knex seed:run --knexfile db/knexfile.js",
  "build": "npm install && npm run migrate-back && npm run migrate-latest && npm run seed-data && react-scripts build"
}
```

⭐️ 最後に DB を作って動作するか（ディレクトリ含めて）確認すること！

# 3.Render_setting

[render.com](https://render.com/)
[dig-imr-4-sprint.fullstack-deployment-dig](https://github.com/codechrysalis/dig-imr-4-sprint.fullstack-deployment-dig)

### Render のアカウント取得

render.com にアクセスし、最新の説明に従ってアカウントを設定
（有料プランにサインアップする必要なし）

Github のアカウントと接続し、リポジトリへのアクセスを許可、
「新しい Web サービス」を作成

### Web Service の作成　（Node サーバーの設定）

[Render dashboard](https://dashboard.render.com/) にアクセス

"New" ボタンをクリック
"Web Service" を選択

Github のリポジトリに接続し、リストからこのリポジトリを選択。
（このリポジトリが選択肢にない場合は、Github のリポジトリにアクセスする権限を Render に付与するようにアカウントを設定）
・Name ：他で使っていない名前を入力
・Region ：あなたがいる場所に最も近いものを選択
・Branch ：master など対象の Branch 名 を入力
・Root Directory：　空のまま（デフォルトでこのプロジェクトのルートになる）
・Environment ：　"Node" を選択
・Build Command ：`npm run build` を入力
　※package.json の scripts に下記追加（npm i から react build まで）
　```
"build": "npm install && npm run migrate-back && npm run migrate-latest && npm run seed-data && react-scripts build",

```
⭐️Start Command : サーバーを起動するスクリプトを記載
`npm run server-render`
　※package.json の scripts に以下追記
  `"server-render": "node ./server/index.js",`
  （今回デフォルトのサーバー起動コマンド`npm run server`は開発環境向けの scrypt
  `"server": "node-env-run server --exec nodemon"` のため）
【注意１】
　"server/index.js" に以下追記し、Express で静的ファイル（.js, .css などを "react/webpack" でbuildしたもの）を使えるようにしておくこと
 *`app.use(express.static("build"));`　を追記*
【注意２】src/App.js のサーバーとのやり取りのエンドポイントを変更
　新：fetch("/list")　※公開環境用
　旧：fetch("http://localhost:8080/list")　※開発環境用
　
※以下render入力部説明を参考引用
```

Start Command
This command runs in the root directory of your app and is responsible for starting its processes. It is typically used to start a webserver for your app. It can access environment variables defined by you in Render.
(このコマンドは、アプリのルート・ディレクトリで実行され、アプリのプロセスを開始する役割を果たします。通常、アプリのウェブサーバーを起動するために使用されます。Render で定義した環境変数にアクセスすることができます。)

```
・"Free"プランが選択されていることを確認（有効期限は90日間）

"Create Web Service" ボタンをクリックします。

### Database の設定
・ダッシュボードで "New" をクリック、今回は "PostgreSQL" を選択
・一意の名前を付ける（例：pianoPostgres）
・データベースフィールドに piano と入力します。
・"User" フィールドに覚えやすいユーザー名を入力
・"Region" フィールドには、最も近いリージョンを選択
・"PostgreSQL version" を 14 に設定
 （他の設定はひとまず無視）
・"Free" プランが選択されていることを確認

 "Create Database" ボタンをクリック
 ダッシュボードに戻り、データベースのステータスが "Available" に変わるのを待つ

### Render Web サービスに　Database を接続する設定
環境変数 "Environment Variables" を追加
・ダッシュボードから、作成した PostgreSQL データベースをクリック
・"Info" タブの "Connections" セクションから、"Internal Database URL" をコピー
・Render のダッシュボードに戻り、作成した Node の Web サービスをクリック
・"Environment" タブをクリック
　・"Add Environment Variable" をクリック
　　・"Key"に "DATABASE_URL" を入力
　　・"Value" に先ほどコピーした "Internal Database URL"を貼り付け
　・もう一度 "Add Environment Variable" をクリック
　　・"Key"に *"NODE_ENV"*を入力
　　・"Value" に *"production"* と入力
　【補足】knex（knex.js, knexfile.js） を "production mode" で動かすための設定
 "Save Changes" をクリック

 ### デプロイ Deploy
renderダッシュポードから所定のWebサービスを選択、"Manual Deploy" "Deploy latest commit" をクリック
しばらく待つ（built ~ deploy）と "url" が発行される

[Sarai Pinao Lesson](https://two30608sar-solo.onrender.com)



**_以下は React の Readme を転記_**

# 4.Getting_Started_withCreateReactApp

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
```
