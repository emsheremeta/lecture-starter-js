/* eslint-disable class-methods-use-this */
import callApi from '../helpers/apiHelper';

class FighterService {
    #endpoint = 'fighters.json';

    async getFighters() {
        try {
            const apiResult = await callApi(this.#endpoint);
            apiResult.forEach(r => this.getFighterDetails(r._id));
            return apiResult;
        } catch (error) {
            throw error;
        }
    }

    async getFighterDetails(id) {
        // todo: implement this method
        // endpoint - `details/fighter/${id}.json`;
        const apiResult = await callApi(`details/fighter/${id}.json`);
        return apiResult;
    }
}

const fighterService = new FighterService();

export default fighterService;
