import React, {Component} from 'react';
import Footer from './Footer';
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiReact } from "react-icons/di";


class Main extends Component {
    render() {
        return(
            <div >
                <section className='main-container'>
                <section className='icons'>
                    <AiOutlineHtml5/>
                    <DiJavascript1/>
                    <DiCss3/>
                    <DiReact/>
                </section>
                <h1 className='top-heading'>WELCOME TO MY STUDIO</h1>
                <h1 className='bottom-heading'>IT'S NICE TO MEET YOU</h1>

                
                </section>
                <section className='second-container'>
                <Footer/>
                </section>
            </div>
        )
    }
}

export default Main;