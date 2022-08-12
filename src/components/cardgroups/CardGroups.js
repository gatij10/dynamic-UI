import React from 'react';
import PropTypes from 'prop-types';
import renderCard from '../../utils/renderCard';

const CardGroups = ({
    cards,
    cardType,
    isScrollable,
    height,
}) => (
    <div>
        {
            cards.map((cardData) => (
                renderCard(cardType, height, isScrollable, cardData)
            ))
        }
    </div>
);

CardGroups.propTypes = {
    cards: PropTypes.array.isRequired,
    cardType: PropTypes.string.isRequired,
    height: PropTypes.number,
    isScrollable: PropTypes.bool,
};

CardGroups.defaultProps = {
    height: 0,
    isScrollable: false,
};

export default CardGroups;
