import React, {Component} from 'react';
import {Alert, Dimensions, StyleSheet, View} from 'react-native';
import LanguageSelector from "../components/LanguageSelector";
import Video from 'react-native-video';
import TrackDetails from '../components/TrackDetails';
import SeekBar from '../components/SeekBar';
import Controls from '../components/Controls';
import axios from 'axios'

export default class EpisodePlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paused: true,
            totalLength: 1,
            currentPosition: 0,
            selectedTrack: 0,
            repeatOn: false,
            shuffleOn: false,
            language: 'en'
        };
    }

    setDuration(data) {
        // console.log(totalLength);
        this.setState({totalLength: Math.floor(data.duration)});
    }

    setTime(data) {
        //console.log(data);
        this.setState({currentPosition: Math.floor(data.currentTime)});
    }

    seek(time) {
        time = Math.round(time);
        this.refs.audioElement && this.refs.audioElement.seek(time);
        this.setState({
            currentPosition: time,
            paused: false,
        });
    }

    onBack() {
        if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
            this.refs.audioElement && this.refs.audioElement.seek(0);
            this.setState({isChanging: true});
            setTimeout(() => this.setState({
                currentPosition: 0,
                paused: false,
                totalLength: 1,
                isChanging: false,
                selectedTrack: this.state.selectedTrack - 1,
            }), 0);
        } else {
            this.refs.audioElement.seek(0);
            this.setState({
                currentPosition: 0,
            });
        }
    }

    onForward() {
        if (this.state.selectedTrack < this.props.tracks.length - 1) {
            this.refs.audioElement && this.refs.audioElement.seek(0);
            this.setState({isChanging: true});
            setTimeout(() => this.setState({
                currentPosition: 0,
                totalLength: 1,
                paused: false,
                isChanging: false,
                selectedTrack: this.state.selectedTrack + 1,
            }), 0);
        }
    }

    selectEpisode = () => {
    }

    setLanguage = (language) => {
        this.setState({language})
    }
    requestTranslation = (language) => {
        const id = this.props.tracks[this.state.selectedTrack] && this.props.tracks[this.state.selectedTrack].id;
        console.warn('sad', 'https://tq2dnljnk8.execute-api.us-east-1.amazonaws.com/dev/request-language-translation/' + id + '/language/' + language)
        axios.get('https://tq2dnljnk8.execute-api.us-east-1.amazonaws.com/dev/request-language-translation/' + id + '/language/' + language)
            .then(() => {
                Alert.alert('Request Successfull')
            }).catch((error) => {

            Alert.alert('Request successfull' + error)
        })
        // this.setState({language})
    }

    componentDidMount(): void {
    }

    render() {
        const track = this.props.tracks[this.state.selectedTrack];
        let filter_language = track && track.languages && track.languages.filter((item) => {
            console.warn("asd", item)
            return item.language__label === this.state.language
        })
        let available_translations = track && track.languages.filter((item) => {
            return item.status === 'completed'
        }).map((item) => item.language__label)

        let title = filter_language && filter_language[0] && filter_language[0].converted_title || track.title;
        let description = filter_language && filter_language[0] && filter_language[0].converted_text || "N/A";
        const video = this.state.isChanging ? null : (
            <Video
                source={{uri: filter_language && filter_language[0] && filter_language[0].link}} // Can be a URL or a local file.
                ref="audioElement"
                paused={this.state.paused}               // Pauses playback entirely.
                resizeMode="cover"           // Fill the whole screen at aspect ratio.
                repeat={true}                // Repeat forever.
                onLoadStart={(error) => {
                    console.warn("asda", error)
                }} // Callback when video starts to load
                onLoad={this.setDuration.bind(this)}    // Callback when video loads
                onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
                onEnd={this.onEnd}           // Callback when playback finishes
                onError={(error) => {
                    console.warn("asda", error)
                }} // Callback when video cannot be loaded
                style={styles.audioElement}/>
        );
        return (
            <View style={styles.container}>
                <TrackDetails title={title} artist={track.creator} description={description}/>
                <LanguageSelector requestTranslation={this.requestTranslation}
                                  selectEpisodeKey={this.state.selectEpisodeKey}
                                  available_translations={available_translations}
                                  language={this.state.language}
                                  setLanguage={this.setLanguage}/>
                <SeekBar
                    onSeek={this.seek.bind(this)}
                    trackLength={this.state.totalLength}
                    onSlidingStart={() => this.setState({paused: true})}
                    currentPosition={this.state.currentPosition}/>

                <Controls
                    onPressRepeat={() => this.setState({repeatOn: !this.state.repeatOn})}
                    repeatOn={this.state.repeatOn}
                    shuffleOn={this.state.shuffleOn}
                    forwardDisabled={this.state.selectedTrack === this.props.tracks.length - 1}
                    onPressShuffle={() => {
                        // Actions.Episodes();
                        this.setState({shuffleOn: !this.state.shuffleOn})
                    }}
                    onPressPlay={() => this.setState({paused: false})}
                    onPressPause={() => this.setState({paused: true})}
                    onBack={this.onBack.bind(this)}
                    onForward={this.onForward.bind(this)}
                    paused={this.state.paused}/>

                {video}
            </View>
        );
    }
}

const {width, height} = Dimensions.get('window');
const imageSize = width;

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
        color: 'white'
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

