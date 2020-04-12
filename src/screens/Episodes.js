import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import EpisodeListCard from "../utils/EpisodeListCard";
import EpisodePlayer from "./EpisodePlayer";
import axios from "axios";


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
        this.setState({
            loading: true
        })
        console.warn("asd22", this.props.channel_id)
        let temp = this.props.channel_id
        console.warn("as", temp)
        let a = axios.get('https://tq2dnljnk8.execute-api.us-east-1.amazonaws.com/dev/subscriptions/' + this.props.channel_id + '/episodes')
            .then((res) => {
                console.warn("as", res)
                this.setState({
                    loading: false
                })
                let temp = res.data && res.data.results
                this.setState({
                    episodeList: temp
                })
            }).catch(() => {
                this.setState({
                    loading: false
                })
            })

    }

    open_episode = (param) => {
        console.warn("lsir",this.state.episodeList)
        console.warn("saparams",param)
        let index = 0;
        this.state.episodeList.map((item, i) => {
            console.warn("item.key",item.id)
            if ( item.id==param) {
                console.warn("item+key",item.id)

                index=i
            }
        })
        console.warn("saasindexads",index)

        this.setState({open_episode: true, episode_id: param, index: index})
    };

    render() {
        let open_episode = this.state.open_episode
        let section;
        if (open_episode) {
            section = <EpisodePlayer
                index={this.state.index}
                tracks={this.state.episodeList}
            />
        } else {
            section = <>
                <Text style={{fontSize: 30, marginLeft: 20, color: "white", alignSelf: 'center'}}>Episodes</Text>
                <FlatList
                    data={this.state.episodeList || []}
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
                {this.state.loading ?
                    <ActivityIndicator size={'large'} style={{paddingTop: 100}} color={'white'}/> : section}
            </View>
        );
    }
}



