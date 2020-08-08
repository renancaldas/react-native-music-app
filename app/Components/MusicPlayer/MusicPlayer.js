import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {errorLog, reactLog, prettyLog} from '../../helpers/helpers';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';
import moment from 'moment';

class ProgressBar extends TrackPlayer.ProgressComponent {
  onSlidingStart(data) {
    prettyLog('onSlidingStart', JSON.stringify(data));
  }

  onSlidingComplete(seconds) {
    prettyLog('onSlidingComplete', JSON.stringify(seconds));
    TrackPlayer.seekTo(seconds);
  }

  onValueChange(seconds) {
    prettyLog('onValueChange', JSON.stringify(seconds));
    TrackPlayer.seekTo(seconds);
  }

  getTimeFromSeconds(seconds) {
    return moment(new Date()).startOf('day').seconds(seconds).format('mm:ss');
  }

  render() {
    return (
      <View style={styles.progressBarTimers}>
        <Text>{this.getTimeFromSeconds(this.state.position)}</Text>
        <Slider
          style={{width: '70%'}}
          value={this.state.position}
          minimumValue={0}
          maximumValue={this.state.duration}
          onSlidingStart={this.onSlidingStart}
          onSlidingComplete={this.onSlidingComplete}
          onValueChange={this.onValueChange}
        />
        <Text>{this.getTimeFromSeconds(this.state.duration)}</Text>
      </View>
    );
  }
}

class MusicPlayer extends Component {
  state = {
    track: null,
    playerState: null,
  };

  componentDidMount() {
    reactLog('componentDidMount()', 'Called');
    // Adds an event handler for the playback-track-changed event
    this.onTrackChange = TrackPlayer.addEventListener(
      'playback-track-changed',
      async (data) => {
        const track = await TrackPlayer.getTrack(data.nextTrack);
        prettyLog('playback-track-changed', JSON.stringify(track));
        this.setState({track: track.id});
      },
    );

    this.onStateChange = TrackPlayer.addEventListener(
      'playback-state',
      async (data) => {
        const state = await TrackPlayer.getState();
        prettyLog('playback-state', state);
        this.setState({playerState: state});
      },
    );

    setTimeout(() => {
      this.initPlayer();
    }, 1000);
  }

  componentWillUnmount() {
    reactLog('componentWillUnmount()');

    // Removes the event handler
    this.onTrackChange.remove();
    this.onStateChange.remove();

    // Destroy player
    TrackPlayer.destroy();

    // Log spacing
    console.log('');
  }

  componentDidUpdate(provProps, prevState) {
    const prevStateLog = `\nPrevious State: ${JSON.stringify(prevState)}`;
    const currStateLog = `\nCurrent State: ${JSON.stringify(this.state)}`;
    reactLog('componentDidUpdate()', `${prevStateLog} ${currStateLog}`);

    const isPlayerReady = !prevState.playerState && this.state.playerState;
    if (isPlayerReady) {
      prettyLog('componentDidUpdate()', `isPlayerReady`);

      this.addTrack({
        id: 'Honors_Over', // Must be a string, required
        title: 'Over',
        artist: 'Honors',
        album: 'SuicideSheep',
        genre: 'Rock',
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        url: require('../../assets/Honors_Over.mp4'), // Load media from the app bundle
        artwork: require('../../assets/Honors_Over.png'), // Load artwork from the app bundle
      });
    }
  }

  initPlayer() {
    prettyLog('initPlayer()', `Called`);
    const self = this;

    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.getState().then((playerState) => {
        prettyLog(
          'initPlayer()',
          `Player initialized: ${JSON.stringify(playerState)}`,
        );
        this.setState({playerState});
      });
    });
  }

  addTrack(track) {
    prettyLog('addTrack()', `Called`);
    prettyLog('addTrack()', `track: ${JSON.stringify(track)}`);

    TrackPlayer.add([track])
      .then(async () => {
        prettyLog('addTrack'(), `Track added: ${JSON.stringify(track)}`);

        const currentTrack = await TrackPlayer.getCurrentTrack();
        prettyLog(
          'addTrack()',
          `currentTrack: ${JSON.stringify(currentTrack)}`,
        );

        this.setState({track: currentTrack});
      })
      .catch((err) => errorLog('TrackPlayer.add', err));
  }

  onPressPlay() {
    prettyLog('onPressPlay()', `Called`);
    TrackPlayer.play();
  }

  onPressPause() {
    prettyLog('onPressPause()', `Called`);
    TrackPlayer.pause();
  }

  onPressStop() {
    prettyLog('onPressStop()', `Called`);
    TrackPlayer.stop();
  }

  render() {
    reactLog('render()', `this.state.track: ${this.state.track}`);
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={require('../../assets/Honors_Over.png')}
          />
        </View>

        <View style={styles.header}>
          <Text>
            {this.state.track && this.state.track ? this.state.track : 'N/A'}
          </Text>
        </View>

        <View style={styles.progressBar}>
          <ProgressBar />
        </View>

        <View style={styles.playerControls}>
          <IconFeather
            name="shuffle"
            size={20}
            color="black"
            onPress={this.onPressPlay}
          />

          <IconAntDesign
            name="stepbackward"
            size={30}
            color="black"
            onPress={this.onPressPlay}
          />

          {['paused', 'ready'].includes(this.state.playerState) ? (
            <TouchableOpacity onPress={this.onPressPlay}>
              <IconAntDesign name="play" size={40} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.onPressPause}>
              <IconAntDesign name="pause" size={40} color="black" />
            </TouchableOpacity>
          )}

          {/* <IconAntDesign name="stop" size={30} color="black"  onPress={this.onPressStop}/> */}
          <IconAntDesign
            name="stepforward"
            size={30}
            color="black"
            onPress={this.onPressStop}
          />

          <IconFeather
            name="repeat"
            size={20}
            color="black"
            onPress={this.onPressPlay}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  content: {
    height: 300,
    marginBottom: 20,
    borderColor: 'black',
    // borderWidth: 1,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    borderColor: 'black',
    // borderWidth: 1,
  },
  progressBar: {
    height: 50,
    marginBottom: 20,
    borderColor: 'black',
    // borderWidth: 1,
  },
  progressBarTimers: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playerControls: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'black',
    // borderWidth: 1,
  },
});

export default MusicPlayer;
