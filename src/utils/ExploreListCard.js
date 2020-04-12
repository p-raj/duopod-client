import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class ExploreListCard extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }


    render() {

        return (
                <View style={{height: 90, margin: 15, borderWidth: 1, borderRadius: 15, padding: 20,backgroundColor: "#eff5f5"}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 6, flexDirection: 'column'}}>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 24}}>Marketing Bubble {'\n'}<Text style={{fontSize: 15}}>Creator: Andrew
                                    NG</Text></Text>
                            </View>
                        </View>
                        <View style={{flex: 2, flexDirection: 'column'}}>
                            <View style={{flex: 3}}>

                            </View>
                            <View style={{flex: 1}}>
                                <Text><Text style={{fontWeight: 'bold'}}>Episodes:</Text> 10</Text>
                            </View>
                        </View>
                    </View>
                </View>
        );
    }
}
console.disableYellowBox = true;


