import React, {Component} from 'react';
import List from './List'


class NewTask extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          list: ['laundry'],
          userInput: ''
        };
        this.addTask = this.addTask.bind(this);
      }
    
      handleInput(val) {
        this.setState({userInput: val});
      }

      addTask() {
        this.setState({
          // destructuring used to keep the previous items from the list and add the new ones to the array
          toDoList: [...this.state.toDoList, this.state.userInput],
          //sets the input field back to placeholder
          userInput: ''
        });
      }



    render() {
        return (
            <div>
                <input 
                    onChange={ (e) => this.handleInput(e.target.value)}
                    value={this.state.userInput}
                    placeholder='New Task'
                />
                <button onClick={this.addTask}>Add Task</button>
                <List newList={this.state.list}/>
            </div>
        )
    }
}


export default NewTask;