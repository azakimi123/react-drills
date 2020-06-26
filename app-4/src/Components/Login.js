import React, {Component} from 'react';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = (val) => {
        this.setState({username: val})
    }

    handlePassword = (pass) => {
        this.setState({password: pass});
    }

    handleLogin = () => {
        alert(`Username: ${this.state.username}   Password: ${this.state.password}`);
    }


    render () {
        return (
            <div>
                <input
                    placeholder='username'
                    value={this.state.username}
                    onChange={ e => this.handleUsername(e.target.value)}/>
                <input
                    placeholder='password'
                    value={this.state.password}
                    onChange={ e => this.handlePassword(e.target.value)}/>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

export default Login;