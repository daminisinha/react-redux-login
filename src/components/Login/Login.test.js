import React from 'react';
import {shallow,mount} from 'enzyme';
import ConnectedLogin,{Login} from './Login';
import {createStore,applyMiddleware} from 'redux';
import allReducers from '../.././reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import toJson from 'enzyme-to-json';
 


 
 
describe('Login Component Test Suite',()=>{
    const wrapper = mount(<MuiThemeProvider><Login/></MuiThemeProvider>)
    it('Render login component',()=>{
        expect(wrapper.find('#email').type()).toEqual("input")
        expect(wrapper.find('#password').type()).toEqual("input")
        
    })
    
    
    
})

