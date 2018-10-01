import React, { Component } from 'react';
import Header from './templates/header';
import Footer from './templates/footer';
import Body from './body';
import './styles/style.css';
import fetch from 'node-fetch';
import shuffle from './functions/shuffle';
import changeCheckbox from './functions/changeCheckbox';
import commonWords from './constants/commonWords';

const url = "";
class App extends Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
            page: "home",
            user: "",
            tweetedMessage: "",
            omittedWords: commonWords,
            customOmission: ["this", "is", "an", "example"],
        };
        this.goHome = this.goHome.bind(this);
        this.goAbout = this.goAbout.bind(this);
        this.sendUser = this.sendUser.bind(this);
        this.onChange = this.onChange.bind(this);
        this.doChangeOmission = this.doChangeOmission.bind(this);
        this.changeOmission = this.changeOmission.bind(this);
    }
    goHome(e) {
        e.preventDefault();
        this.setState({user: "", page: "home"});
    }
    goAbout(e) {
        e.preventDefault();
        this.setState({page: "about"});
    }
    doChangeOmission(e) {
        e.preventDefault();
        let value = e.target.value;
        let resValue = value.split(",");
        this.setState({customOmission: resValue});
    }
    changeOmission(e) {
        e.preventDefault();
        let value = e.target.value;
        changeCheckbox(value);
        this.setState({omittedWords: value});
    }
    sendUser(e) {
        let user = this.state.user;
        if(user.trim() === "") {
            return false;
        }
        let omittedWordsArr = this.state.omittedWords;
        let data = {
            name: "user",
            postUser: user,
            omittedWords: omittedWordsArr
        }
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
            .then(res=>{
                if(res.message == "error/baduser") {
                    this.setState({page: "error/baduser"});
                    return false;
                }
                let finalRes = [];
                res.tweets.map ((x) => {
                    finalRes.push(x[0]);
                });
                finalRes = shuffle(finalRes);
                
                this.setState({page: "results", tweetedMessage: finalRes.join(" ")});
                return finalRes;
            })
            .then(finres=>{console.log(finres)})
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
                    <Body tweetMessage={this.state.tweetedMessage} page={this.state.page} sendUser={this.sendUser} onChange={this.onChange} goHome={this.goHome} user={this.state.user} changeOmission={this.changeOmission} doChangeOmission={this.doChangeOmission} omittedWords={this.state.omittedWords} />
                    <Footer />
                </div>
            )
    }
}

export default App;