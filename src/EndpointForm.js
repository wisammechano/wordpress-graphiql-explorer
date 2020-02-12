import React, { Component } from "react";

export default class EndpointForm extends Component {
  render() {
    const style = {
      borderRadius: 3,
      border: "none",
      boxShadow:
        "inset 0 0 0 1px rgba(0,0,0,0.20), 0 1px 0 rgba(255,255,255, 0.7), inset 0 1px #fff",
      color: "#555",
      margin: "0 5px",
      padding: "3px 11px 5px",
      maxWidth: 200,
      width: 200
    };

    return (
      <input
        type="text"
        autoComplete="off"
        placeholder="Endpoint URL"
        onChange={e => this.props.handleEndpoint(e.target.value)}
        value={this.props.endpoint}
        style={style}
      />
    );
  }
}
