import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class Create extends React.Component {
  state = {
    ID: null,
    Color: null,
    Size: null,
    AppraisedValue: null,
    Owner: null,
  };

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  createHandler = () => {
    //Check form validity
    if (
      !(
        this.state.ID &&
        this.state.Color &&
        this.state.Size &&
        this.state.AppraisedValue &&
        this.state.Owner
      )
    ) {
      alert("All fields must be filled in");
    } else {
      this.props.switchFeedHandler(1);
      this.props.socket.emit("REQUEST", {
        action: "CreateAsset",
        data: this.state,
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <form className="Main-inside" noValidate autoComplete="off">
        <Typography variant="display2">Create an asset</Typography>
        <TextField
          label="ASSET ID"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange("ID")}
          margin="normal"
        />
        <TextField
          label="Color"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange("Color")}
          margin="normal"
        />
        <TextField
          label="Size"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange("Size")}
          margin="normal"
        />
        <TextField
          label="AppraisedValue"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange("AppraisedValue")}
          margin="normal"
        />
        <TextField
          label="Owner"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange("Owner")}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          disabled={!this.props.connected}
          className={classes.button}
          onClick={this.createHandler}
        >
          {this.props.connected ? "CREATE" : "DISCONNECTED"}
        </Button>
        <p>Asset ID is case sensitive</p>
      </form>
    );
  }
}

export default withStyles(styles)(Create);
