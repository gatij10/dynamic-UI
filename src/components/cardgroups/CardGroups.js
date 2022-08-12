import React from 'react';
import PropTypes from 'prop-types';
import renderCard from '../../utils/renderCard';

const CardGroups = ({
    cards,
    // key,
    cardType,
    // isScrollable,
    // height,
}) => (
    <div>
        {
            cards.map((cardData) => (
                renderCard(cardType, cardData)
            ))
        }
    </div>
);

CardGroups.propTypes = {
    cards: PropTypes.array.isRequired,
    cardType: PropTypes.string.isRequired,
};

export default CardGroups;
