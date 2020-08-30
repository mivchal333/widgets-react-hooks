import React, {useState} from 'react';
import Dropdown from "./Dropdown";
import Convert from "./Convert";


const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: "Hindi",
        value: "hi"
    }
]
const Translate = (props) => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input
                        value={text}
                        onChange={event => setText(event.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                options={options}
                onSelectedChange={setLanguage}
                selected={language}
                label={"Select a language"}
            />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert
                language={language}
                text={text}
            />
        </div>
    )
}
export default Translate