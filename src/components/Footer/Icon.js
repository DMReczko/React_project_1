import "./Footer.css";

const Icon = ({ link, alt, icon }) => {
    return (
        <>
            <a href={link} alt={alt}>
                <i className={icon}></i>
            </a>
        </>
    );
};

export default Icon;
