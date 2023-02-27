import "./Navbar.css";
import Navlink from "./Navlink.js";

function Navbar() {
    const links = [
        { name: "o nas", linkLive: true, section: "#about" },
        { name: "oferta", linkLive: true, section: "#offer" },
        { name: "kontakt", linkLive: false, section: null },
    ];

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
                <section className="navigation">
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
                </section>
            </div>
        </div>
    );
}

export default Navbar;
