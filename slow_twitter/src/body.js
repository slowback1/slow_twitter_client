import React, { Component } from 'react';
import d3 from 'd3';
import bubbleGraph from './graphs/bubbleGraph';
//import wordCloud from './graph/someotherguysexample';a
    d3.csv('./graphs/sampleData.csv', function(error, data) {
        if(error) {
            console.error('error')
        }
    })
class Body extends Component {

    render() {
        if(this.props.page === 'home') {
        return (
                <div className="body">
                    <div className="bodySection">
                        <h3>Enter a Twitter Username</h3>
                        <div className="userInput"><p>@</p><input type="text" name="username" onChange={this.props.onChange} autoFocus="true" autocomplete="off" /> </div>
                        <button name="submit" onClick={this.props.sendUser}>Submit</button>
                        <div class="chart-example" id="chart"><svg></svg></div>

                    </div>
                </div>
            )
        } else if(this.props.page === 'about') {
            return (
                    <div className="body">
                        <div className="bodySection">
                            <h3> About This Project </h3>
                            <p> This webapp takes a given Twitter username, parses their tweets, and tries to create a word bubble separated by their respective word types (nouns, verbs, adjectives, adverbs, and "others"). </p>
                            <p> This webapp is a MERN stack app built by Andrew Wobeck.  To view more of his work, visit his Github page <a href="https://github.com/slowback1"> here </a>.</p>
                        </div>

                    </div>
                )
        } else if(this.props.page === 'results') {
            return (
             <div className="body">
                <div className="bodySection">
                    <h3>Results</h3>
                    <div className="bodySectionSection">
                        <h4>A jumbled phrase using {this.props.user}'s most common words</h4>
                        <p>{this.props.tweetMessage}</p>
                    </div>
                    <div className="bodySectionSection">
                        <div id="wordCloud"></div>
                    </div>
                    <a onClick={this.props.goHome}>Enter another user</a>
                </div>
             </div>
             )
        } else if(this.props.page === "error/baduser") {
            return (
                <div className="body">

                    <div className="bodySection">
                    <div className="errorSection">
                        <h4>Error: Not a Twitter user</h4>
                    </div>
                        <h3>Enter a Twitter Username</h3>
                        <div className="userInput"><p>@</p><input type="text" name="username" onChange={this.props.onChange} autoFocus="true" autocomplete="off" /> </div>
                        <button name="submit" onClick={this.props.sendUser}>Submit</button>

                    </div>
                </div>
                )
        }
    }
}
/*      omission form is totally borked - will fix later
                        <div className="omissionForm">
                        <h2>Omissions</h2>
                        <label>Common Words</label><input type="radio" value={commonWords} id="commonOmission" onClick={this.props.changeOmission} name="OmittedWords"  /><br />
                        <label>No Omissions</label><input type="radio" id="noOmission" value={[]} onClick={this.props.changeOmission} name="OmittedWords" /><br />
                        <label>Enter Your Own Omissions</label><input type="radio" id="ownOmission" value={this.props.customOmission} onClick={this.props.changeOmission} name="OmittedWords" />
                        <input type="text" onChange={this.props.doChangeOmission} id="changeOmission" />
                        </div>
*/
export default Body;