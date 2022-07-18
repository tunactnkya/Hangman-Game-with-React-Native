import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import ManFigure from './ManFigure'
import WordBox from './WordBox'
import { WordsArray } from './data'
import InputBox from './InputBox'
import Keyboard from './Keyboard'
import StatusPopup from './StatusPopup'

const Hangman = () => {

  const [input, setInput] = useState('');
  const [correctLetters, setCorrectLetters] = useState('');
  const [wrongLetters, setWrongLetters] = useState('');
  const [status, setStatus] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);


  const correctWord = WordsArray[currentIndex].answer;

  const storeCorrectLetters = (keyInput) => {
    const ans = correctWord.toUpperCase();
    if (ans.includes(keyInput)) {
      const cl = correctLetters + keyInput;
      setCorrectLetters(cl);

      updateStatus(cl);
    } else {
      const wl = wrongLetters + keyInput;
      setWrongLetters(wl);
      if (wl.length > 5) {

        setStatus('lost')


        console.log('oopsss you lost')
      }
    }
  }

  const updateStatus = (cl) => {
    let status = 'win';
    const correctWordArray = Array.from(correctWord.toUpperCase());
    correctWordArray.forEach(letter => {
      if (!cl.includes(letter)) {
        status = '';
      }
    })

     if (  status === 'win'  &&  currentIndex === WordsArray.length -1 ) {
      setStatus('Completed')
      return
     }

    setStatus(status);
  }


  const handlePopupButton = () => {
    if (status === 'win') {
      setCurrentIndex(i => i + 1)
    }

    setCorrectLetters('');
    setWrongLetters('');
    setStatus('');
    if (status === 'completed'){
      setCurrentIndex(0)
    }
  }

  console.log(correctLetters, wrongLetters, 'status->', status)


  return (
    <View style={styles.container} >
      <Header />
      <View style={styles.row} >
        <ManFigure wrongWord={wrongLetters.length} />
        <WordBox wordData={WordsArray[currentIndex]} />
      </View>
      <InputBox correctLetters={correctLetters} answer={correctWord} />
      <Keyboard onPress={(input) => storeCorrectLetters(input)} />
      <StatusPopup status={status} onPress={handlePopupButton} />
    </View>
  )
}

export default Hangman;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})