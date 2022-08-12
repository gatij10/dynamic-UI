import { useEffect, useState } from 'react';
import getData from '../utils/getData';

const useAPIResolver = () => {
    const [error, setError] = useState('');
    const [cardsGroups, setCardGroups] = useState([]);
    const [onRefresh, setOnRefresh] = useState(false);

    useEffect(() => {
        getData().then((res) => {
            setError('');
            setCardGroups(res?.card_groups);
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
