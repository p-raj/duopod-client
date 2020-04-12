import React, {Component} from 'react';
import {Text} from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }


    render() {

        return (
            <Text style={{
                fontSize: 30,
                paddingTop: 20,
                color: this.props.theme_color,
                fontWeight: "bold",
                fontFamily: this.props.font_family
            }}>DuoPod</Text>
        );
    }
}
console.disableYellowBox = true;


