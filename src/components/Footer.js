import "./Footer.css";

function Footer() {
    return (
        <div className="footer-box">
            <div className="container footer">
                <p className="footer-copyright">
                    In Vino Veritas, all rights reserved 2023
                </p>
                <div className="icon-box">
                    <a href="../index.html" alt="facebook link">
                        <i className="fa-brands fa-instagram fa-2xl"></i>
                    </a>
                    <a href="../index.html" alt="instagram link">
                        <i className="fa-brands fa-square-facebook fa-2xl"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
