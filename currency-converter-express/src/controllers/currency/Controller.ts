import { successHandler } from '../../libs';
import CurrencyModel from '../../models';

class CurrencyController {
    public async get(req, res, next) {

        try {
            let foundCurrencyDocument: any = await CurrencyModel.find();
            console.log('Here', foundCurrencyDocument[0]);

            if (foundCurrencyDocument) {
                res.send(successHandler('Successfully fetch data', 200, foundCurrencyDocument[0]));
            }
            else {
                next({ error: { errorMessage: 'No Record Found!', status: 404, } });
            }
        }
        catch (err) {
            next({ error: err });
        }
    }
}
export default new CurrencyController();
