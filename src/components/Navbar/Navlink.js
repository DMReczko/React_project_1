import "./Navbar.css";

const Navlink = ({ name, linkLive, section }) => {
    return (
        <li className="nav-list-el">
            <a
                className={linkLive ? "nav-link" : "nav-link dis-link"}
                href={section}
            >
                {name}
            </a>
        </li>
    );
};
export default Navlink;
