# Chatbot 專案

這是一個使用 Node.js 和 OpenAI API (GPT-3.5 Turbo) 建立的簡單命令列聊天機器人。

## 專案描述

此專案允許使用者在終端機中與 AI 進行互動式對話。它會讀取使用者的輸入，將其發送給 OpenAI API，然後顯示 AI 的回應。

## 必要條件

* Node.js (建議使用最新 LTS 版本)
* npm (通常隨 Node.js 一起安裝)
* 一個 OpenAI API 金鑰

## 安裝與設定

1.  **取得專案:** 將專案檔案下載或複製到您的本地電腦。
2.  **進入專案目錄:**
    ```bash
    cd Chatbot
    ```
3.  **安裝依賴套件:**
    ```bash
    npm install
    ```
4.  **設定 API 金鑰:**
    * 在 `Chatbot` 目錄下建立一個名為 `.env` 的檔案。
    * 在 `.env` 檔案中加入您的 OpenAI API 金鑰，格式如下：
        ```
        OPENAI_API_KEY=你的API金鑰放這裡
        ```
        請將 `你的API金鑰放這裡` 替換成您實際的 OpenAI API 金鑰。

## 操作步驟

1.  **執行程式:** 在 `Chatbot` 目錄下，執行以下命令來啟動聊天機器人：
    ```bash
    node index.js
    ```
2.  **互動:** 程式啟動後，您會看到提示 `You: `。在此輸入您的訊息，然後按 Enter。
3.  **接收回應:** AI 的回應將會以 `Bot:` 開頭顯示。
4.  **結束對話:** 若要結束程式，請輸入 `exit` 並按 Enter。
