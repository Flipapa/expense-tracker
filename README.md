# 親父の臍繰り金 記帳軟體專案
此專案讓使用者可以新增、瀏覽、篩選支出紀錄，同時具備修改及刪除功能

##### 本專案為練習 Node.js 的 Express 框架及樣板(handlebars)，以及透過 mongoose 操作mongoDB。
也可透過 heroku 連結使用本專案：https://blooming-wildwood-59102.herokuapp.com/

## 功能
- 使用者可以瀏覽所有支出清單
- 使用者可以根據「類別」來篩選目前瀏覽的支出清單
- 使用者可以看到目前清單上所有支出的總計金額
- 使用者可以新增一筆支出
- 使用者可以編輯支出的所有屬性
- 使用者可以刪除任何一筆支出

## 環境
- Node.js v10.15.0
- express v4.17.1
- express-handlebars v5.3.2
- mongoose v5.13.2
- mongodb v4.2.14

### 安裝
1. 開啟終端機(Terminal)將此專案Clone至本機電腦
```
git clone https://github.com/Flipapa/expense-tracker.git
```
2. 進入存放此專案的資料夾
```
cd restaurant_list
```
3. 安裝 npm 套件
```
npm install
```
4. 加入種子資料
```
npm run seed
```
5. 啟動網頁伺服器
```
npm run dev
```
當 Terminal 出現以下文字表示成功連結本地伺服器
```
Express is listening on localhost:3000
```
6. 在任一瀏覽器中輸入 http://localhost:3000 開始使用本專案
