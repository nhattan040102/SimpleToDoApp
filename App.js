import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { borderBottomColor, borderLeftColor, textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useState } from 'react'
import GoalItems from './components/GoalItems';

export default function App() {
  // setCustomText(customTextProps);
  const [enteredGoal, setEnteredGoal] = useState('')
  const [listGoal, setListGoal] = useState([])

  let keyID = 0;

  const AddGoal = () => {
    setListGoal([...listGoal, enteredGoal]);
  }

  return (
    <SafeAreaView >
      <View style={styles.input_view}>
        <TextInput
          placeholder="Goal you want to add"
          style={styles.text_input}
          onChangeText={(text) => { setEnteredGoal(text) }}
          value={enteredGoal}
        />
        <Button title="(+) Add goal" onPress={AddGoal} />
      </View>
      <ScrollView style={styles.main_container}>
        <GoalItems title={listGoal} />
      </ScrollView>

    </SafeAreaView>
  );
}

let dv_width = Dimensions.get('window').width;
let dv_height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  input_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  text_input: {
    borderBottomColor: "blue",
    borderBottomWidth: 1,
    textAlign: 'center',
    height: 30,
    fontSize: 20,
    width: dv_width * 0.6,
  },

  ListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },

}
);
