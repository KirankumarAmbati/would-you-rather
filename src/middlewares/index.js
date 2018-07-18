import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'
import logging from './logging'

export default applyMiddleware(
    thunk,
    logging
)