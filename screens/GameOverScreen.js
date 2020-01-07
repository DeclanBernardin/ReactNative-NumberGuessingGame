import React from 'react'; 
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors'; 


const GameOverScreen = props => {
    return (
        <View style={ styles.screen }>
            <TitleText>The Game Is Over!</TitleText>
            <View style= {styles.imageContainer}>
            <Image source={require('../assets/thumbnail.png')} style={styles.image} />
            </View>
            <BodyText>Your phone guessed <Text style={styles.highlight}> {props.userNumber} </Text> in <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds. </BodyText>
            <Button title="New Game" onPress={props.onRestart}/>
        </View>
    );
}; 

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30,
    },
    highlight: {
        color: Colors.primary
    }
}); 

export default GameOverScreen; 

