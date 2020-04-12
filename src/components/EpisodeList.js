import React, {Component} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default class EpisodeList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    startPlay=(value)=>{
        this.props.selectEpisode()
      console.warn("a",value)
    }
    stopPlay=(value)=>{
        this.props.selectEpisode()

        console.warn("a",value)
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.container}>
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
                                <View style={{flex: 1,flexDirection:'row', height: 100, borderBottomWidth: 0.5, borderColor: 'rgb(228,228,228)'}}>
                                    <View style={{flex:5,justifyContent:'center'}}>
                                        <Text style={styles.item}>{item.key}</Text>
                                        <Text style={styles.item}>{item.description}</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        {item.key==='true' ?
                                            <TouchableOpacity onPress={() => {
                                                this.startPlay(item.key)
                                            }}>
                                                <View style={styles.playButton}>
                                                    <Image style={styles.image} source={require('../img/ic_pause_white_48pt.png')}/>
                                                </View>
                                            </TouchableOpacity> :
                                            <TouchableOpacity onPress={() => {
                                                this.stopPlay(item.key)

                                            }}>
                                                <View style={styles.playButton}>
                                                    <Image style={styles.image} source={require('../img/ic_play_arrow_white_48pt.png')}/>
                                                </View>
                                            </TouchableOpacity>
                                        }</View>
                                </View>)
                        }}
                    />
                </View>
            </View>
        );
    }
}

const {width, height} = Dimensions.get('window');
const imageSize = width ;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        flex: 10,
    },
    image: {
        width: 25,
        height: 25,
        // backgroundColor:'red'
    },
    item: {
        color: 'white',
        fontWeight:'400',
        fontSize:20
    },
    playButton: {
        height: 20,
        width: 20,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 100 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondaryControl: {
        height: 18,
        width: 18,
    },
    off: {
        opacity: 0.30,
    }
})

