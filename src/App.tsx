import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App(): React.JSX.Element {

  return (
    <View>
      <Text>hello</Text>
    </View>
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


*/