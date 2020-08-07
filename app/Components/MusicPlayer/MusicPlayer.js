import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {prettyLog} from '../../helpers/helpers';
import Icon from 'react-native-vector-icons/FontAwesome';

class ProgressBar extends TrackPlayer.ProgressComponent {
  render() {
    return (
      <View>
        <Text>Position: {this.state.position}</Text>
        <Text>Progress: {this.getProgress()}</Text>
        <Text>BufferedProgress: {this.getBufferedProgress()}</Text>
      </View>
    );
  }
}

class MusicPlayer extends Component {
  state = {
    trackTitle: 'N/A',
    playerState: null,
  };

  componentDidMount() {
    prettyLog('componentDidMount', 'Called');
    // Adds an event handler for the playback-track-changed event
    this.onTrackChange = TrackPlayer.addEventListener(
      'playback-track-changed',
      async (data) => {
        const track = await TrackPlayer.getTrack(data.nextTrack);
        prettyLog('playback-track-changed', track);
        this.setState({trackTitle: track.title});
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
    prettyLog('componentWillUnmount');

    // Removes the event handler
    this.onTrackChange.remove();
    this.setState({playerState: null});

    // Log spacing
    console.log('');
  }

  componentDidUpdate(provProps, prevState) {
    const prevStateLog = `\nPrevious State: ${JSON.stringify(prevState)}`;
    const currStateLog = `\nCurrent State: ${JSON.stringify(this.state)}`;
    prettyLog('componentDidUpdate', `${prevStateLog} ${currStateLog}`);

    const isPlayerReady = !prevState.playerState && this.state.playerState;
    if (isPlayerReady) {
      prettyLog('componentDidUpdate', `isPlayerReady`);

      this.addTrack({
        id: 'patriota', // Must be a string, required
        title: 'Patriota',
        artist: 'Augusto Lima',
        album: 'Gonna Patriotar',
        genre: 'Rock',
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        url: require('../../assets/patriota.mp4'), // Load media from the app bundle
        artwork: require('../../assets/patriota.png'), // Load artwork from the app bundle
      });
    }
  }

  initPlayer() {
    prettyLog('initPlayer', `Called`);
    const self = this;

    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.getState().then((playerState) => {
        prettyLog(
          'initPlayer',
          `Player initialized: ${JSON.stringify(playerState)}`,
        );
        this.setState({playerState});
      });
    });
  }

  addTrack(track) {
    prettyLog('addTrack', `Called`);

    TrackPlayer.add([track]).then(async () => {
      prettyLog('addTrack', `Track added: ${JSON.stringify(track)}`);
    });
  }

  onPressPlay() {
    prettyLog('onPressPlay', `Called`);
    TrackPlayer.play();
  }

  onPressPause() {
    prettyLog('onPressPause', `Called`);
    TrackPlayer.pause();
  }

  onPressStop() {
    prettyLog('onPressStop', `Called`);
    TrackPlayer.stop();
  }
  render() {
    return (
      <View>
        <Text>{this.state.trackTitle}</Text>
        <ProgressBar />
        <View style={styles.buttons}>
          <Icon
            name="backward"
            size={30}
            color="black"
            onPress={this.onPressPlay}
          />

          {['paused', 'ready'].includes(this.state.playerState) ? (
            <TouchableOpacity onPress={this.onPressPlay}>
              <Icon name="play" size={30} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.onPressPause}>
              <Icon name="pause" size={30} color="black" />
            </TouchableOpacity>
          )}

          {/* <Icon name="stop" size={30} color="black"  onPress={this.onPressStop}/> */}
          <Icon
            name="forward"
            size={30}
            color="black"
            onPress={this.onPressStop}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default MusicPlayer;
