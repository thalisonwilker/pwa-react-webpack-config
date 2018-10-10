import {React, createElement} from 'react'
import ReactDOM from 'react-dom'

let h1 = createElement(
    'h1',
    {
        style: {
            textAlign: 'center',
            fontFamily: 'Consolas'
        }
    },
    'ReactJS'
)

ReactDOM.render(
    h1,
    document.querySelector("#main")
)