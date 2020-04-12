import React, {Component} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import EpisodeListCard from "../utils/EpisodeListCard";
import EpisodePlayer from "./EpisodePlayer";
import axios from "axios";
import MyListCard from "../utils/MyListCard";


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
    componentDidMount(): void {
        let a=axios.get('https://tq2dnljnk8.execute-api.us-east-1.amazonaws.com/dev/subscriptions/'+this.props.channel_id+'1/episodes').then((res)=>{
            console.warn("as",res)
            // this.setState({episodeList:res.data && res.data.results})
            this.setState({episodeList:[
                    {
                        "id": 1,
                        "languages": [
                            {
                                "language__label": "en",
                                "link": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                                "converted_title": "Engineering at Slack",
                                "converted_text": null
                            }
                        ],
                        "title": "Engineering at Slack",
                        "created_at": "2020-04-12T00:18:37.588663Z",
                        "duration": 900,
                        "channel": 1
                    }
                ]})
        })

    }

    open_episode = (param) => {
        this.setState({open_episode: true, episode_id: param})
    };
    render() {
        let open_episode = this.state.open_episode
        let section;
        if (open_episode) {
            section = <EpisodePlayer
                tracks={this.state.episodeList}
            />
        } else {
            section = <>
                <Text style={{fontSize: 30, marginLeft: 20, color: "white",alignSelf:'center'}}>Episodes</Text>
                <FlatList
                    data={this.state.episodeList ||[]}
                    renderItem={({item}) => {
                        return (
                            <EpisodeListCard item={item} open_episode={this.open_episode}/>
                        )
                    }}
                />
                </>

        }
        return (
            <View style={{flex: 1, paddingBottom: 40}}>

                {section}
            </View>
        );
    }
}



