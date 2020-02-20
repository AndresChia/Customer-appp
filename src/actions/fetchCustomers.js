import { FETCH_CUSTOMERS } from './../constants/index'
import { createAction } from 'redux-actions'
import {getCustomers} from '../services/apiCustomers'



export const fetchCustomers = createAction(FETCH_CUSTOMERS, getCustomers);