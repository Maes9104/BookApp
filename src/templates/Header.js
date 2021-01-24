const Header = () => {
    const view = `
    <section class="Header-main">
        <div class="Header-logo">
            <h1>
                <a href="/BookApp">
                    Book App
                </a>
            </h1>
        </div>
        <div class="Header-nav">
            <a href="#/favs/">Favoritos</a>
        </div>
    </section>
    `;
    return view;
};

export default Header;