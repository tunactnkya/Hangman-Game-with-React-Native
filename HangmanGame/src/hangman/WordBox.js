import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useReducer, useState } from 'react'

const WordBox = ({ wordData }) => {

  const [clue, toggleClue] = useReducer(s => !s, false)
  const  startingLetter = wordData.answer[0];

  return (
    <View style={styles.container} >
      <Text>Opposite  word  of</Text>
      <Text style={styles.word} >{wordData.word}</Text>
      <View style={styles.clueContainer} >
        <TouchableOpacity onPress={toggleClue} >
          <Text>{'Clue'} </Text>
        </TouchableOpacity>
      </View>
      {clue && (
        <View>
          <Text>{`Starting letter is ${startingLetter} `} </Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7DBEE6',
    padding: 10,
    borderRadius: 10
  },
  word: {
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 8,
    textTransform:'capitalize'
  },

  clueContainer: {
    alignSelf: 'flex-end'
  }
})


export default WordBox;