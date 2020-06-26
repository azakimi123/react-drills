import React, {Component} from 'react';



class Image extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <img src={this.props.picture}   alt=''/>
            </div>
        )
    }
}

export default Image;