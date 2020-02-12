import React, { Component } from "react";

export default class HeadersModal extends Component {
  constructor(props) {
    super(props);

    const headers = this.props.headers;
    const keys = Object.keys(this.props.headers);
    const len = Math.max(keys.length, 3);
    const state = {
      rows: []
    };

    for (let i = 0; i < len; i++) {
      if (i < keys.length) {
        state.rows.push({ k: keys[i], v: headers[keys[i]] });
      } else {
        state.rows.push({ k: "", v: "" });
      }
    }

    this.state = state;
  }

  addRow = () => {
    const rows = [...this.state.rows, { k: "", v: "" }];
    this.setState({ rows });
  };

  handleKey = i => e => {
    const newRows = [...this.state.rows];
    newRows[i].k = e.target.value;
    this.setState({ rows: newRows }, this.emitChange);
  };

  handleValue = i => e => {
    const newRows = [...this.state.rows];
    newRows[i].v = e.target.value;
    this.setState({ rows: newRows }, this.emitChange);
  };

  handleDelete = i => () => {
    const newRows = [...this.state.rows];
    newRows.splice(i, 1);
    this.setState({ rows: newRows }, this.emitChange);
  };

  emitChange = () => {
    const headers = {};
    this.state.rows.forEach(header => {
      headers[header.k] = header.v;
    });
    this.props.handleHeaders(headers);
  };

  render() {
    return (
      <div
        style={{ display: this.props.show ? "block" : "none" }}
        id="headers-modal"
        className="modal"
      >
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-close" onClick={this.props.handleClose}>
              &times;
            </span>
            <div>
              <h3>Headers</h3>
              <p>Set the headers you want to send to the API</p>
            </div>
          </div>
          <div className="modal-body">
            {this.state.rows.map((h, i) => (
              <div key={i} className="header">
                <input
                  className="header-key"
                  type="text"
                  placeholder="Header.."
                  autoComplete="off"
                  value={h.k}
                  onChange={this.handleKey(i)}
                />{" "}
                :{" "}
                <input
                  className="header-value"
                  type="text"
                  placeholder="Value..."
                  autoComplete="off"
                  value={h.v}
                  onChange={this.handleValue(i)}
                />
                <span className="row-delete" onClick={this.handleDelete(i)}>
                  &times;
                </span>
              </div>
            ))}
            <button className="add-header" onClick={this.addRow}>
              Add Header
            </button>
          </div>
        </div>
      </div>
    );
  }
}
