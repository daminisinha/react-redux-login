import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {authenticateUser} from '../.././actions/User-Login/UserLoginActions'
import {validateEmail} from '../.././validation/Validation.js';
import RaisedButton from 'material-ui/RaisedButton';

const styles={
    button:{
        padding:'15px'
        
    },
    loginContainer:{
        backgroundColor:'#f7f8f9',
        border:'1px solid #e6e4e3',
        width:'400px',
        marginTop:'10%'
    }
}

export class Login extends React.Component{
    constructor(props){
        super(props)
        
        this.state={email:null,password:null,emailValidationMsg:null};
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onLoginClick(e){
        e.preventDefault();
        this.setState({emailValidationMsg:null})
        let validationMsg = validateEmail(this.state.email);
        
        validationMsg===true?
        this.props.authenticateUser(this.state.email,this.state.password):
        this.setState({emailValidationMsg:validationMsg});
        
    

    }
    render(){
           let{isAuthenticated,authenticationError} = this.props;
           
           
        return(
            
             isAuthenticated===true ? <Redirect to={'/home'}/>:
            <div style={styles.loginContainer} className="center-lg col-lg-12 center-xs center-sm center-md col-sm-12 col-xs-8 col-md-8 container-fluid">
                <div className="auto">
                    
                    <div>
                        <h3>Email</h3>
                    </div>
                    <div >
                        <input type="text" id="email" placeholder="check db.json for credentials" onChange={e=>this.setState({email:e.target.value})}/>
                        {this.state.emailValidationMsg!==null?<h6>{this.state.emailValidationMsg}</h6>:null}
                    </div>
                    
                </div>
                
                <div className="auto">
                <div>
                <h3>Password</h3>
                </div>
                <div>
                
                <input type="password" id="password" onChange={e=>this.setState({password:e.target.value})}/>
                </div>
                </div>

                <div style={styles.button}>
                <RaisedButton id="btnSubmit" primary={true} onClick={this.onLoginClick} label="Submit"/>
                </div>
                {authenticationError!=null?<h6>{authenticationError}</h6>:null}
            </div>
            
        )
    }
    
}

//reducer mapping
function mapStateToProps(state){
    
    return{
        isAuthenticating: state.authenticationReducer.isAuthenticating,
        isAuthenticated: state.authenticationReducer.isAuthenticated,
        authenticationError: state.authenticationReducer.authenticationError
    }
}


//action mapping
function mapDispatchToProps(dispatch){
    return{
        authenticateUser: (email,password) => dispatch(authenticateUser(email,password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);