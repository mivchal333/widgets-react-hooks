import React from 'react'
import Translate from "./components/Translate";

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
        <Translate/>
    </div>
}