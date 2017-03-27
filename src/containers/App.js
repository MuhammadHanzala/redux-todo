import React, { Component } from 'react';
import { connect } from 'react-redux'
import {  addTodo } from '../actions/action1';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';





class Input extends React.Component {

  render() {
    return (
      <div>
        <input type="text" onChange={this._change} value={this.state.value} />
      </div>
    )
  }
}

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      todos : []
    }
    this._change = this._change.bind(this);
    this.delete = this.delete.bind(this);
}



  _change(e) {
    e.preventDefault();
    var todo = this.refs.todo.getValue();
     
    this.props.addTodo(todo);


  }
    delete(e) {
    e.preventDefault();
    console.log(this.props.user);
    this.props.user = '';

  }

  
  render() {
  
    return (
      <div>
        <div>
          <Paper style={{
                          height: 125,
                          width: 300,
                          margin: 50,
                          textAlign: 'center',
                          display: 'inline-block',
                        }} zDepth={1} >
          <form onSubmit={this._change}>
          <TextField hintText="Add Todo" floatingLabelText="Add Todo" type="text"  ref="todo" required="required"/> 
          <RaisedButton label="Add" type="submit" style={{margin: 10}} primary={true}></RaisedButton>
          <RaisedButton label="Delete All" onClick={this.delete} primary={true}></RaisedButton>
          </form>
          
          </Paper>
          
            <List>
            {this.props.user.map((m,i) =>
            

        <ListItem
          primaryText={m.text}
          leftCheckbox={<Checkbox  />} key={i} id={m.id} style={{
      textDecoration:'line-through'
    }}
        />

               
       
              )}
           </List>
        
    
        {/*<Subheader>General</Subheader>*/}
       

     
        </div>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    user: state.userName
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

    addTodo: (todo) => {
      dispatch(addTodo(todo));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


