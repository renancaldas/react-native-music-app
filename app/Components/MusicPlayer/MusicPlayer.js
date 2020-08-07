import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {logTitle} from '../../constants/logFormat';

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
    ready: false,
  };

  componentDidMount() {
    console.log(
      `%c` + `componentDidMount()` + '%c' + ' Called',
      logTitle,
      null,
    );
    // Adds an event handler for the playback-track-changed event
    this.onTrackChange = TrackPlayer.addEventListener(
      'playback-track-changed',
      async (data) => {
        const track = await TrackPlayer.getTrack(data.nextTrack);
        this.setState({trackTitle: track.title});
      },
    );

    setTimeout(() => {
      this.initPlayer();
    }, 1000);
  }

  componentWillUnmount() {
    console.log(`%c` + `componentWillUnmount()`, logTitle);

    // Removes the event handler
    this.onTrackChange.remove();
    this.setState({ready: false});

    // Log spacing
    console.log('');
  }

  componentDidUpdate(provProps, prevState) {
    const prevStateLog = `\nPrevious State: ${JSON.stringify(prevState)}`;
    const currStateLog = `\nCurrent State: ${JSON.stringify(this.state)}`;
    console.log(
      `%c` + `componentDidUpdate()` + '%c ' + `${prevStateLog} ${currStateLog}`,
      logTitle,
      null,
    );

    const isPlayerReady = !prevState.ready && this.state.ready;
    if (isPlayerReady) {
      console.log(
        `%c` + `componentDidUpdate()` + '%c ' + `isPlayerReady`,
        logTitle,
        null,
      );

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
    console.log(`%c` + `initPlayer()` + '%c ' + 'Called', logTitle, null);
    const self = this;

    TrackPlayer.setupPlayer().then(() => {
      console.log(
        `%c` + `initPlayer()` + '%c ' + 'Player initialized!',
        logTitle,
        null,
      );
      this.setState({ready: true});
    });
  }

  addTrack(track) {
    console.log(`%c` + `addTrack()` + '%c ' + 'Called', logTitle, null);

    TrackPlayer.add([track]).then(async () => {
      console.log(`%c` + `addTrack()` + '%c ' + `Track added: ${JSON.stringify(track)}`, logTitle, null);
      TrackPlayer.play();
    });
  }

  render() {
    return (
      <View>
        <Text>{this.state.trackTitle}</Text>
        <ProgressBar />
      </View>
    );
  }
}

export default MusicPlayer;
