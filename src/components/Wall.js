import React from 'react';
import StickiesList from './StickiesList';
import './Wall.css';
import Spotlight from './Spotlight';

class Wall extends React.Component {
    constructor(props) {
        super(props);
        window.wall = this;
        this.state = {
            display_spotlight: 'hidden',
        };
        if (!('words' in localStorage) ) {

            localStorage.setItem(
                'words',
                JSON.stringify([
                    {
                        word: 'TODO - step 1',
                        meaning: 'CTRL+ENTER to open spotlight',
                        color: 'blue',
                    },
                    {
                        word: 'ADD TODO - step 2',
                        meaning: 'Add todo item in format word,description.',
                        color: 'blue',
                    },
                ]),
            );
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keydownHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keydownHandler);
    }

    keydownHandler = (e) => {
        if (e.keyCode === 13 && e.ctrlKey) {
            this.setState({display_spotlight: 'visible'});
        } else if (e.key === 'Escape') {
            this.setState({display_spotlight: 'hidden'});
        }
    };

    hideSpotlight() {
        this.setState({display_spotlight: 'hidden'});
    }


    render() {
        const {display_spotlight: displaySpotlight} = this.state;
        return (
            <div className="bg">
                <Spotlight displayMode={displaySpotlight}/>
                <StickiesList/>
            </div>
        );
    }
}

export default Wall;
