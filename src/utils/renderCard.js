import Hc1Card from '../components/hc1/Hc1Card';
import Hc3Card from '../components/hc3/Hc3Card';
import Hc5Card from '../components/hc5/Hc5Card';
import Hc6Card from '../components/hc6/Hc6Card';
import Hc9Card from '../components/hc9/Hc9Card';
import { CARD_TYPES } from '../constants';

const renderCard = (
    cardType,
    height,
    onClickRemindLater,
    onClickDismiss,
    isScrollable,
    cardData = {},
) => {
    switch (cardType) {
        case CARD_TYPES.HC6:
            return <Hc6Card cardData={cardData} />;
        case CARD_TYPES.HC9:
            return <Hc9Card cardData={cardData} height={height} />;
        case CARD_TYPES.HC1:
            return <Hc1Card cardData={cardData} isScrollable={isScrollable} />;
        case CARD_TYPES.HC5:
            return <Hc5Card cardData={cardData} />;
        case CARD_TYPES.HC3:
            return (
                <Hc3Card
                    cardData={cardData}
                    onClickRemindLater={onClickRemindLater}
                    onClickDismiss={onClickDismiss}
                />
            );

        default:
            return null;
    }
};

export default renderCard;
