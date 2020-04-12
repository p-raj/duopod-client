import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import ExploreList from "./ExploreList";
import MyList from "./MyList";
import Episodes from "./Episodes";
import axios from 'axios'
export const TRACKS = [
    {
        title: 'Naval',
        artist: 'Naval',
        albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
];
export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: 3,
            explore_section: false,
            show_episodes: false,
            subscription_section: false,
            subscribed_channels:[]

        };

    }

    open_explore_section = (param) => {
        this.setState({explore_section: true, subscription_section: false,show_episodes:false})
    };
    open_subscription_section = (param) => {
        this.setState({explore_section: false, subscription_section: true,show_episodes:false})
    };

    open_episodes = (id) => {
        console.warn("asdd",id)
        this.setState({show_episodes: true,channel_id:id})

    };
    componentDidMount(): void {
    let a=axios.get('https://tq2dnljnk8.execute-api.us-east-1.amazonaws.com/dev/user/3/subscriptions/').then((res)=>{
        console.warn("as",res)
        this.setState({subscribed_channels:res.data && res.data.results})
    })

    }

    render() {
        console.warn("asda",this.state.subscribed_channels)
        const open_explore_section = this.state.explore_section;
        const open_subscription_section = this.state.subscription_section;
        let section;
        if (open_explore_section) {
            section = <ExploreList/>
        } else {
            if (this.state.show_episodes) {
                section = <View style={{flex: 10}}><Episodes
                    channel_id={this.state.channel_id}
                    // Episodes lists
                    tracks={this.props.tracks}
                /></View>
            } else {
                section = <MyList subscribed_channels={this.state.subscribed_channels} open_episodes={this.open_episodes}/> // Subscription lists & episodes===channels
            }
        }
        return (
            <View style={styles.container}>
                <StatusBar hidden={false}/>
                <View style={{flex: 1, alignItems: 'center', borderBottomWidth: 2, backgroundColor: "#eff5f5"}}>
                    <Header
                        theme_color={"green"}
                        font_family={"Cochin"}
                    />
                </View>
                <View style={{flex:10}}>
                {section}
                </View>
                <View style={{flex: 1}}>
                    <Footer
                        open_explore_section={this.open_explore_section}
                        open_subscription_section={this.open_subscription_section}
                    />
                </View>

            </View>
        );
    }
}
console.disableYellowBox = false;
const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(4,4,4)',
    },
    audioElement: {
        height: 0,
        width: 0,
    }
};

