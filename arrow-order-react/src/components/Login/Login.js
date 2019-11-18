/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import InputField from './logincomponents/InputField/InputField';
import LoginButton from './logincomponents/LoginButton/LoginButton';
import Animator from '../Animator/Animator';
import logo from './logo.svg';
import './Login.css';
import {Link} from "react-router-dom";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            contact : '',
            nameIsValid : false,
            contactIsValid : false,
        }
        this.composeData = this.composeData.bind(this);
        this.setChache = this.setChache.bind(this);
    }

    //Input callBack
    composeData(type, value, valid) {
        if (type === 'name'){
            this.setState({
                name : value,
                nameIsValid : valid
            });
        } else if (type === 'contact'){
            this.setState({
                contact : value,
                contactIsValid : valid,
            });
        }      
    }

    //Sign In Button Click Callback
    setChache() {
        let chache = JSON.stringify({
            name : this.state.name,
            contact : this.state.contact,
        });
        localStorage.setItem('user', chache);
    }

    getChache = () =>  {
        if (localStorage.getItem('user')){
            const user = JSON.parse(localStorage.getItem('user'));
            this.setState({
                name : user.name,
                contact : user.contact,
                nameIsValid : true,
                contactIsValid : true,
            });
        }
    }

    componentDidMount() {
        this.getChache();
    }

    render() {
        return(
            <Animator type = 'rise'>
                <div className="login">
                <div className="logo"><img src={logo} alt="ArrowOrder"/></div>
                
                <Animator type = 'fade' timeout = '450'>
                <form>

                    <InputField 
                        type = 'name'
                        value = {this.state.name}
                        validate = {false} 
                        placeholder='Your Name'
                        composeFunction = {this.composeData}
                        activate = {this.activateButton}/>

                    <InputField 
                        type = 'contact'
                        value = {this.state.contact}
                        validate = {true} 
                        placeholder='Instagram / WhatsApp'
                        composeFunction = {this.composeData}
                        activate = {this.activateButton}/>

                    <LoginButton
                        nameIsValid = {this.state.nameIsValid} 
                        contactIsValid = {this.state.contactIsValid}
                        setChache = {this.setChache}/>

                    <div className="copyright">
                        <Link to = '/'>by @arrowcook</Link>
                    </div>

                </form>
                </Animator>
            </div>
            </Animator>
        )
    }
}