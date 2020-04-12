import React, {Component} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default class EpisodeDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    startPlay=(value)=>{
      console.warn("a",value)
    }
    stopPlay=(value)=>{
        console.warn("a",value)
    }
    setLanguage
    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.item,{padding:10}]}>Select language</Text>
                <View style={styles.container}>
                    <FlatList
                        data={[
                            {key: 'English',value:'en'},
                            {key: 'German',value:'ge'},
                            {key: 'Spanish',value:'sp'},
                            {key: 'French',value:'fc'},
                        ]}
                        renderItem={({item}) => {
                            return (
                                <View style={{flex: 1,flexDirection:'row', height: 60, borderBottomWidth: 0.5, borderColor: 'rgb(228,228,228)'}}>
                                    <View style={{flex:5,justifyContent:'center'}}>
                                        <Text style={styles.item}>{item.key}</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        {item.key==='true' ?
                                            <TouchableOpacity onPress={() => {
                                                this.props.startPlay(item.key)
                                            }}>
                                                <View style={styles.playButton}>
                                                    <Image style={styles.image} source={require('../img/check.png')}/>
                                                </View>
                                            </TouchableOpacity> :
                                            <TouchableOpacity onPress={() => {
                                                this.props.stopPlay(item.key)

                                            }}>
                                                <View style={styles.playButton}>
                                                    <Image style={styles.image} source={require('../img/check.png')}/>
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
        width: 15,
        height: 15,
        // backgroundColor:'red'
    },
    item: {
        color: 'white',
        fontWeight:'400',
        fontSize:20,
        justifyContent: 'center',
        alignItems: 'center'
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

