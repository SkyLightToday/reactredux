import { COMMENT_CREATE } from './Types';
import { errorOn } from './actions';

const badWords = ['козёл', 'придурок'];

export function spamFiltre(store) {
    return function (next) {
        return function(action) {
            if(action.type === COMMENT_CREATE) {
                const hasBadWords = badWords.some(res => action.data.text.includes(res));
                if(hasBadWords) {
                    return store.dispatch(errorOn('Уважайте людей!'))
                }
            }
            return next(action);
        }
    }
}