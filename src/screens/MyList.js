import React, {Component} from 'react';
import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import MyListCard from "../utils/MyListCard";

export default class MyList extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {

        return (
            <View style={{paddingBottom:40}}>
                <Text style={{fontSize: 30, marginLeft: 20,color:'white',alignSelf:'center'}}>Subscriptions</Text>
                <FlatList
                    data={this.props.subscribed_channels ||[]}
                    renderItem={({item}) => {
                        return (
                            <MyListCard item={item} open_episode={this.props.open_episodes}/>
                        )
                    }}
                />
            </View>
        );
    }
}
console.disableYellowBox = false;


