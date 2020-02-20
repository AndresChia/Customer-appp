import { DELETE_CUSTOMER } from './../constants/index'
import { createAction } from 'redux-actions'
import { deleteCustomer as _deleteCustomer } from '../services/apiCustomers'



export const deleteCustomer = createAction(DELETE_CUSTOMER, (id) => _deleteCustomer(id));