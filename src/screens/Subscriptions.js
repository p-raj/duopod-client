import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


export default class Subscriptions extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {
        return (
            <View style={styles.container}>
                <Text> Subscriptions</Text>
                <View style={styles.container}>
                    <FlatList
                        data={[
                            {key: 'Devin'},
                            {key: 'Dan'},
                            {key: 'Dominic'},
                            {key: 'Jackson'},
                            {key: 'James'},
                            {key: 'Joel'},
                            {key: 'John'},
                            {key: 'Jillian'},
                            {key: 'Jimmy'},
                            {key: 'Julie'},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'rgb(4,4,4)',
    },
    audioElement: {
        height: 0,
        width: 0,
    },
    item:{
        color:'white'
    }
};
