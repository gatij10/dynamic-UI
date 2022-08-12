import Hc1Card from '../components/hc1/Hc1Card';
import Hc6Card from '../components/hc6/Hc6Card';
import Hc9Card from '../components/hc9/Hc9Card';
import { CARD_TYPES } from '../constants';

const renderCard = (cardType, height, cardData = []) => {
    switch (cardType) {
        case CARD_TYPES.HC6:
            return <Hc6Card cardData={cardData} />;

        case CARD_TYPES.HC9:
            return <Hc9Card cardData={cardData} height={height} />;

        case CARD_TYPES.HC1:
            return <Hc1Card cardData={cardData} />;

        default:
            return null;
    }
};

export default renderCard;
