import "./OfferList.css";

const OfferItem = ({ item, isNew }) => {
    return (
        <div className={isNew ? "offer-box offer-new" : "offer-box"}>
            {item}
            {isNew && <p className="new-text">(nowość)</p>}
        </div>
    );
};

export default OfferItem;
