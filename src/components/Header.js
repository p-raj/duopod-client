import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

const Header = ({
                    message,
                    onDownPress,
                    onQueuePress,
                    onMessagePress,
                }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={onDownPress}>
            <Image style={styles.button}
                   source={require('../img/arrow.png')}/>
        </TouchableOpacity>
        <Text onPress={onMessagePress}
              style={styles.message}>{message.toUpperCase()}</Text>
        <TouchableOpacity onPress={onQueuePress}>
            <Image style={styles.button}
                   source={require('../img/settings-9-xxl.png')}/>
        </TouchableOpacity>
    </View>
);

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 72,
        paddingTop: 20,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
    },
    message: {
        flex: 1,
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.72)',
        fontWeight: 'bold',
        fontSize: 10,
    },
    button: {
        // opacity: 0.72,
        height:20,
        width:20,
        // backgroundColor:'white'
    }
});
