import React from 'react';
import {NavLink} from 'react-router-dom';
export default class Home extends React.Component{
    render(){
        return(
            <div> This is the home page.
            <ul>
                    <li><NavLink to={'/aboutus'}>About Us</NavLink></li>
                    
            </ul>
            </div>
        )
    }
}