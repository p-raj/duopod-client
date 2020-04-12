import React, {Component} from 'react';
import {View} from 'react-native';
import Home from './screens/Home';
import {Router,Stack,Scene} from 'react-native-router-flux'
import Episodes from "./screens/Episodes";
export const TRACKS = [
    {
        title: 'Naval',
        artist: 'Naval',
        albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
];

export default class App extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="Home" component={Home}  initial hideNavBar tracks={TRACKS}  />
                    <Scene key="Settings" component={Home}  initial hideNavBar tracks={TRACKS}  />
                    <Scene key="Episodes" component={Episodes}  initial hideNavBar tracks={TRACKS}  />
                    <Scene key="Subscription" component={Home}  initial hideNavBar tracks={TRACKS}  />
                </Stack>
            </Router>
        )

    }
}


