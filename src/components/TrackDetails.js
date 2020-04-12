import React from 'react';

import {StyleSheet, Text, View,} from 'react-native';

const TrackDetails = ({
                          title,
                          artist,
                          onAddPress,
                          onMorePress,
                          onTitlePress,
                          description,
                          onArtistPress,
                      }) => (
    <View style={styles.container}>
        <View style={styles.detailsWrapper}>
            <Text style={styles.title} onPress={onTitlePress}>{title} - {artist}</Text>
        </View>

        <View style={{height: 100, flex: 1, paddingHorizontal: 20,}}>
            <Text style={styles.subTitle} onPress={onTitlePress}>Description - {description || 'NA'}</Text>
        </View>
    </View>
);

export default TrackDetails;

const styles = StyleSheet.create({
    container: {
        flex: 10,

    },
    detailsWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5,
        flexDirection: 'row',

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.9)',
        textAlign: 'left',
    },
    artist: {
        color: 'rgba(255, 255, 255, 0.72)',
        fontSize: 12,
        marginTop: 4,
    },
    button: {
        opacity: 0.72,
    },
    moreButton: {
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 2,
        opacity: 0.72,
        borderRadius: 10,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    moreButtonIcon: {
        height: 17,
        width: 17,
    }
});
