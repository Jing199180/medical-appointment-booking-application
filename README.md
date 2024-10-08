# 徒手物理治療線上預約系統

## 簡介
線上預約系統是一個使用 React 和 Supabase 建立的 Web 應用，用於管理用戶的預約功能。系統讓客戶可以輕鬆地選擇時間進行預約，而管理者可以查看和管理預約時間。

## 目標
本系統旨在提供一個簡單且高效的線上預約解決方案，讓徒手物理治療服務的預約流程數位化，減輕病患和物理治療師之間流程繁瑣的預約過程。

## 功能
- 使用者可以瀏覽日曆並選擇可用的預約時段
- 使用者可以直接進行預約
- 管理者可以設置可用的預約時間段
- 管理者可以新增物理治療師資訊(新增、複製、刪除)
- 管理者可以新增其他管理者帳號
- 管理者可以管理預約清單(刪除、未完成、完成)
- 使用 React Query 進行數據管理和請求處理
- 與 Supabase 後端整合，用於數據存儲和管理

## 架構
- 前端：React.js (使用 Vite 開發)
- 後端：Node.js + Supabase
- 資料庫：Supabase 用於儲存用戶和預約數據
- 狀態管理：React Query 用於處理資料的抓取和更新
- UI 框架：Styled-Components用於設計響應式使用者介面

## 系統需求
- Node.js v14.0 或以上
- Vite 開發環境
- Supabase 資料庫帳號

## 安裝與執行
### 1. 克隆專案到本地:
git clone https://github.com/Jing199180/medical-appointment-booking-application.git

### 2. 進入專案目錄並安裝依賴項
cd 徒手物理治療線上預約系統
npm install

### 3. 初始化需要有Supabase API 金鑰：
在supabase.js文件裡做設定

### 4. 啟動開發伺服器
npm run dev

### 5. 使用方式
#### 管理者: 
- 管理者輸入帳號以及密碼登入
- 在主頁可以瀏覽月曆設置可預約的時間段
- 在Booking頁面可以管理預約的相關資訊
- 在Doctors頁面可以管理物理治療師的相關資訊
- 在Users頁面可以新增新的管理者
- 在頁面右上方可以進入Account頁面和登出
- Account頁面可以修改管理者的資料
 
#### 使用者:
- 使用者點擊立即預約
- 在主頁可以瀏覽月曆選擇可預約的時間段
- 點擊預約後輸入使用者的相關資料
- 點擊立即預約完成預約步驟

## 技術棧
- React.js
- Supabase
- React Query
- Context API
- React Router
- Node.js


   

  
