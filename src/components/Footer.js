import "./Footer.css";
import Icon from "./Icon.js";

function Footer() {
    const icons = [
        {
            link: "../index.html",
            alt: "facebook link",
            icon: "fa-brands fa-instagram fa-2xl",
        },
        {
            link: "../index.html",
            alt: "instagram link",
            icon: "fa-brands fa-square-facebook fa-2xl",
        },
    ];
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
