# TSMC 程式題庫練習平台

針對台積電（TSMC）面試題型設計的完整程式練習平台，包含 80+ 題精選題目，涵蓋 Array、String、Linked List、Tree、Dynamic Programming、OOP Design、Database 等多個類別。

## 🌟 特色功能

- ✅ **80+ 精選題目**：針對台積電面試常見題型精心挑選
- ✅ **多語言解答**：提供 Python、C++、Java 三種語言的完整解答
- ✅ **詳細解題思路**：每題都有清楚的解題思路和複雜度分析
- ✅ **面試技巧**：包含台積電面試的常見追問和注意事項
- ✅ **分類篩選**：可依難度和題型快速篩選題目
- ✅ **響應式設計**：支援桌面和行動裝置瀏覽
- ✅ **程式碼高亮**：使用 highlight.js 提供清晰的程式碼顯示

## 📁 專案結構

```
tsmc-coding-practice/
├── index.html              # 首頁（題目列表）
├── styles.css              # 首頁樣式
├── script.js               # 首頁 JavaScript 邏輯
├── problems-data.js        # 所有題目資料
├── problem-detail.css      # 題目詳情頁樣式
├── problem-detail.js       # 題目詳情頁 JavaScript
├── problems/               # 題目詳情資料夾
│   ├── two-sum.html
│   ├── three-sum.html
│   ├── reverse-linked-list.html
│   ├── lru-cache.html
│   ├── parking-lot.html
│   └── ...（更多題目）
└── README.md               # 說明文件
```

## 🚀 如何使用

### 方法一：直接開啟本地檔案

1. 下載所有檔案到本地資料夾
2. 使用瀏覽器開啟 `index.html` 即可開始使用

### 方法二：使用本地伺服器（推薦）

使用本地伺服器可以避免跨域問題：

```bash
# 如果有 Python 3
python -m http.server 8000

# 如果有 Node.js 和 npx
npx http-server

# 如果有 PHP
php -S localhost:8000
```

然後在瀏覽器開啟 `http://localhost:8000`

### 方法三：部署到 GitHub Pages

1. 將專案上傳到 GitHub 儲存庫
2. 在儲存庫設定中啟用 GitHub Pages
3. 選擇主分支作為來源
4. 即可透過 `https://你的使用者名稱.github.io/儲存庫名稱/` 訪問

## 📚 題目分類

### Array & Two Pointers (20 題)
- Two Sum
- 3Sum
- Container With Most Water
- Trapping Rain Water
- 等...

### String (12 題)
- Longest Substring Without Repeating Characters
- Longest Palindromic Substring
- Valid Parentheses
- Group Anagrams
- 等...

### Linked List (10 題)
- Reverse Linked List
- Merge Two Sorted Lists
- Linked List Cycle
- LRU Cache
- 等...

### Tree (10 題)
- Maximum Depth of Binary Tree
- Binary Tree Level Order Traversal
- Validate Binary Search Tree
- Binary Tree Maximum Path Sum
- 等...

### Dynamic Programming (12 題)
- Climbing Stairs
- Longest Increasing Subsequence
- Coin Change
- Edit Distance
- 等...

### OOP Design (7 題)
- 設計停車場系統
- 設計電梯系統
- 設計圖書館管理系統
- 設計線上購物車
- 設計撲克牌遊戲
- 設計自動販賣機
- 設計檔案系統

### Database (5 題)
- Employee Salary Query
- Department Highest Salary
- Consecutive Numbers
- Rank Scores
- 複雜查詢優化

### Stack & Queue (4 題)
- Min Stack
- Daily Temperatures
- 等...

## 🎯 台積電面試準備建議

### 必須掌握的題型
1. **Array & Two Pointers**：Two Sum、3Sum、Trapping Rain Water
2. **Linked List**：Reverse Linked List、LRU Cache
3. **Tree**：二元樹遍歷、BST 驗證
4. **Dynamic Programming**：基礎 DP（爬樓梯、股票買賣）
5. **OOP Design**：停車場系統、電梯系統

### 面試技巧
- ✅ 先說出暴力解法，再逐步優化
- ✅ 清楚說明時間和空間複雜度
- ✅ 考慮邊界條件和特殊情況
- ✅ 能夠現場 Live Coding
- ✅ 準備好常見問題的延伸討論

### 常見追問方向
- 如果輸入是有序的呢？
- 空間複雜度可以再優化嗎？
- 如何處理大量資料？
- 如何設計可擴展的系統？

## 💻 技術架構

- **前端框架**：純 HTML5 + CSS3 + JavaScript (ES6+)
- **程式碼高亮**：highlight.js
- **字體**：Noto Sans TC（中文）、Fira Code（程式碼）
- **響應式設計**：支援手機、平板、桌面

## 🔧 自訂題目

如果想要新增自己的題目：

1. 在 `problems-data.js` 中加入新題目資料：
```javascript
{
    id: 51,
    number: "#NEW-1",
    title: "你的題目名稱",
    difficulty: "medium",
    category: "你的分類",
    categorySlug: "category-slug",
    description: "題目描述",
    tags: ["Tag1", "Tag2"],
    detailFile: "problems/your-problem.html"
}
```

2. 在 `problems/` 資料夾中建立新的 HTML 檔案
3. 參考 `two-sum.html` 的格式撰寫題目詳情

## 📝 授權

此專案為教育用途，題目來源參考 LeetCode 和台積電面試真題。

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request 來改進此專案！

## 📮 聯絡方式

如有任何問題或建議，歡迎透過 GitHub Issues 聯絡。

---

## 更新日誌

### v1.0.0 (2026-01-29)
- ✅ 初始版本發布
- ✅ 包含 50+ 題目
- ✅ 支援 Python、C++、Java 三種語言
- ✅ 完整的 OOP Design 和 Database 題目
- ✅ 響應式設計

---

**祝你面試順利，成功進入台積電！🎉**