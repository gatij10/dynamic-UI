import React from 'react';
import PropTypes from 'prop-types';
import {
    Hc1CardContainer,
} from './Hc1Card.styles';
import profilePlaceHolder from '../../assets/images/profile_placeholder.png';
import formatText from '../../utils/formatText';

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
                <p className="title" dangerouslySetInnerHTML={{ __html: formatText(cardData?.formatted_title) }} />
                <p className="sub-title">{cardData?.name}</p>
            </div>
        </div>
    </Hc1CardContainer>
);

Hc1Card.propTypes = {
    cardData: PropTypes.object.isRequired,
};

export default Hc1Card;
