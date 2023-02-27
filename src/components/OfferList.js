import OfferItem from "./OfferItem";
import "./OfferList.css";

const OfferList = () => {
    const allOffers = [
        { isNew: true, item: "Vinho verde" },
        { isNew: false, item: "Merlot" },
        { isNew: false, item: "Pinot Noir" },
        { isNew: true, item: "Moscato" },
        { isNew: false, item: "Chardonnay" },
        { isNew: false, item: "Chianti" },
    ];
    return (
        <section id="offer">
            <div className="container our-offer">
                <h2 className="offer-header">Co dobrego dla Ciebie mamy?</h2>
                <div className="all-offers">
                    {allOffers.map(({ isNew, item }) => (
                        <OfferItem key={item} item={item} isNew={isNew} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfferList;
