import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import backgroundImage from './pictures/lots-of-paws.png';

import NavigationBarComponent from './components/NavigationBarComponent/NavigationBarContainer';
import TinderFeedComponent from './components/TinderFeedComponent/TinderFeedContainer';
import LikedComponent from './components/LikedComponent/LikedContainer';

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    min-height: calc(100vh - 105rem);
    width: 100%;
    max-width: 1000px;
    padding: 15rem 0 90rem;
    background-color: #E5989B;
    ${props => props.center && css`
        background-color: #e7e7e7;
    `}
`;
const BackgroundGIF = styled.img`
    width: 100vw;
`;

class App extends Component {
    onClick = () => {
    window.alert('Hej Linnea!');
    };
    render() {
        const {appState, setAppState} = this.props;
        const likedComponent = this.props.appState.activeStage === 2 ? <LikedComponent {...{appState, setAppState}}/> : null;
        const tinderFeedComponent = this.props.appState.activeStage === 3 ? <TinderFeedComponent {...{appState, setAppState}}/> : null;
        return (
            <AppContainer center={this.props.appState.activeStage === 3}>
                {/*<BackgroundGIF src={backgroundImage} alt="backgroundImage"/>*/}
                {tinderFeedComponent}
                {likedComponent}
                <NavigationBarComponent {...{appState, setAppState}}/>
            </AppContainer>
        );
    }
}

export default App;
