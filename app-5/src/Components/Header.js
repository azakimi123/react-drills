import React, {Component} from 'react';



class Header extends Component {
    render() {
        return(
            <div>
                <nav>
                    <img src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg'/>
                    <section className='link'>
                        <span>SHOP</span>
                        <span>NEW ITEMS</span>
                        <span>ABOUT</span>
                        <span>CONTACT</span>
                    </section>
                </nav>
            </div>
        )
    }
}

export default Header;