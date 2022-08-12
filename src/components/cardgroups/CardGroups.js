import React from 'react';
import PropTypes from 'prop-types';
import renderCard from '../../utils/renderCard';
import { CardGroupContainer } from './CardGroups.styles';

const CardGroups = ({
    cards,
    cardType,
    isScrollable,
    height,
}) => (
    <CardGroupContainer isScrollable={isScrollable}>
        {
            cards.map((cardData) => (
                renderCard(cardType, height, cardData)
            ))
        }
    </CardGroupContainer>
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
