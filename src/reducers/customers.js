import { handleActions } from 'redux-actions'
import { FETCH_CUSTOMERS } from '../constants'

const customers = handleActions(
    {
        [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
    }, []);

export default customers;