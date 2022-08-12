import { useEffect, useState } from 'react';
import getData from '../utils/getData';

const useAPIResolver = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [cardsGroups, setCardGroups] = useState([]);
    const [onRefresh, setOnRefresh] = useState(false);

    console.log(isLoading);

    useEffect(() => {
        getData().then((res) => {
            setIsLoading(true);
            setError('');
            setCardGroups(res?.card_groups);
            setIsLoading(false);
        }).catch(() => {
            setError('Something went wrong! Please try again later.');
        });
    }, [onRefresh]);

    const handleRefresh = () => {
        setOnRefresh(!onRefresh);
        return Promise.resolve();
    };

    return [cardsGroups, error, handleRefresh];
};

export default useAPIResolver;
