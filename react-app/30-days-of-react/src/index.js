import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg'
import htmlImage from './images/html_logo.png'
import cssImage from './images/css_logo.png'
import reactImage from './images/react_logo.png'

// to import the doSomeMath from the math.js with or without extension
import doSomeMath from './math'


// to import the other modules
// since these modules were not exported as default we have to desctructure
import { addTwo } from './math'

import * as everything from './math'
console.log(addTwo(5, 5))
console.log(doSomeMath.addTwo(5, 5))
console.log(everything)

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
    <header>
        <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <div className='front-end-img'>
                <img src={htmlImage} alt='html' />
                <img src={cssImage} alt='css' />
                <img src={reactImage} alt='react' />
            </div>
            <p>
                Instructor: {author.firstName} {author.lastName}
            </p>
            <small>Date: {date}</small>
        </div>
    </header>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const user = (
    <div className='user'>
        <img src={asabenehImage} alt='asabeneh' />
        <div className='user-title'>{author.firstName} {author.lastName}</div>
        <div className='role'>Senior dev, Finland</div>
    </div>
)


// JSX element, main
const main = (
    <main>
        <div className='main-wrapper'>
            {user}
            <div>
                Skills
                <br/>
                <ul>{techsFormatted}</ul>
            </div>
        </div>
    </main>
)


const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
    <footer>
        <div className='footer-wrapper'>
            <p>{copyRight}</p>
        </div>
    </footer>
)

// JSX element, app
const app = (
    <div className='app'>
        {header}
        {main}
        {footer}
    </div>
)

// we render the JSX element using the ReactDOM package
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
