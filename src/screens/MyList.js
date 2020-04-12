import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import MyListCard from "../utils/MyListCard";

export default class MyList extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {

        return (
            <View style={{paddingBottom:40}}>
                <Text style={{fontSize: 30, marginLeft: 20}}>Your Subscriptions</Text>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic">
                    <MyListCard open_episode={this.props.open_episodes}/>
                    <MyListCard/>
                </ScrollView>
            </View>
        );
    }
}
console.disableYellowBox = true;


