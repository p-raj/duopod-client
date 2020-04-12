import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class EpisodeListCard extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    open_episode = (param) =>{
        this.props && this.props.open_episode &&  this.props.open_episode (param)
    };


    render() {
        console.warn("bjk",this.props.item)

        return (
            <TouchableOpacity onPress={() => this.open_episode(this.props.item.id)}>
                <View style={{height: 90, margin: 15, borderWidth: 1, borderRadius: 15, padding: 20,backgroundColor: "#eff5f5"}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 5, flexDirection: 'column'}}>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 20}}>{(this.props.item &&  this.props.item.title) || (this.props.item &&  this.props.item.name)}</Text>
                                <Text style={{fontSize: 15}}>Creator: {this.props.item && this.props.item.creator}</Text>
                            </View>
                        </View>
                        <View style={{flex: 2.5, flexDirection: 'column',backgroundColor:'transparent'}}>
                            <View style={{flex: 3}}>

                            </View>
                            <View style={{flex: 2,}}>
                                <Text>Duration: <Text style={{fontWeight: 'bold'}}>{this.props.item && this.props.item.duration}secs</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
console.disableYellowBox = false;


