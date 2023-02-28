import OfferItem from "./OfferItem.js";
import offers from "../../data/offers.js";
import "./OfferList.css";

const OfferList = () => {
    return (
        <section id="offer">
            <div className="container our-offer">
                <h2 className="offer-header">Co dobrego dla Ciebie mamy?</h2>
                <div className="all-offers">
                    {offers.map(({ isNew, item }) => (
                        <OfferItem key={item} item={item} isNew={isNew} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfferList;
