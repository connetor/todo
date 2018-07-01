import React, { Component } from "react";
import FormSubmit from "./components/FormSubmit.js";
import HeaderComponent from "./components/HeaderComponent.js";
import List from "./components/List.js";

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [ { id: 1, name: 'PubG', complete: false }, 
      { id: 2, name: 'Hon', complete: false },
      { id: 3, name: 'นอนหลับ', complete: false },
   ],
   message:""
};

 //โคตรงง
this.onChangeMessage=this.onChangeMessage.bind(this);
this.onSubmitMessage=this.onSubmitMessage.bind(this);
  }

  onChangeMessage(e){
    this.setState({message:e.target.value});
  }

  onSubmitMessage(e){
    //ไม่ให้มันรีโหลดเพจ
    e.preventDefault();
    let oldTodos=this.state.todos;
    let todoLength = this.state.todos.length;
    let lastID= this.state.todos[todoLength -  1].id;
    let newmessage={id: lastID+1, name: this.state.message, complete: false}
    oldTodos.push(newmessage);
    this.setState({todos:oldTodos});
  }

  render() {
    return (
      <div
        style={{
          borderColor: "#e12c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        <HeaderComponent/>
       <List todos={this.state.todos}/>
          
      <FormSubmit
      onChangeMessage={this.onChangeMessage}
      onSubmitMessage={this.onSubmitMessage}/>
      
      </div>
    );
  }
}

export default App;