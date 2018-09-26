import React, { Component } from 'react';
import Header from './templates/header';
import Footer from './templates/footer';
import Body from './body';
import './styles/style.css';
import fetch from 'node-fetch';


const url = "";
class App extends Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
            page: "home",
            user: ""
        };
        this.goHome = this.goHome.bind(this);
        this.goAbout = this.goAbout.bind(this);
        this.sendUser = this.sendUser.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    goHome(e) {
        e.preventDefault();
        this.setState({page: "home"});
    }
    goAbout(e) {
        e.preventDefault();
        this.setState({page: "about"});
    }
    sendUser(e) {
        let user = this.state.user;
        let data = {
            name: "user",
            postUser: user
        }
        console.log(user);
        let params = {
            headers: {
                "Content-Type":"application/json; charset=UTF-8"
            },
            body: JSON.stringify(data),
            method:"POST",
            mode: "cors",
            
        };
        fetch(url, params)
            .then(data=>{return data.json()})
            .then(res=>{console.log(res)})
            .catch(error=>console.log(error));
    }
    onChange(e) {
        e.preventDefault();
        let value = e.target.value;
        this.setState({user: value});
    }
    render() {
        
        return (
                <div className="main">
                    <Header goHome={this.goHome} goAbout={this.goAbout} />
                    <Body page={this.state.page} sendUser={this.sendUser} onChange={this.onChange} />
                    <Footer />
                </div>
            )
    }
}

export default App;