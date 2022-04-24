import React from 'react';
import './Spotlight.css';
import * as PropTypes from 'prop-types';

class Spotlight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };

    }

    updateInputValue(evt) {
        const val = evt.target.value;
        this.setState({
            inputValue: val,
        });

        const split = val.split(',');

        if ((split.length === 3 && split[2].at(-1) === '.') || (split.length === 2 && split[1].at(-1) === '.')) {
            let words = [];
            if (localStorage.getItem('words') !== null) words = JSON.parse(localStorage.getItem('words'));
            // console.log(words)
            words.push({
                word: split[0],
                meaning: split[1],
                color: split.length === 3 ? split[2] : 'yellow',
            });
            // console.log(words)
            localStorage.setItem('words', JSON.stringify(words));
            window.wall.hideSpotlight();
            this.clearInputField()
        }
    }

    render() {
        const {displayMode} = this.props;
        return (
            <div id="spotlight_wrapper" style={{visibility: displayMode}}>
                <input
                    type="text"
                    id="spotlight"
                    placeholder="Spotlight-Search"
                    ref={input => input && input.focus() }
                    value={this.state.inputValue}
                    onChange={(evt) => this.updateInputValue(evt)}
                    autoComplete="off"
                />
            </div>
        );
    }


    clearInputField() {
        this.setState({inputValue: ''})
    }
}

Spotlight.propTypes = {displayMode: PropTypes.any};

export default Spotlight;
