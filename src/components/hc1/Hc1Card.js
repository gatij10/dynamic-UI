import React from 'react';
import PropTypes from 'prop-types';
import {
    Hc1CardContainer,
} from './Hc1Card.styles';
import profilePlaceHolder from '../../assets/images/profile_placeholder.png';

const Hc1Card = ({ cardData = {} }) => (
    <Hc1CardContainer
        onClick={() => { window.open(cardData?.url); }}
        backgroundColor={cardData?.bg_color}
    >
        <div className="content-container">
            <img
                className="img"
                src={cardData?.icon?.image_url || profilePlaceHolder}
                alt="profile_img"
            />
            <div className="text-container">
                <p className="title">{cardData?.formatted_title?.text}</p>
                <p className="sub-title">{cardData?.name}</p>
            </div>
        </div>
    </Hc1CardContainer>
);

Hc1Card.propTypes = {
    cardData: PropTypes.object.isRequired,
};

export default Hc1Card;
