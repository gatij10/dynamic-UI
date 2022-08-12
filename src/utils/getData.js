import { API_URL } from '../constants';

const getData = async () => {
    const resData = await fetch(API_URL);
    const resDataJson = await resData.json();
    return resDataJson;
};

export default getData;
