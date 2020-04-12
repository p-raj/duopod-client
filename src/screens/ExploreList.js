import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import axios from "axios";
import EpisodeListCard from "../utils/EpisodeListCard";

export default class ExploreList extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    componentDidMount(): void {
        this.setState({loading: true})
        let a = axios.get('https://tq2dnljnk8.execute-api.us-east-1.amazonaws.com/dev/subscriptions')
            .then((res) => {
                console.warn("as", res)
                this.setState({
                    loading: false, randomList: res.data.results
                })
            })
    }

    render() {

        return (
            <View style={{paddingBottom: 40}}>
                {this.state.loading
                    ? <ActivityIndicator size={'large'} color={'white'} style={{paddingTop: 40}}/>
                    :
                    <View><Text
                        style={{fontSize: 30, marginLeft: 20, color: 'white', alignSelf: 'center'}}>Explore</Text>
                        <FlatList
                            data={this.state.randomList || []}
                            renderItem={({item}) => {
                                return (
                                    <EpisodeListCard item={item}/>
                                )
                            }}
                        />
                    </View>
                }
            </View>
        );
    }
}
console.disableYellowBox = false;


