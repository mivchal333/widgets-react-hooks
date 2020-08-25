import React, {useState} from 'react'
import Dropdown from "./components/Dropdown";

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
    const [selected, setSelected] = useState(options[0])
    return <div>
        <Dropdown
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
        />
    </div>
}