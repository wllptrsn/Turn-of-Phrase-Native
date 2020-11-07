import React from 'react';
import { View,ToastAndroid, StyleSheet } from 'react-native';
import PlaySound from 'react-native-sound';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function PlaySound() {

    function onPressButtonPlay() {
    song = new ('./assets/African Safari Loop.wav', SoundPlayer.MAIN_BUNDLE, (error) => {
      if(error) {
        ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT)
    }
      else {
        song.play((success) => {
          if(!success){
            ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
        }
        });
      }
    });
}
  

function onPressButtonMute() {
    if(song != null) {
      if(this.state.pause) // play resume
        song.play((success) => {
          if(!success)
            ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
        });
      else {song.pause();}

      this.setState({pause: !this.state.pause});
    }
  }

  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPressButtonPlay.bind(this)}>
        <Ionicons name={iconName} size={size} color={color} />
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onPressButtonPause.bind(this)}>
          //<Ionicons name={iconName} size={size} color={color}>{this.state.pause ? 'Resume' : 'Pause'}</Ionicons>
        </TouchableOpacity>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonText: {
    fontSize: 30,
  },
});

 export default PlaySound;