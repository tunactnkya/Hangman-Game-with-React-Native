import { Modal, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import winImg from '../assets/winner.png'
import loseImg from '../assets/lose.png'

const StatusPopup = ({ status, onPress }) => {

    const src = status === 'win' || status === 'ccompleted' ? winImg : loseImg;
    const message = status === 'win' ? 'Congrats you won' : status === 'completed' ? 'Congratulations you completed the game ' : 'Oopsssss  you lost'
    const buttonText = status === 'win' ? 'Next Level' :  status === 'completed' ? 'Replay' : ' Again'


    return (
        <Modal visible={status !== ''} animationType='fade' transparent={true} >
            <View style={styles.modalContainer}>
                <View style={styles.popup}>
                    <Image source={src} style={styles.image} />
                    <Text style={styles.text} >{message} </Text>
                    <TouchableOpacity onPress={onPress} style={styles.button} >
                        <Text style={styles.buttonText} >{buttonText} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default StatusPopup

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    popup: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#53C1F4',
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        fontWeight: '700',
        color: 'white'
    },

    image: {
        width: 100,
        height: 100
    },
    button: {
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: 'orange'
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    }
})