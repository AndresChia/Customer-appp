import { FETCH_CUSTOMERS } from './../constants/index'
import { createAction } from 'redux-actions'
import {apiFetchCustomers} from '../services/apiCustomers'



export const fetchCustomer = createAction(FETCH_CUSTOMERS, apiFetchCustomers);