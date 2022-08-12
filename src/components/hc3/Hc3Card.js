import React from 'react';
import PropTypes from 'prop-types';
import { Hc3CardContainer, Hc3CardContentContainer } from './Hc3Card.styles';

const Hc3Card = ({ cardData = {} }) => (
    <Hc3CardContainer
        onClick={() => window.open(cardData.url)}
    >
        <Hc3CardContentContainer
            backgroundColor={cardData?.bg_color}
            backgroundImage={cardData?.bg_image?.image_url}
        >
            <div className="content-container">
                <div className="text-container">
                    <h1 className="heading">{cardData.title}</h1>
                </div>
                <div className="text-container">
                    <h4 className="sub-heading">
                        {cardData.description}
                    </h4>
                </div>
                {
                    cardData?.cta && (
                        <button
                            type="button"
                            className="cta"
                            onClick={() => window.open(cardData?.cta[0]?.url)}
                        >
                            {cardData?.cta[0]?.text}

                        </button>
                    )
                }
            </div>
        </Hc3CardContentContainer>
    </Hc3CardContainer>
);

Hc3Card.propTypes = {
    cardData: PropTypes.object.isRequired,
};

export default Hc3Card;
