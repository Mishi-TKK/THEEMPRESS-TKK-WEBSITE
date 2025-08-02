function loadHeader() {
    const headerContent = `
        <header>
            <img src="../images/The_Empress_Forgebg.png" alt="Your Logo" class="logo">
            <h1 class="header-title">The Empress's Forge: A King's Kid Initiative</h1>
            <nav>
                <button class="menu-toggle" aria-label="Toggle Navigation">☰</button>
                <ul class="nav-list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="cafe.html">Empress Cafe</a></li>
                    <li><a href="secretplace.html">Enter the Secret Place</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="resources.html">Resources</a></li>
                </ul>
            </nav>
        </header>
    `;
    document.getElementById('header-placeholder').innerHTML = headerContent;
    }
    
    window.onload = loadHeader;