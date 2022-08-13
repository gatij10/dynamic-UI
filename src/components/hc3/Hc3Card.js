/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Hc3CardContainer, Hc3CardContentContainer, SideBarBtnConatiner, SideBarContainer,
} from './Hc3Card.styles';
import formatText from '../../utils/formatText';
import useLongPress from '../../hooks/useLongPress';
import hc3Placeholder from '../../assets/images/hc3_placeholder.png';
import dismiss from '../../assets/images/dismiss.png';
import remindLater from '../../assets/images/remind_later.png';

const Hc3Card = ({ cardData = {}, onClickRemindLater, onClickDismiss }) => {
    const [longPress, setLongPress] = useState(false);
    const onLongPress = () => {
        setLongPress(true);
    };

    const onClick = () => {
        if (!longPress) {
            window.open(cardData.url);
        }
    };

    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 500,
    };
    const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

    return (
        <Hc3CardContainer
            {...longPressEvent}
        >
            {
                longPress ? (
                    <SideBarContainer>
                        <SideBarBtnConatiner
                            onClick={() => onClickRemindLater(cardData.name)}
                            onTouchStart={() => onClickRemindLater(cardData.name)}
                        >
                            <img src={remindLater} alt="remind later" />
                            <p className="btn-text">remind later</p>
                        </SideBarBtnConatiner>
                        <SideBarBtnConatiner
                            onClick={() => onClickDismiss(cardData.name)}
                            onTouchStart={() => onClickRemindLater(cardData.name)}
                        >
                            <img src={dismiss} alt="remind later" />
                            <p className="btn-text">dismiss now</p>
                        </SideBarBtnConatiner>
                    </SideBarContainer>
                ) : null
            }
            <Hc3CardContentContainer
                backgroundColor={cardData?.bg_color}
                backgroundImage={cardData?.bg_image?.image_url || hc3Placeholder}
            >
                <div className="content-container">
                    <div className="text-container">
                        <h1 className="heading" dangerouslySetInnerHTML={{ __html: formatText(cardData?.formatted_title) }} />
                    </div>
                    <div className="text-container">
                        <p className="sub-heading" dangerouslySetInnerHTML={{ __html: formatText(cardData?.formatted_description) }} />
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
};

Hc3Card.propTypes = {
    cardData: PropTypes.object.isRequired,
    onClickRemindLater: PropTypes.func.isRequired,
    onClickDismiss: PropTypes.func.isRequired,
};

export default Hc3Card;
