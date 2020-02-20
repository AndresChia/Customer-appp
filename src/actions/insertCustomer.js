import { INSERT_CUSTOMER } from './../constants/index'
import { createAction } from 'redux-actions'
import { insertCustomer as _insertCustomer } from '../services/apiCustomers'



export const insertCustomer = createAction(INSERT_CUSTOMER, (customer) => _insertCustomer(customer));