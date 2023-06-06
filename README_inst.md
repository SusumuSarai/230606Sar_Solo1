# 230606Sar_Solo1

First solo project!
[素敵な Readme の書き方](https://qiita.com/koeri3/items/f85a617dcb6efebb2cab)
[基本的な書き方とフォーマットの構文＠Git](https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

# 環境設定

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

※※以下 Git merge 関係は作成中・未確認
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

Cmd/Ctrl + C でサーバーを停止し、npm を使用して Express をインストール
`npm install express --save-dev`

フロントエンドとサーバーを同時に実行できるように以下の依存関係を追加
　・node-env-run - 環境変数を読み込むための Dominik のモジュール。開発の設定ファイルから読み込み
　・nodemon - 変更時にサーバーを自動的に再起動
　・npm-run-all - 複数の npm スクリプトを同時に実行
　・express-pino-logger および pino-colada - サーバーのロギングを強化
`npm install node-env-run nodemon npm-run-all express-pino-logger pino-colada --save-dev`

・.env ファイルをプロジェクトディレクトリに作成(現時点記載なし)

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


### Package.json 作成

ターミナル
`npm init`

##　バックエンド

### Express のインストール　

ターミナル
`npm install express`
server.js を作成
[sprint.express-http](https://github.com/codechrysalis/dig-imr-4-sprint.express-http)

### nodemon をインストール

ターミナル
`npm install --save-dev nodemon`

### knex のインストール

## フロントエンド

### react のインストール ~ パターン１　

npx create-react-app sampleapp※ ※プロジェクト名(小文字)
cd sampleapp
npm start

### react のインストール ~ パターン２　 npm 依存パッケージをインストール

Package.json に以下記載の上 ターミナルで`npm install`
`  "dependencies": {`
`    "react": "^18.2.0",`
`    "react-dom": "^18.2.0",`
`    "react-scripts": "^5.0.1"`

### Typescript

npm install typescript --save-dev
