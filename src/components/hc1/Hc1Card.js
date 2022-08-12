import React from 'react';
import PropTypes from 'prop-types';
import {
    Hc1ContentContainer, Hc1CardContainer, Image, Heading, Description, TitleBlock,
} from './Hc1Card.styles';
import profilePlaceHolder from '../../assets/images/profile_placeholder.png';

const Hc1Card = ({ cardData = {} }) => (
    <Hc1CardContainer
        onClick={() => { window.open(cardData?.url); }}
        backgroundColor={cardData?.bg_color}
    >
        <Hc1ContentContainer>
            <Image
                src={cardData?.icon?.image_url || profilePlaceHolder}
                alt="profile_img"
            />
            <TitleBlock>
                <Heading>{cardData?.formatted_title?.text}</Heading>
                {
                    cardData?.description && (
                        <Description>{cardData?.description?.text}</Description>
                    )
                }
            </TitleBlock>
        </Hc1ContentContainer>
    </Hc1CardContainer>
);

Hc1Card.propTypes = {
    cardData: PropTypes.object.isRequired,
};

export default Hc1Card;
