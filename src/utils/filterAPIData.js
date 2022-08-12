import { CARD_TYPES } from '../constants';
import getData from './getData';

const filterAPIData = async () => {
    const { card_groups: cardGroups = [] } = await getData();
    const {
        HC6, HC9, HC1, HC5, HC3,
    } = CARD_TYPES;

    const hc1Card = cardGroups.filter((card) => card.design_type === HC1);
    const hc6Card = cardGroups.filter((card) => card.design_type === HC6);
    const hc9Card = cardGroups.filter((card) => card.design_type === HC9);
    const hc5Card = cardGroups.filter((card) => card.design_type === HC5);
    const hc3Card = cardGroups.filter((card) => card.design_type === HC3);

    return {
        hc1Card,
        hc6Card,
        hc3Card,
        hc9Card,
        hc5Card,
    };
};

export default filterAPIData;
