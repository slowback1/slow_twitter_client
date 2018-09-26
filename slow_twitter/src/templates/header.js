import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
                <div className="header">
                    <h2 onClick={this.props.goHome}>SlowTwitter </h2>
                    <h2 onClick={this.props.goAbout}>About </h2>
                </div>
            )
    }
}

export default Header;