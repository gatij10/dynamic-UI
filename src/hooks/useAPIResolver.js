import { useEffect, useState } from 'react';
import getData from '../utils/getData';

const useAPIResolver = () => {
    const [error, setError] = useState('');
    const [cardsGroups, setCardGroups] = useState([]);
    const [onRefresh, setOnRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    let dismissedCardsArray = localStorage.getItem('dismissed_cards');

    if (dismissedCardsArray) {
        dismissedCardsArray = JSON.parse(dismissedCardsArray);
    } else {
        dismissedCardsArray = [];
    }

    useEffect(() => {
        getData().then((res) => {
            setError('');
            setCardGroups(res?.card_groups);
            setIsLoading(false);
        }).catch(() => {
            setError('Something went wrong! Please try again later.');
        });
    }, [onRefresh]);

    const onClickRemindLater = (cardName) => {
        const cardGroupArray = [...cardsGroups];
        cardGroupArray.forEach((cardGroup) => {
            // eslint-disable-next-line no-param-reassign
            cardGroup.cards = cardGroup.cards.filter((card) => card.name !== cardName);
        });

        setCardGroups(cardGroupArray);
    };

    useEffect(() => {
        if (dismissedCardsArray.length && dismissedCardsArray) {
            dismissedCardsArray.forEach((cardName) => {
                onClickRemindLater(cardName);
            });
        }
    }, []);

    const onClickDismiss = (cardName) => {
        if (!dismissedCardsArray.includes(cardName)) {
            dismissedCardsArray.push(cardName);
        }
        localStorage.setItem('dismissed_cards', JSON.stringify(dismissedCardsArray));
        dismissedCardsArray.forEach(() => {
            onClickRemindLater(cardName);
        });
    };

    const handleRefresh = () => {
        setOnRefresh(!onRefresh);
        return Promise.resolve();
    };

    return [cardsGroups, error, handleRefresh, onClickRemindLater, onClickDismiss, isLoading];
};

export default useAPIResolver;
