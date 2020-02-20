import { UPDATE_CUSTOMER } from './../constants/index'
import { createAction } from 'redux-actions'
import { updateCustomer as _updateCustomer } from '../services/apiCustomers'



export const updateCustomer = createAction(UPDATE_CUSTOMER, (dni, customer) => _updateCustomer(dni, customer));