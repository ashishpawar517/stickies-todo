import React from 'react';
import './Stickies.css';
import * as PropTypes from "prop-types";
/* eslint-disable react/prop-types */

// TODO: upgrade to latest eslint tooling
class Stickies extends React.Component {
    render() {
        let {id, word, meaning, color} = this.props;
        // color.substr(0,color.length-1);
        const noteColor = `note-${color.substr(0, color.length - 1)}`
        const deleteKey = (e, idx) => {
            localStorage.setItem('words',
                JSON.stringify(
                    JSON.parse(
                        localStorage.getItem('words'))
                            .filter((w, id) => id !== idx)
                    )
                )
            window.location.reload(false);
        }
        return (
            <aside className={`note-wrap ${noteColor}`}>
                <div className='cross' onClick={e => deleteKey(e, id)}>
                    <small>❌</small>
                </div>
                <p>{word}</p>
                <p className='description'>{meaning}</p>
            </aside>
        );
    }
}

Stickies.propTypes = {
    id: PropTypes.any,
    word: PropTypes.any,
    meaning: PropTypes.any,
    color: PropTypes.any
}

export default Stickies;
