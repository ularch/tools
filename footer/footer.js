(function () {
    const year = new Date().getFullYear();
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
        <div class="site-footer-inner">
            <p class="site-footer-copyright">&copy; ${year} ULARCH. All Rights Reserved.</p>
            <p class="site-footer-license">本项目在 <a href="https://github.com/ularch/tools" target="_blank" rel="noopener noreferrer">GitHub</a> 开源</p>
        </div>
        <style>
            .site-footer {
                margin-top: 60px;
                padding: 24px 0;
                text-align: center;
                font-size: 13px;
                line-height: 1.8;
                color: #6b7280;
                border-top: 1px solid #e5e7eb;
            }
            .site-footer-inner {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
            }
            .site-footer a {
                color: #0969da;
                text-decoration: none;
            }
            .site-footer a:hover {
                text-decoration: underline;
            }
            .site-footer-copyright {
                margin: 0 0 4px 0;
            }
            .site-footer-license {
                margin: 0;
            }
        </style>
    `;
    document.body.appendChild(footer);
})();
