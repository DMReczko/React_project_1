import "./Navbar.css";
import Navlink from "./Navlink.js";
import links from "../../data/links.js";

function Navbar() {
    return (
        <div className="navbar-ribbon">
            <div className="container navbar">
                <a
                    href="../index.html"
                    alt="In Vino Veritas"
                    className="comp-name"
                >
                    In Vino Veritas
                </a>
                <nav className="navigation">
                    <ul className="nav-list">
                        {links.map(({ name, linkLive, section }) => (
                            <Navlink
                                name={name}
                                linkLive={linkLive}
                                section={section}
                                key={name}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
