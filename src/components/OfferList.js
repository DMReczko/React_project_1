import OfferItem from "./OfferItem";
import "./OfferList.css";

const OfferList = () => {
    const allOffers = [
        { isNew: true, item: "Vinho verde", id: 1 },
        { isNew: false, item: "Merlot", id: 2 },
        { isNew: false, item: "Pinot Noir", id: 3 },
        { isNew: true, item: "Moscato", id: 4 },
        { isNew: false, item: "Chardonnay", id: 5 },
        { isNew: false, item: "Chianti", id: 6 },
    ];
    return (
        <section id="offer">
            <div className="container our-offer">
                <h2 className="offer-header">Co dobrego dla Ciebie mamy?</h2>
                <div className="all-offers">
                    {allOffers.map(({ isNew, item, id }) => (
                        <OfferItem key={id} item={item} isNew={isNew} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfferList;
