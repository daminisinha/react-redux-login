import React from 'react';
import {mount} from 'enzyme';

import {createStore,applyMiddleware} from 'redux';
import allReducers from '../.././reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import App from './App';

const store = createStore(allReducers,{}, applyMiddleware(thunk, logger));

describe('Test for App',()=>{
    it('renders without crashing', () => {
        const wrapper = mount(<Provider store={store}><App/></Provider>)
        expect(wrapper.length).toEqual(1);
    });
})

