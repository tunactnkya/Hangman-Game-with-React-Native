import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Key = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress(text)} style={styles.keyContainer} >
            <Text style={styles.key} >{text} </Text>
        </TouchableOpacity>
    )
}




const Keyboard = ({onPress}) => {
    const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return (
        <View style={styles.container} >
            {keys.split('').map((_, index) => (
                <Key key={index} text={_} onPress={onPress} />
            ))}
        </View>
    )
}

export default Keyboard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 20,
        flexWrap: 'wrap'
    },
    keyContainer: {
        width: 30,
        height: 38,
        backgroundColor: '#5B6E78',
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    key: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600'
    }

})