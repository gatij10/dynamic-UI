import Hc6Card from '../components/hc6/Hc6Card';
import Hc9Card from '../components/hc9/Hc9Card';
import { CARD_TYPES } from '../constants';

const renderCard = (cardType, height, isScrollable, cardData = []) => {
    switch (cardType) {
        case CARD_TYPES.HC6:
            return <Hc6Card cardData={cardData} />;

        case CARD_TYPES.HC9:
            return <Hc9Card cardData={cardData} height={height} isScrollable={isScrollable} />;

        default:
            return null;
    }
};

export default renderCard;
