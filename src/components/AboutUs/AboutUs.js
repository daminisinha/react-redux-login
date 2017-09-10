import React from 'react';
import {NavLink} from 'react-router-dom';
export default class AboutUs extends React.Component{
    render(){
        return(
            <div> This is the About Us page
                <ul>
                    <li><NavLink to={'/aboutus/profile'}>Profile</NavLink></li>
                    <li><NavLink to={'/aboutus/team'}>Team</NavLink></li>
                    <li><NavLink to={'/aboutus/contactus'}>Contact Us</NavLink></li>
                    
                    
                </ul>    
            </div>
        )
    }
}