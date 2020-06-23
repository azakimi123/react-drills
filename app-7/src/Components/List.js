import React, {Component} from 'react';
import Todo from './Todo'




class List extends Component {



    render() {
        //creates the variable list so we can use it to display the updated list from the user
        let updateList = this.props.tasks.map( (element, i) => {
          //setting the task as the key for the props of element to pass to ToDo.js
          return <Todo key={i} task={element}/>;
          
        });



        return (
            <div>
                {updateList}
            </div>
        )
    }
}


export default List;