import React, { Component } from 'react'
import Sound from 'react-native-sound';


const useSound = () => {

    const playSound = (soundFile: string) => {
        Sound.setCategory('Playback');

        // Load the sound file
        const sound = new Sound(soundFile, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('Failed to load the sound', error);
                return;
            }

            // Play the sound
            setTimeout(() => {
                sound.play((success) => {
                    if (success) {
                        // console.log('Successfully finished playing');
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


    return {playSound};
}

export default useSound;