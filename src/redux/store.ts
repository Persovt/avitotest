import { applyMiddleware, createStore } from 'redux'
import {reducer} from './reducer'
import {createLogger} from 'redux-logger'
const logger = createLogger()
export const store = createStore(reducer, applyMiddleware(logger))