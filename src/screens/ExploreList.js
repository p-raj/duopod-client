import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import ExploreListCard from "../utils/ExploreListCard";

export default class ExploreList extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {

        return (
            <View style={{paddingBottom: 40}}>
                <Text style={{fontSize: 30, marginLeft: 20}}>Explore</Text>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic">
                    <ExploreListCard/>
                    <ExploreListCard/>
                    <ExploreListCard/>
                    <ExploreListCard/>
                    <ExploreListCard/>
                </ScrollView>
            </View>
        );
    }
}
console.disableYellowBox = true;


