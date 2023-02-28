import "./Footer.css";
import Icon from "./Icon.js";
import icons from "../../data/icons.js";

function Footer() {
    return (
        <div className="footer-box">
            <div className="container footer">
                <p className="footer-copyright">
                    In Vino Veritas, all rights reserved 2023
                </p>
                <div className="icon-box">
                    {icons.map(({ link, alt, icon }) => (
                        <Icon link={link} alt={alt} icon={icon} key={alt} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
