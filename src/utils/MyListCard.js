import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class MyListCard extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    open_episode = (param) =>{
        this.props.open_episode(param)
    };


    render() {

        return (
            <TouchableOpacity onPress={() => this.open_episode(1)}>
                <View style={{height: 90, margin: 15, borderWidth: 1, borderRadius: 15, padding: 20,backgroundColor: "#eff5f5"}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 6, flexDirection: 'column'}}>
                            <View style={{flex: 1}}>
                                <Text  numberOfLines={1} adjustFont style={{fontSize: 20}}>{this.props.item.name}</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <View style={{flex: 1}}>
                                    <Text  numberOfLines={1} adjustFont style={{fontSize: 18}}>{this.props.item.creator || 'Gaurav garg'}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flex: 2, flexDirection: 'column'}}>
                            <View style={{flex: 3}}>

                            </View>
                            <View style={{flex: 1}}>
                                <Text>Episodes: <Text style={{fontWeight: 'bold'}}>{ this.props.item.episodes}</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
console.disableYellowBox = true;


