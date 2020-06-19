import React, {Component} from 'react';



class Todo extends Component{
    render() {
        return(
            <div>
                <p>{this.props.element}</p>
                {this.props.key}
            </div>
        )
    }
}

export default Todo;