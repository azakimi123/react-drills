import React, {Component} from 'react';


class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this);
    }


    handleUsernameChange(name) {
        this.setState({username: name})
    }


    handlePasswordChange(pass) {
        this.setState({password: pass})
    }

    handleLogin() {
        alert(`You have logged in with ${this.state.username} as your username and ${this.state.password} as your password`);
    }


    render() {
        return (
            <div>
                <input 
                    onChange={(e) => this.handleUsernameChange(e.target.value)}
                    type='text'
                    placeholder='username'
                />
                <input 
                    onChange={(e) => this.handlePasswordChange(e.target.value)}
                    type='text'
                    placeholder='password'
                />
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }

}


export default Login;