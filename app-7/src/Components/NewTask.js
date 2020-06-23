import React, {Component} from 'react';


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
        this.props.add(this.state.userInput);
        this.setState({ userInput: ''});
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
            </div>
        )
    }
}


export default NewTask;