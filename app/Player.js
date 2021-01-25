import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import AlbumCover from '../assets/album-cover.jpg';
import Slider from '@react-native-community/slider';

const Player = () => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['rgba(190,110,110,1)', 'rgba(46,43,79,1)']}
                style={{
                    flex: 1,
                    paddingTop: 50,
                    alignItems: 'stretch',
                    justifyContent: 'center'
                }}
            >
                {/* Header */}
                <View style={{
                    flex: 1, 
                    flexDirection: 'row', 
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{ color: 'white', fontSize: 28 }}> Now Playing </Text>
                </View>

                {/* Content */}
                <View style={{
                    flex: 8,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    padding: 50,
                }}>
                    <Image
                        style={{ 
                            height: 300, 
                            width: 300, 
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.41,
                            shadowRadius: 9.11,
                        }}
                        source={AlbumCover}
                    />

                    <Text style={{ color: 'white', fontSize: 28 }}> Bridge Burning </Text>
                    <Text style={{ color: 'lightgrey', fontSize: 16 }}> Wasting Light - Foo Fighters </Text>

                    <Slider
                        style={{width: 350, height: 40}}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    
                    <View style={{
                        flexDirection: 'row', 
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: 300,
                    }}>
                        <Ionicons name="md-play-skip-back" size={40} style={{ color: 'white' }}/>
                        <Ionicons name="md-play" size={70} style={{ color: 'white' }}/>
                        <Ionicons name="md-play-skip-forward" size={40} style={{ color: 'white' }}/>

                    </View>
                </View>

                {/* Footer */}
                <View style={{
                    flex: 1, 
                    flexDirection: 'row', 
                    justifyContent: 'space-around',
                }}>
                    <Ionicons name="home" size={32} style={{ color: 'grey' }}/>
                    <Ionicons name="search" size={32} style={{ color: 'grey' }}/>
                    <Ionicons name="list" size={32} style={{ color: 'grey' }}/>
                    <Ionicons name="md-play-circle-outline" size={32} style={{ color: 'white' }}/>
                </View>
            </LinearGradient>
        </View>
    );
}

export default Player;
