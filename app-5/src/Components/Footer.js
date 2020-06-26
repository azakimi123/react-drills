
import React, {Component} from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


class Footer extends Component {
    render() {
        return(
            <div className='social-media'>
                <FaInstagram/>
                <FaTwitter/>
                <FaFacebookSquare/>
                <FaLinkedinIn/>
            </div>
        )
    }
}

export default Footer;