import React from 'react';
import PropTypes from 'prop-types';
import { Hc9CardContainer } from './Hc9Card.styles';

const Hc9Card = ({ cardData = {}, height = 0 }) => (
    <Hc9CardContainer height={height} onClick={() => window.open(cardData.url)}>
        <img
            src={cardData.bg_image.image_url}
            alt="placeholder"
            className="background-image"
        />
    </Hc9CardContainer>
);

Hc9Card.propTypes = {
    cardData: PropTypes.object.isRequired,
    height: PropTypes.number,
};

Hc9Card.defaultProps = {
    height: 0,
};

export default Hc9Card;
