import React from 'react';
import Stickies from './Stickies';

class StickiesList extends React.Component {

    render() {
        const stickies = JSON.parse(localStorage.getItem('words'));
        return (
            stickies.map((note, index) => {
                return <Stickies key={index} id={index} word={note.word} meaning={note.meaning} color={note.color}/>
            })
        );
    }
}

export default StickiesList;