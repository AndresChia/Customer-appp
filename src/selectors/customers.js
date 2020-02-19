import { createSelector } from 'reselect';


export const getCostumers = (state) => state.customers;

export const getCostumersByDni = createSelector(
    (state, props) => state.customers.find(element => element.dni === props.dni),
    customer => customer
)