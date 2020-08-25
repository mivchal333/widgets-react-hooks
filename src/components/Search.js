import React, {useEffect, useState} from "react";
import axios from 'axios';

const Search = props => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            })
            setResults(data.query.search)
        }
        if (term) {
            search();
        }
    }, [term])

    const renderedResults = results.map(result => {
        return <div className="item" key={result.pageid}>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
            </div>
        </div>
    })
    return <div>
        <div className="ui form">
            <div className="field">
                <label>Enter search term</label>
                <input className="input" onChange={e => setTerm(e.target.value)} value={term}/>
            </div>
        </div>
        <div className="ui celled list">
            {renderedResults}
        </div>
    </div>
}

export default Search