import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import MainNav from "./MainNav";
import ReadAsset from "./ReadAsset";
import GetAllAssets from "./GetAllAssets";
import TransferAsset from "./TransferAsset";
import Create from "./Create";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }

  selectPageHandler = (value) => {
    this.setState({
      ...this.state,
      page: value.value,
    });
  };

  render() {
    return (
      <Paper classes={{ root: "Page-container" }}>
        <MainNav selectPage={this.selectPageHandler} />

        {this.state.page === 0 ? (
          <ReadAsset
            switchFeedHandler={this.props.switchFeedHandler}
            socket={this.props.socket}
            connected={this.props.connected}
          />
        ) : null}
        {this.state.page === 1 ? (
          <GetAllAssets
            switchFeedHandler={this.props.switchFeedHandler}
            socket={this.props.socket}
            connected={this.props.connected}
          />
        ) : null}
        {this.state.page === 2 ? (
          <TransferAsset
            switchFeedHandler={this.props.switchFeedHandler}
            socket={this.props.socket}
            connected={this.props.connected}
          />
        ) : null}
        {this.state.page === 3 ? (
          <Create
            switchFeedHandler={this.props.switchFeedHandler}
            socket={this.props.socket}
            connected={this.props.connected}
          />
        ) : null}
      </Paper>
    );
  }
}

export default Main;
