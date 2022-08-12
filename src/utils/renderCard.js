import Hc6Card from '../components/hc6/Hc6Card';
import { CARD_TYPES } from '../constants';

const renderCard = (cardType, cardData = []) => {
    switch (cardType) {
        case CARD_TYPES.HC6:
            return <Hc6Card cardData={cardData} />;

        default:
            return null;
    }
};

export default renderCard;
