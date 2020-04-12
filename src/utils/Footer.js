import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    open_explore_section = (param) =>{
        this.props.open_explore_section(param)
    };
    open_subscription_section = (param) =>{
        this.props.open_subscription_section(param)
    };


    render() {

        return (
            <View style={{flex: 1, flexDirection: "row", backgroundColor: "#eff5f5", borderTopWidth:2}}>
                <View style={{flex: 1, alignItems: "center", justifyContent: "center", borderRightWidth:1}}>
                    <TouchableOpacity onPress={() => this.open_subscription_section(true)}>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}>My Subscriptions</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                    <TouchableOpacity onPress={() => this.open_explore_section(true)}>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}>Explore</Text>
                    </TouchableOpacity>
                </View>

            </View>

        )
            ;
    }
}
console.disableYellowBox = true;


