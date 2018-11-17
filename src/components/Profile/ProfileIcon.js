import React, { Component } from "react";

class ProfileIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownOpen: false
    };
  }
  render() {
    return (
      <div className="pa4 tc">
        <img
          src="http://tachyons.io/img/logo.jpg"
          alt="avatar"
          className="br-100 ba h3 w3 dib"
        />
      </div>
    );
  }
}

export default ProfileIcon;
