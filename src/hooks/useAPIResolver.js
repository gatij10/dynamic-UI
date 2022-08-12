import { useEffect, useState } from 'react';
import getData from '../utils/getData';

const useAPIResolver = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [cardsGroups, setCardGroups] = useState([]);

    useEffect(() => {
        getData().then((res) => {
            setIsLoading(true);
            setCardGroups(res?.card_groups);
            setIsLoading(false);
        }).catch(() => {
            setError('Something went wrong! Please try again later.');
        });
    }, []);

    return [cardsGroups, isLoading, error];
};

export default useAPIResolver;
