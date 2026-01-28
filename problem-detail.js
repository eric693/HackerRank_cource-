// 題目詳情頁面的 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 初始化程式碼高亮
    hljs.highlightAll();

    // 處理程式語言切換標籤
    const tabButtons = document.querySelectorAll('.tab-btn');
    const codeContents = document.querySelectorAll('.code-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;

            // 移除所有 active class
            tabButtons.forEach(btn => btn.classList.remove('active'));
            codeContents.forEach(content => content.classList.remove('active'));

            // 添加 active class 到當前選擇的標籤和內容
            this.classList.add('active');
            document.querySelector(`.code-content.${lang}`).classList.add('active');

            // 重新高亮當前顯示的程式碼
            const activeCode = document.querySelector(`.code-content.${lang}`);
            if (activeCode) {
                activeCode.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightElement(block);
                });
            }
        });
    });

    // 平滑滾動到錨點
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

    // 為程式碼區塊添加複製按鈕
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach((block, index) => {
        const pre = block.parentElement;
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);

        const copyButton = document.createElement('button');
        copyButton.textContent = '複製';
        copyButton.className = 'copy-btn';
        copyButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 0.5rem 1rem;
            background-color: #4b5563;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.875rem;
            transition: background-color 0.3s;
            z-index: 10;
        `;

        copyButton.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#374151';
        });

        copyButton.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#4b5563';
        });

        copyButton.addEventListener('click', function() {
            const code = block.textContent;
            navigator.clipboard.writeText(code).then(() => {
                copyButton.textContent = '已複製！';
                copyButton.style.backgroundColor = '#10b981';
                
                setTimeout(() => {
                    copyButton.textContent = '複製';
                    copyButton.style.backgroundColor = '#4b5563';
                }, 2000);
            }).catch(err => {
                console.error('複製失敗:', err);
                copyButton.textContent = '複製失敗';
                setTimeout(() => {
                    copyButton.textContent = '複製';
                }, 2000);
            });
        });

        wrapper.appendChild(copyButton);
    });

    // 添加回到頂部按鈕
    const backToTop = document.createElement('button');
    backToTop.textContent = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
        transition: all 0.3s;
        z-index: 1000;
    `;

    backToTop.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    backToTop.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.body.appendChild(backToTop);

    // 監聽滾動事件，顯示/隱藏回到頂部按鈕
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // 添加目錄導航（如果頁面內容較長）
    const sections = document.querySelectorAll('.section h2');
    if (sections.length > 3) {
        const nav = document.createElement('nav');
        nav.className = 'toc-nav';
        nav.style.cssText = `
            position: fixed;
            top: 100px;
            right: 30px;
            background-color: white;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            max-width: 200px;
            display: none;
        `;

        const navTitle = document.createElement('h3');
        navTitle.textContent = '目錄';
        navTitle.style.cssText = `
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
            color: var(--text-secondary);
        `;
        nav.appendChild(navTitle);

        const navList = document.createElement('ul');
        navList.style.cssText = `
            list-style: none;
            padding: 0;
        `;

        sections.forEach((section, index) => {
            section.id = `section-${index}`;
            const li = document.createElement('li');
            li.style.cssText = `
                margin-bottom: 0.5rem;
            `;
            const a = document.createElement('a');
            a.href = `#section-${index}`;
            a.textContent = section.textContent;
            a.style.cssText = `
                color: var(--text-secondary);
                text-decoration: none;
                font-size: 0.875rem;
                transition: color 0.3s;
            `;
            a.addEventListener('mouseenter', function() {
                this.style.color = 'var(--primary-color)';
            });
            a.addEventListener('mouseleave', function() {
                this.style.color = 'var(--text-secondary)';
            });
            li.appendChild(a);
            navList.appendChild(li);
        });

        nav.appendChild(navList);
        document.body.appendChild(nav);

        // 在寬螢幕上顯示目錄
        if (window.innerWidth > 1200) {
            nav.style.display = 'block';
        }

        window.addEventListener('resize', function() {
            if (window.innerWidth > 1200) {
                nav.style.display = 'block';
            } else {
                nav.style.display = 'none';
            }
        });
    }

    // 印刷模式優化
    window.addEventListener('beforeprint', function() {
        // 展開所有程式碼標籤
        codeContents.forEach(content => {
            content.classList.add('active');
        });
    });

    window.addEventListener('afterprint', function() {
        // 恢復原本的標籤狀態
        codeContents.forEach((content, index) => {
            if (index !== 0) {
                content.classList.remove('active');
            }
        });
    });
});