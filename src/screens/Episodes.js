import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import EpisodeListCard from "../utils/EpisodeListCard";
import Episode from "./Episode";


export default class Episodes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            episode_list: [],
            open_episode: false,
            episode_id: null
        };
    }


    open_episode = (param) => {
        this.setState({open_episode: true, episode_id: param})
    };

    render() {
        let tracks = [{
            title: 'Naval',
            artist: 'Naval',
            albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        }]
        let open_episode = this.state.open_episode
        let section;
        if (open_episode) {
            section = <Episode
                tracks={tracks}
            />
        } else {
            section = <>
                <Text style={{fontSize: 30, marginLeft: 20, color: "white",alignSelf:'center'}}>Episodes</Text>
                <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <EpisodeListCard open_episode={this.open_episode}/>
            </ScrollView>
                </>
        }

        return (
            <View style={{flex: 1, paddingBottom: 40}}>

                {section}
            </View>
        );
    }
}



