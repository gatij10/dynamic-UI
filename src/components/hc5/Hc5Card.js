import React from 'react';
import PropTypes from 'prop-types';
import { Hc5CardContainer } from './Hc5Card.styles';
import hc5Placeholder from '../../assets/images/hc5_placeholder.svg';

const Hc5Card = ({ cardData = {} }) => (
    <Hc5CardContainer
        onClick={() => window.open(cardData.url)}
        backgroundColor={cardData?.backgroundColor}
    >
        <img
            src={cardData?.bg_image?.image_url || hc5Placeholder}
            alt="placeholder"
            className="background-image"
        />
    </Hc5CardContainer>
);

Hc5Card.propTypes = {
    cardData: PropTypes.object.isRequired,
};

export default Hc5Card;
