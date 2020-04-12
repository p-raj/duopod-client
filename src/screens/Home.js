import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import ExploreList from "./ExploreList";
import MyList from "./MyList";
import Episodes from "./Episodes";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: 3,
            explore_section: false,
            show_episodes: false,

        };

    }

    open_explore_section = (param) => {
        this.setState({explore_section: param})
    };

    open_episodes = (param) => {
        this.setState({show_episodes: true})

    };

    render() {
        const open_explore_section = this.state.explore_section;
        let section;
        if (open_explore_section) {
            section = <ExploreList/>
        } else {
            section = <MyList open_episodes={this.open_episodes}/>
        }

        let show_episodes = this.state.show_episodes;
        let section2;
        if (show_episodes) {
            section2 = <View style={{flex: 10}}><Episodes
                tracks={this.props.tracks}
            /></View>
        } else {
            section2 = <View style={{flex: 10}}>
                <View style={{flex: 9}}>
                    {section}
                </View>
                <View style={{flex: 1}}>
                    <Footer
                        open_explore_section={this.open_explore_section}
                    />
                </View>
            </View>
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
                {section2}

            </View>
        );
    }
}
console.disableYellowBox = true;
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

