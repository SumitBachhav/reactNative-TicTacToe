import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Snackbar from 'react-native-snackbar';
import Icons from './components/Icons';

function App(): React.JSX.Element {
  const [isCross, setIsCross] = useState<boolean>(false)
  const [gameWinner, setGameWinner] = useState<string>('')
  const [gameState, setGameState] = useState(new Array(9).fill('empty',0,9))

  const reloadGame = () => {
    setIsCross(false)
    setGameWinner('')
    setGameState(new Array(9).fill('empty',0,9))
  }

  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
  }

  const onChangeItem = (itemNumber: number) => {
    if(gameWinner){
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: '#000000',
        textColor: '#FFFFFF'
      })
    }

      if(gameState[itemNumber] === 'empty') {
        gameState[itemNumber] = isCross ? 'cross' : 'circle'
        setIsCross(!isCross)
      }else{
        return Snackbar.show({
          text: "position is already filled",
          backgroundColor: 'red',
          textColor: '#FFFFFF'
        })
      }
    checkIsWinner()
  }

  return (
    <SafeAreaView>
      <View>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
 
});

export default App;

/*
- install vector icons(follow instructions given ahead in document)
- create src folder and move app.tsx into it
- make -> src->components->icons.tsx

in icon.tsx
- import Icon from 'react-native-vector-icons/FontAwesome'
- it will create error to solve that run -> npm i @types/react-native-vector-icons
- logic

in app.tsx
- install snackbar
- imprort snackbar and icon component
- logic

*/