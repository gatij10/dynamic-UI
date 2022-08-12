import { useEffect, useState } from 'react';
import filterAPIData from '../utils/filterAPIData';

const useAPIResolver = () => {
    const [hc1CardData, setHC1CardData] = useState([]);
    const [hc6CardData, setHC6CardData] = useState([]);
    const [hc9CardData, setHC9CardData] = useState([]);
    const [hc5CardData, setHC5CardData] = useState([]);
    const [hc3CardData, setHC3CardData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        filterAPIData().then((res) => {
            setIsLoading(true);
            setHC1CardData(res?.hc1Card);
            setHC6CardData(res?.hc6Card);
            setHC9CardData(res?.hc9Card);
            setHC5CardData(res?.hc5Card);
            setHC3CardData(res?.hc3Card);
            setIsLoading(false);
        }).catch(() => {
            setError('Something went wrong! Please try again later.');
        });
    }, []);

    return [hc1CardData, hc6CardData, hc9CardData, hc5CardData, hc3CardData, isLoading, error];
};

export default useAPIResolver;
