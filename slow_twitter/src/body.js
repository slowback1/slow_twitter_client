import React, { Component } from 'react';
//import wordCloud from './graph/someotherguysexample';
class Body extends Component {
    
    render() {
        if(this.props.page === 'home') {
        return (
                <div className="body">
                    <div className="bodySection">
                        <h3>Enter a Twitter Username</h3>
                        <div className="userInput"><p>@</p><input type="text" name="username" onChange={this.props.onChange} autoFocus /> </div>
                        <button name="submit" onClick={this.props.sendUser}>Submit</button>
                        <div id="wordCloud"></div>
                    </div>
                </div>
            )
        } else {
            return (
                    <div className="body">
                        <div className="bodySection">
                            <h3> About This Project </h3>
                            <p> This webapp takes a given Twitter username, parses their tweets, and tries to create a word bubble separated by their respective word types (nouns, verbs, adjectives, adverbs, and "others"). </p>
                            <p> This webapp is a MERN stack app built by Andrew Wobeck.  To view more of his work, visit his Github page <a href="https://github.com/slowback1"> here </a>.</p>
                        </div>

                    </div>
                )
        }
    }//a
}

export default Body;