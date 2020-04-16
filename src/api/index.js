import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

let changeableURL = url;

export const fetchData = async () => {
    try {
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios.get(changeableURL);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (err) {
        return err;
    }
};
