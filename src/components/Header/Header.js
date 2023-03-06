import "./Header.css";

function Header() {
    return (
        <header className="page-header">
            <div className="container header-content">
                <div className="header-smallbox">
                    <h1 className="intro">
                        Nasza firma oferuje najwyższej jakości produkty.
                    </h1>
                    <h3 className="intro-2">
                        Nie wierz nam na słowo - sprawdź
                    </h3>
                    <a href="#offer">oferta</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
