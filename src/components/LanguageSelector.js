import React, {Component} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default class LanguageSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.item, {padding: 10, alignSelf: 'center'}]}>Switch language</Text>
                <View style={styles.container}>
                    <FlatList
                        data={[
                            {key: 'English', value: 'en',id:1},
                            {key: 'German', value: 'de',id:2},
                            {key: 'French', value: 'fr',id:3},
                            {key: 'Hindi', value: 'hi',id:4},
                        ]}
                        renderItem={({item}) => {
                            if (this.props.available_translations.indexOf(item.value) > -1) {
                                return (
                                    <TouchableOpacity onPress={() => {
                                        this.props.setLanguage(item.value)
                                    }}><View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        height: 40,
                                        borderBottomWidth: 0.5,
                                        borderColor: 'rgb(228,228,228)'
                                    }}>
                                        <View style={{flex: 5, justifyContent: 'center'}}>
                                            <Text style={styles.item}>{item.key}</Text>
                                        </View>
                                        <View style={{flex: 1, justifyContent: 'center'}}>
                                            {item.value === this.props.language ?
                                                <View style={styles.playButton}>
                                                    <Image style={styles.image}
                                                           source={require('../img/check.png')}/>
                                                </View>
                                                :
                                                <View style={styles.playButton}>

                                                </View>
                                            }</View>
                                    </View>
                                    </TouchableOpacity>)
                            } else {
                                return (
                                    <TouchableOpacity onPress={() => {
                                        this.props.requestTranslation(item.id)
                                    }}>

                                        <View style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            height: 40,
                                            // backgroundColor:'red',
                                            borderBottomWidth: 0.5,
                                            borderColor: 'rgb(228,228,228)'
                                        }}>
                                            <View style={{flex: 1.5, justifyContent: 'center'}}>
                                                <Text style={styles.item}>{item.key}</Text>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center'}}>
                                                    <Text style={{color: 'white'}}>Request translation</Text>

                                            </View>
                                        </View>
                                    </TouchableOpacity>)
                            }
                        }}
                    />
                </View>
            </View>
        );
    }
}

const {width, height} = Dimensions.get('window');
const imageSize = width;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        flex: 10,
        borderColor: 'white',
        // borderTopWidth: 0.5
    },
    image: {
        width: 15,
        height: 15,
        // backgroundColor:'red'
    },
    item: {
        color: 'white',
        fontWeight: '400',
        fontSize: 20,
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

