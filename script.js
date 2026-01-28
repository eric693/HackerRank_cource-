// 主要 JavaScript 邏輯
document.addEventListener('DOMContentLoaded', function() {
    const problemsSection = document.querySelector('#problems-section .container');
    const filterButtons = document.querySelectorAll('.filter-btn:not(.category-btn)');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    let currentDifficulty = 'all';
    let currentCategory = 'all';

    // 初始化：顯示所有題目
    renderProblems(problemsData);
    updateStats();

    // 難度篩選按鈕事件
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有 active class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加 active class 到當前按鈕
            this.classList.add('active');
            
            // 獲取篩選類型
            currentDifficulty = this.dataset.filter;
            
            // 執行篩選
            filterProblems();
        });
    });

    // 分類篩選按鈕事件
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有 active class
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // 添加 active class 到當前按鈕
            this.classList.add('active');
            
            // 獲取篩選類型
            currentCategory = this.dataset.category;
            
            // 執行篩選
            filterProblems();
        });
    });

    // 篩選函數
    function filterProblems() {
        let filteredProblems = problemsData;

        // 先按難度篩選
        if (currentDifficulty !== 'all') {
            filteredProblems = filteredProblems.filter(
                problem => problem.difficulty === currentDifficulty
            );
        }

        // 再按分類篩選
        if (currentCategory !== 'all') {
            filteredProblems = filteredProblems.filter(
                problem => problem.categorySlug === currentCategory
            );
        }

        renderProblems(filteredProblems);
    }

    // 渲染題目
    function renderProblems(problems) {
        problemsSection.innerHTML = '';

        // 按分類分組
        const groupedProblems = {};
        problems.forEach(problem => {
            if (!groupedProblems[problem.category]) {
                groupedProblems[problem.category] = [];
            }
            groupedProblems[problem.category].push(problem);
        });

        // 渲染每個分類
        Object.keys(groupedProblems).forEach(category => {
            const categorySection = document.createElement('div');
            categorySection.className = 'category-section';

            const categoryTitle = document.createElement('h2');
            categoryTitle.className = 'category-title';
            categoryTitle.textContent = category;

            categorySection.appendChild(categoryTitle);

            // 渲染該分類下的所有題目
            groupedProblems[category].forEach(problem => {
                const problemCard = createProblemCard(problem);
                categorySection.appendChild(problemCard);
            });

            problemsSection.appendChild(categorySection);
        });

        // 如果沒有結果
        if (problems.length === 0) {
            problemsSection.innerHTML = '<p style="text-align: center; padding: 3rem; color: #6b7280;">沒有符合條件的題目</p>';
        }
    }

    // 創建題目卡片
    function createProblemCard(problem) {
        const card = document.createElement('div');
        card.className = 'problem-card';
        card.dataset.difficulty = problem.difficulty;
        card.dataset.category = problem.categorySlug;

        card.innerHTML = `
            <div class="problem-header">
                <span class="problem-number">${problem.number}</span>
                <span class="problem-difficulty ${problem.difficulty}">${getDifficultyText(problem.difficulty)}</span>
                <h3 class="problem-title">${problem.title}</h3>
            </div>
            <p class="problem-description">${problem.description}</p>
            <div class="problem-tags">
                ${problem.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${problem.detailFile}" class="problem-link">查看題目詳情 →</a>
        `;

        return card;
    }

    // 獲取難度文字
    function getDifficultyText(difficulty) {
        const difficultyMap = {
            'easy': 'Easy',
            'medium': 'Medium',
            'hard': 'Hard'
        };
        return difficultyMap[difficulty] || difficulty;
    }

    // 更新統計數據
    function updateStats() {
        const easyCount = problemsData.filter(p => p.difficulty === 'easy').length;
        const mediumCount = problemsData.filter(p => p.difficulty === 'medium').length;
        const hardCount = problemsData.filter(p => p.difficulty === 'hard').length;
        const totalCount = problemsData.length;

        document.getElementById('total-problems').textContent = totalCount;
        document.getElementById('easy-problems').textContent = easyCount;
        document.getElementById('medium-problems').textContent = mediumCount;
        document.getElementById('hard-problems').textContent = hardCount;

        document.getElementById('all-count').textContent = totalCount;
        document.getElementById('easy-count').textContent = easyCount;
        document.getElementById('medium-count').textContent = mediumCount;
        document.getElementById('hard-count').textContent = hardCount;
    }

    // 平滑滾動
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 為題目卡片添加點擊效果
    document.addEventListener('click', function(e) {
        const card = e.target.closest('.problem-card');
        if (card && !e.target.classList.contains('problem-link')) {
            const link = card.querySelector('.problem-link');
            if (link) {
                window.location.href = link.href;
            }
        }
    });
});