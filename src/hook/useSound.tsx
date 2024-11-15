import React, {Component} from 'react';
import Sound from 'react-native-sound';

const useSound = () => {
  const playSound = (soundFile: string, onFinish?: () => void) => {
    Sound.setCategory('Playback');

    // Load the sound file
    const sound = new Sound(soundFile, Sound.MAIN_BUNDLE, error => {
      if (error) {
        return;
      }

      // Play the sound
      setTimeout(() => {
        sound.play(success => {
          if (success) {
            if (onFinish) {
              onFinish();
            }
          } else {
            // console.log('Playback failed due to audio decoding errors');
          }
        });
      }, 100);
    });

    // Cleanup function to release the sound object
    return () => {
      sound.release();
    };
  };

  const onTimeLessThan2 = () => {
    playSound('two_minutes_remaining.mp3');
  };

  return {playSound, onTimeLessThan2};
};

export default useSound;
