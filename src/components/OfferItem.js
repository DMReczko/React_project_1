import "./OfferList.css";

const OfferItem = ({ item, isNew }) => {
    return (
        <div className={isNew ? "offer-box offer-new" : "offer-box"}>
            {item}
            <p className="new-text">{isNew ? "(nowość)" : ""}</p>
        </div>
    );
};

export default OfferItem;
