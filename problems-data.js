// TSMC 程式題庫資料
const problemsData = [
    // Array & Two Pointers
    {
        id: 1,
        number: "#1",
        title: "Two Sum",
        difficulty: "easy",
        category: "Array & Two Pointers",
        categorySlug: "array",
        description: "給定一個整數陣列和目標值，找出陣列中兩個數字相加等於目標值的索引位置。台積電面試常見題型。",
        tags: ["Array", "Hash Table"],
        detailFile: "problems/two-sum.html"
    },
    {
        id: 2,
        number: "#26",
        title: "Remove Duplicates from Sorted Array",
        difficulty: "easy",
        category: "Array & Two Pointers",
        categorySlug: "array",
        description: "從已排序陣列中移除重複元素，使用雙指標原地操作。台積電常考驗對記憶體使用的理解。",
        tags: ["Array", "Two Pointers"],
        detailFile: "problems/remove-duplicates.html"
    },
    {
        id: 3,
        number: "#11",
        title: "Container With Most Water",
        difficulty: "medium",
        category: "Array & Two Pointers",
        categorySlug: "array",
        description: "找出可以容納最多水的兩條線，使用雙指標技巧。考驗貪心演算法的理解。",
        tags: ["Array", "Two Pointers", "Greedy"],
        detailFile: "problems/container-water.html"
    },
    {
        id: 4,
        number: "#15",
        title: "3Sum",
        difficulty: "medium",
        category: "Array & Two Pointers",
        categorySlug: "array",
        description: "找出陣列中所有總和為 0 的三元組，使用排序和雙指標。台積電面試高頻題。",
        tags: ["Array", "Two Pointers", "Sorting"],
        detailFile: "problems/three-sum.html"
    },
    {
        id: 5,
        number: "#42",
        title: "Trapping Rain Water",
        difficulty: "hard",
        category: "Array & Two Pointers",
        categorySlug: "array",
        description: "計算可以接住的雨水量，使用雙指標或動態規劃。台積電進階題型。",
        tags: ["Array", "Two Pointers", "Dynamic Programming"],
        detailFile: "problems/trapping-rain-water.html"
    },
    {
        id: 6,
        number: "#53",
        title: "Maximum Subarray",
        difficulty: "medium",
        category: "Array & Two Pointers",
        categorySlug: "array",
        description: "找出最大子陣列和，使用 Kadane 算法。必須理解動態規劃概念。",
        tags: ["Array", "Dynamic Programming"],
        detailFile: "problems/maximum-subarray.html"
    },

    // String
    {
        id: 7,
        number: "#3",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "medium",
        category: "String",
        categorySlug: "string",
        description: "找出最長無重複字符子字串，使用滑動視窗。台積電最愛考的字串題之一。",
        tags: ["String", "Hash Table", "Sliding Window"],
        detailFile: "problems/longest-substring.html"
    },
    {
        id: 8,
        number: "#5",
        title: "Longest Palindromic Substring",
        difficulty: "medium",
        category: "String",
        categorySlug: "string",
        description: "找出最長回文子字串，使用中心擴展或動態規劃。考驗多種解法的掌握度。",
        tags: ["String", "Dynamic Programming"],
        detailFile: "problems/longest-palindrome.html"
    },
    {
        id: 9,
        number: "#20",
        title: "Valid Parentheses",
        difficulty: "easy",
        category: "String",
        categorySlug: "string",
        description: "驗證括號字串是否有效，使用堆疊資料結構。Stack 基礎應用題。",
        tags: ["String", "Stack"],
        detailFile: "problems/valid-parentheses.html"
    },
    {
        id: 10,
        number: "#125",
        title: "Valid Palindrome",
        difficulty: "easy",
        category: "String",
        categorySlug: "string",
        description: "判斷字串是否為回文，忽略大小寫和非字母數字字符。字串處理基本題。",
        tags: ["Two Pointers", "String"],
        detailFile: "problems/valid-palindrome.html"
    },
    {
        id: 11,
        number: "#49",
        title: "Group Anagrams",
        difficulty: "medium",
        category: "String",
        categorySlug: "string",
        description: "將字母異位詞分組，使用哈希表和排序。Hash Table 的經典應用。",
        tags: ["Hash Table", "String", "Sorting"],
        detailFile: "problems/group-anagrams.html"
    },

    // Linked List
    {
        id: 12,
        number: "#21",
        title: "Merge Two Sorted Lists",
        difficulty: "easy",
        category: "Linked List",
        categorySlug: "linked-list",
        description: "合併兩個已排序的鏈結串列成一個新的已排序串列。Linked List 基礎題。",
        tags: ["Linked List", "Recursion"],
        detailFile: "problems/merge-sorted-lists.html"
    },
    {
        id: 13,
        number: "#141",
        title: "Linked List Cycle",
        difficulty: "easy",
        category: "Linked List",
        categorySlug: "linked-list",
        description: "判斷鏈結串列是否有環，使用快慢指標。Floyd's Cycle Detection Algorithm。",
        tags: ["Linked List", "Two Pointers"],
        detailFile: "problems/linked-list-cycle.html"
    },
    {
        id: 14,
        number: "#206",
        title: "Reverse Linked List",
        difficulty: "easy",
        category: "Linked List",
        categorySlug: "linked-list",
        description: "反轉鏈結串列，使用迭代或遞迴。台積電必考題，要能現場 Live Coding。",
        tags: ["Linked List", "Recursion"],
        detailFile: "problems/reverse-linked-list.html"
    },
    {
        id: 15,
        number: "#2",
        title: "Add Two Numbers",
        difficulty: "medium",
        category: "Linked List",
        categorySlug: "linked-list",
        description: "將兩個非空鏈結串列中儲存的數字相加，每個節點包含一位數字。考驗指標操作能力。",
        tags: ["Linked List", "Math"],
        detailFile: "problems/add-two-numbers.html"
    },
    {
        id: 16,
        number: "#146",
        title: "LRU Cache",
        difficulty: "hard",
        category: "Linked List",
        categorySlug: "linked-list",
        description: "實現 LRU 快取機制，使用雙向鏈結串列和哈希表。台積電高階題，考驗系統設計能力。",
        tags: ["Hash Table", "Linked List", "Design"],
        detailFile: "problems/lru-cache.html"
    },

    // Tree
    {
        id: 17,
        number: "#104",
        title: "Maximum Depth of Binary Tree",
        difficulty: "easy",
        category: "Tree",
        categorySlug: "tree",
        description: "計算二元樹的最大深度。Tree 遍歷基礎題。",
        tags: ["Tree", "DFS", "BFS"],
        detailFile: "problems/max-depth-tree.html"
    },
    {
        id: 18,
        number: "#226",
        title: "Invert Binary Tree",
        difficulty: "easy",
        category: "Tree",
        categorySlug: "tree",
        description: "翻轉二元樹，使用遞迴或迭代。經典遞迴問題。",
        tags: ["Tree", "DFS", "BFS"],
        detailFile: "problems/invert-tree.html"
    },
    {
        id: 19,
        number: "#102",
        title: "Binary Tree Level Order Traversal",
        difficulty: "medium",
        category: "Tree",
        categorySlug: "tree",
        description: "二元樹的層序遍歷，使用佇列實現 BFS。台積電常考 BFS 應用。",
        tags: ["Tree", "BFS"],
        detailFile: "problems/level-order-traversal.html"
    },
    {
        id: 20,
        number: "#98",
        title: "Validate Binary Search Tree",
        difficulty: "medium",
        category: "Tree",
        categorySlug: "tree",
        description: "驗證是否為有效的二元搜尋樹。需要理解 BST 的性質。",
        tags: ["Tree", "DFS", "BST"],
        detailFile: "problems/validate-bst.html"
    },
    {
        id: 21,
        number: "#124",
        title: "Binary Tree Maximum Path Sum",
        difficulty: "hard",
        category: "Tree",
        categorySlug: "tree",
        description: "找出二元樹中的最大路徑和，使用後序遍歷。台積電進階樹題。",
        tags: ["Tree", "DFS", "Dynamic Programming"],
        detailFile: "problems/max-path-sum.html"
    },

    // Dynamic Programming
    {
        id: 22,
        number: "#70",
        title: "Climbing Stairs",
        difficulty: "easy",
        category: "Dynamic Programming",
        categorySlug: "dp",
        description: "爬樓梯的方法數，經典動態規劃入門題。Fibonacci 變形。",
        tags: ["Math", "Dynamic Programming", "Memoization"],
        detailFile: "problems/climbing-stairs.html"
    },
    {
        id: 23,
        number: "#121",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "easy",
        category: "Dynamic Programming",
        categorySlug: "dp",
        description: "只能交易一次的股票最大利潤。DP 基礎應用。",
        tags: ["Array", "Dynamic Programming"],
        detailFile: "problems/stock-buy-sell.html"
    },
    {
        id: 24,
        number: "#62",
        title: "Unique Paths",
        difficulty: "medium",
        category: "Dynamic Programming",
        categorySlug: "dp",
        description: "計算從左上到右下的不同路徑數，使用動態規劃。經典 2D DP 問題。",
        tags: ["Math", "Dynamic Programming"],
        detailFile: "problems/unique-paths.html"
    },
    {
        id: 25,
        number: "#300",
        title: "Longest Increasing Subsequence",
        difficulty: "medium",
        category: "Dynamic Programming",
        categorySlug: "dp",
        description: "找出最長遞增子序列的長度，使用 DP 或二分搜尋。台積電愛考的 DP 題。",
        tags: ["Array", "Binary Search", "Dynamic Programming"],
        detailFile: "problems/longest-increasing-subsequence.html"
    },
    {
        id: 26,
        number: "#322",
        title: "Coin Change",
        difficulty: "medium",
        category: "Dynamic Programming",
        categorySlug: "dp",
        description: "找出湊成總金額的最少硬幣數，使用動態規劃。完全背包問題。",
        tags: ["Array", "Dynamic Programming"],
        detailFile: "problems/coin-change.html"
    },
    {
        id: 27,
        number: "#72",
        title: "Edit Distance",
        difficulty: "hard",
        category: "Dynamic Programming",
        categorySlug: "dp",
        description: "計算兩個字串的最小編輯距離，使用動態規劃。經典字串 DP 問題。",
        tags: ["String", "Dynamic Programming"],
        detailFile: "problems/edit-distance.html"
    },

    // OOP Design
    {
        id: 28,
        number: "#OOP-1",
        title: "設計停車場系統",
        difficulty: "medium",
        category: "OOP Design",
        categorySlug: "oop",
        description: "設計一個停車場管理系統，需要考慮不同車型、收費機制、停車位管理等。台積電常見的系統設計題。",
        tags: ["OOP", "Design", "System Design"],
        detailFile: "problems/parking-lot.html"
    },
    {
        id: 29,
        number: "#OOP-2",
        title: "設計電梯系統",
        difficulty: "medium",
        category: "OOP Design",
        categorySlug: "oop",
        description: "設計一個電梯控制系統，包含多台電梯的調度邏輯、樓層管理等。考驗物件導向設計能力。",
        tags: ["OOP", "Design", "Algorithm"],
        detailFile: "problems/elevator-system.html"
    },
    {
        id: 30,
        number: "#OOP-3",
        title: "設計圖書館管理系統",
        difficulty: "easy",
        category: "OOP Design",
        categorySlug: "oop",
        description: "設計一個圖書館管理系統，包含借還書、會員管理、書籍管理等功能。",
        tags: ["OOP", "Design"],
        detailFile: "problems/library-system.html"
    },
    {
        id: 31,
        number: "#OOP-4",
        title: "設計線上購物車",
        difficulty: "medium",
        category: "OOP Design",
        categorySlug: "oop",
        description: "設計一個線上購物車系統，需要處理商品管理、價格計算、優惠券等。",
        tags: ["OOP", "Design"],
        detailFile: "problems/shopping-cart.html"
    },
    {
        id: 32,
        number: "#OOP-5",
        title: "設計撲克牌遊戲",
        difficulty: "hard",
        category: "OOP Design",
        categorySlug: "oop",
        description: "設計一個撲克牌遊戲框架（如德州撲克），需要考慮牌組、玩家、遊戲規則等。台積電進階 OOP 題。",
        tags: ["OOP", "Design", "Game"],
        detailFile: "problems/poker-game.html"
    },

    // Database
    {
        id: 33,
        number: "#SQL-1",
        title: "Employee Salary Query",
        difficulty: "easy",
        category: "Database",
        categorySlug: "database",
        description: "查詢員工薪資資訊，包含基本的 SELECT、WHERE、ORDER BY 操作。",
        tags: ["SQL", "Database"],
        detailFile: "problems/employee-salary.html"
    },
    {
        id: 34,
        number: "#SQL-2",
        title: "Department Highest Salary",
        difficulty: "medium",
        category: "Database",
        categorySlug: "database",
        description: "找出每個部門薪資最高的員工，使用 JOIN 和子查詢。台積電常見 SQL 題。",
        tags: ["SQL", "Database", "JOIN"],
        detailFile: "problems/department-salary.html"
    },
    {
        id: 35,
        number: "#SQL-3",
        title: "Consecutive Numbers",
        difficulty: "medium",
        category: "Database",
        categorySlug: "database",
        description: "找出連續出現至少三次的數字，考驗自連接(Self Join)的使用。",
        tags: ["SQL", "Database"],
        detailFile: "problems/consecutive-numbers.html"
    },
    {
        id: 36,
        number: "#SQL-4",
        title: "Rank Scores",
        difficulty: "medium",
        category: "Database",
        categorySlug: "database",
        description: "對分數進行排名，使用視窗函數(Window Function)。",
        tags: ["SQL", "Database", "Window Function"],
        detailFile: "problems/rank-scores.html"
    },
    {
        id: 37,
        number: "#SQL-5",
        title: "複雜查詢優化",
        difficulty: "hard",
        category: "Database",
        categorySlug: "database",
        description: "優化複雜的多表查詢，考慮索引、執行計畫等。台積電資深工程師職位會考。",
        tags: ["SQL", "Database", "Optimization"],
        detailFile: "problems/query-optimization.html"
    },

    // Additional Array Problems
    {
        id: 38,
        number: "#88",
        title: "Merge Sorted Array",
        difficulty: "easy",
        category: "Array & Two Pointers",
        categorySlug: "array",
        description: "合併兩個已排序陣列，使用雙指標從後往前填充。",
        tags: ["Array", "Two Pointers", "Sorting"],
        detailFile: "problems/merge-sorted-array.html"
    },
    {
        id: 39,
        number: "#283",
        title: "Move Zeroes",
        difficulty: "easy",
        category: "Array & Two Pointers",
        categorySlug: "array",
        description: "將陣列中的 0 移到末尾，保持非零元素順序。",
        tags: ["Array", "Two Pointers"],
        detailFile: "problems/move-zeroes.html"
    },
    {
        id: 40,
        number: "#704",
        title: "Binary Search",
        difficulty: "easy",
        category: "Array & Two Pointers",
        categorySlug: "array",
        description: "標準二分搜尋實現。必須熟練掌握的基本算法。",
        tags: ["Array", "Binary Search"],
        detailFile: "problems/binary-search.html"
    },

    // Additional String Problems
    {
        id: 41,
        number: "#242",
        title: "Valid Anagram",
        difficulty: "easy",
        category: "String",
        categorySlug: "string",
        description: "判斷兩個字串是否為字母異位詞。",
        tags: ["Hash Table", "String", "Sorting"],
        detailFile: "problems/valid-anagram.html"
    },
    {
        id: 42,
        number: "#344",
        title: "Reverse String",
        difficulty: "easy",
        category: "String",
        categorySlug: "string",
        description: "反轉字串，使用雙指標原地操作。",
        tags: ["Two Pointers", "String"],
        detailFile: "problems/reverse-string.html"
    },

    // Stack & Queue
    {
        id: 43,
        number: "#155",
        title: "Min Stack",
        difficulty: "medium",
        category: "Stack & Queue",
        categorySlug: "array",
        description: "設計支援 O(1) 時間獲取最小值的堆疊。台積電愛考的資料結構設計題。",
        tags: ["Stack", "Design"],
        detailFile: "problems/min-stack.html"
    },
    {
        id: 44,
        number: "#739",
        title: "Daily Temperatures",
        difficulty: "medium",
        category: "Stack & Queue",
        categorySlug: "array",
        description: "找出下一個更高溫度的天數，使用單調棧。",
        tags: ["Array", "Stack", "Monotonic Stack"],
        detailFile: "problems/daily-temperatures.html"
    },

    // DFS & BFS
    {
        id: 45,
        number: "#200",
        title: "Number of Islands",
        difficulty: "medium",
        category: "DFS & BFS",
        categorySlug: "tree",
        description: "計算島嶼數量，使用 DFS 或 BFS。圖論基礎題。",
        tags: ["Array", "DFS", "BFS", "Matrix"],
        detailFile: "problems/number-of-islands.html"
    },

    // Hash Table
    {
        id: 46,
        number: "#128",
        title: "Longest Consecutive Sequence",
        difficulty: "medium",
        category: "Hash Table",
        categorySlug: "array",
        description: "找出最長連續序列的長度，要求 O(n) 時間。",
        tags: ["Array", "Hash Table"],
        detailFile: "problems/longest-consecutive.html"
    },

    // Additional DP Problems
    {
        id: 47,
        number: "#198",
        title: "House Robber",
        difficulty: "medium",
        category: "Dynamic Programming",
        categorySlug: "dp",
        description: "打家劫舍問題，使用動態規劃。經典 DP 題型。",
        tags: ["Array", "Dynamic Programming"],
        detailFile: "problems/house-robber.html"
    },
    {
        id: 48,
        number: "#279",
        title: "Perfect Squares",
        difficulty: "medium",
        category: "Dynamic Programming",
        categorySlug: "dp",
        description: "找出和為 n 的最少完全平方數，使用動態規劃或 BFS。",
        tags: ["Math", "Dynamic Programming", "BFS"],
        detailFile: "problems/perfect-squares.html"
    },

    // More OOP Design
    {
        id: 49,
        number: "#OOP-6",
        title: "設計自動販賣機",
        difficulty: "medium",
        category: "OOP Design",
        categorySlug: "oop",
        description: "設計一個自動販賣機系統，包含商品管理、金額處理、找零等功能。",
        tags: ["OOP", "Design", "State Machine"],
        detailFile: "problems/vending-machine.html"
    },
    {
        id: 50,
        number: "#OOP-7",
        title: "設計檔案系統",
        difficulty: "hard",
        category: "OOP Design",
        categorySlug: "oop",
        description: "設計一個簡單的檔案系統，支援檔案和資料夾的建立、刪除、搜尋等操作。",
        tags: ["OOP", "Design", "Tree"],
        detailFile: "problems/file-system.html"
    }
];

// 匯出資料供其他檔案使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = problemsData;
}