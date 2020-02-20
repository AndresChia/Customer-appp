import { handleActions } from 'redux-actions'
import { FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from '../constants'

const customers = handleActions(
    {
        [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
        [INSERT_CUSTOMER]: (state, action) => [...state, action.payload],
        [UPDATE_CUSTOMER]: (state, { payload: customer, payload: { id } }) => {
            const newCostumers = state.slice()
            const index = state.findIndex(element => element.id === id);
            if (index !== -1) {
                newCostumers[index] = customer
            }
            return newCostumers;
        },
        [DELETE_CUSTOMER]: (state, { payload:  id  }) => {
            const newCostumers = state.slice()
            const index = state.findIndex(element => element.id === id);
            if (index !== -1) {
                newCostumers.splice(index, 1);
            }
            return newCostumers;
        }
    }, []);

export default customers;