import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import ExploreList from "./ExploreList";
import Episode from "./Episode";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: 3,
            explore_section: false
        };

    }

    open_explore_section = (param) => {
        this.setState({explore_section: param})
    };


    render() {
        const open_explore_section = this.state.explore_section;
        let section;
        if (open_explore_section) {
            section = <ExploreList/>
        } else {
            section = <Episode
                tracks={this.props.tracks}
            />
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
                <View style={{flex: 10}}>
                    <View style={{flex: 9}}>
                        {section}
                    </View>
                    <View style={{flex: 1}}>
                        <Footer
                            open_explore_section={this.open_explore_section}
                        />
                    </View>
                </View>

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

