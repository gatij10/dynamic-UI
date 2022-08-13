import React from 'react';
import PropTypes from 'prop-types';
import renderCard from '../../utils/renderCard';
import { CardGroupContainer } from './CardGroups.styles';

const CardGroups = ({
    cards,
    cardType,
    isScrollable,
    height,
    onClickRemindLater,
    onClickDismiss,
}) => (
    <CardGroupContainer isScrollable={isScrollable} cardType={cardType}>
        {
            cards.map((cardData) => (
                <React.Fragment key={`${cardData.name}-${cardData.bg_color}`}>
                    {renderCard(cardType, height, onClickRemindLater, onClickDismiss, cardData)}
                </React.Fragment>
            ))
        }
    </CardGroupContainer>
);

CardGroups.propTypes = {
    cards: PropTypes.array.isRequired,
    cardType: PropTypes.string.isRequired,
    height: PropTypes.number,
    isScrollable: PropTypes.bool,
    onClickRemindLater: PropTypes.func.isRequired,
    onClickDismiss: PropTypes.func.isRequired,
};

CardGroups.defaultProps = {
    height: 0,
    isScrollable: false,
};

export default CardGroups;
