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
                <Text style={{fontSize: 30, marginLeft: 20,color:'white',alignSelf:'center'}}>Your Subscriptions</Text>
                <FlatList
                    data={[
                        {key: 'Episode 1 - Happiness Is Peace in Motion '},
                        {key: 'Episode - 2'},
                        {key: 'Episode - 3'},
                        {key: 'Episode - 4'},
                        {key: 'Episode - 5'},
                        {key: 'Episode - 6'},
                        {key: 'Episode - 7'},
                        {key: 'Episode - 8'},
                        {key: 'Episode - 9'}
                    ]}
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
console.disableYellowBox = true;


