import React from 'react'
import Route from "./components/Route";
import Accordion from "./components/Accordion";

const options = [
    {
        label: "The Colour Red",
        value: 'red',
    },
    {
        label: 'The Colour Green',
        value: 'green'
    }
]
export default () => {
    return <div>
        <Route
            path="/"
        >
            <Accordion items={options}/>
        </Route>
    </div>
}