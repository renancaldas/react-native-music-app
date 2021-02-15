import React, { useContext, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { AppContext } from '../../contexts/AppContext';
import { WebView } from 'react-native-webview';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { Scroll, Avatar, Row, FlexColumn } from './styles';
import { FlexRow } from '../../../AppStyles';

import { linkTrackAndVideo, preloadMp3 } from '../../api';

export default function ModalLink() {
  const { openLinkModal, queryResults, selectedTrack, selectedAlbum, setOpenLinkModal, addTrackToPlaylist } = useContext(AppContext);
  const [selected, setSelected] = useState(null);

  const onPressTrack = (track) => {
    setSelected(track);
  }

  const onClickConfirm = () => {
    linkTrackAndVideo(selectedTrack.id, selected.videoId).then((linked) => {
      if (linked.spotifyId && linked.youtubeId) {
        setOpenLinkModal(false);
        preloadMp3(linked.youtubeId);
        addTrackToPlaylist({
          ...selectedTrack,
          album: selectedAlbum,
          youtubeId: linked.youtubeId
        });
      }
    });
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openLinkModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please link a youtube video to the track</Text>

            {
              selected ? (
                <>
                  <WebView 
                    source={{ 
                      uri: `https://m.youtube.com/watch?v=${selected.videoId}` }} 
                      style={{ width: 600, height: 400, marginBottom: 10 }} 
                    />
                  <FlexRow>
                    <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: 'red', marginRight: 50 }}
                      onPress={() => {
                        setSelected(null);
                      }}>
                      <MaterialCommunityIcons name="cancel" size={24} color="white" />
                    </TouchableHighlight>

                    <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: 'green' }}
                      onPress={() => {
                        onClickConfirm(onClickConfirm);
                      }}>
                      <AntDesign name="check" size={24} color="white" />
                    </TouchableHighlight>
                  </FlexRow>
                </>
              ) : (
                  <>
                    <Scroll>
                      {
                        queryResults && queryResults.map(track => {
                          return (
                            <Row key={track.videoId} onPress={() => onPressTrack(track)}>
                              <Avatar
                                source={{
                                  uri: track.image,
                                }} />
                              <FlexColumn>
                                <Text style={styles.modalText}>
                                  {track.title}
                                </Text>
                                <FlexRow>
                                  <Text style={styles.modalText}>
                                    {track.timestamp}
                                  </Text>
                                </FlexRow>
                              </FlexColumn>
                            </Row>
                          )
                        })
                      }
                    </Scroll>

                    <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                      onPress={() => {
                        setOpenLinkModal(!openLinkModal);
                      }}>
                      <Text style={styles.textStyle}>Cancel</Text>
                    </TouchableHighlight>
                  </>
                )
            }
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 25,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
  },
});