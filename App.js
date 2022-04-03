import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { borderBottomColor, borderLeftColor, textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useState } from 'react'
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
  // setCustomText(customTextProps);
  const [listGoal, setListGoal] = useState([])

  const AddGoal = (goal) => {
    setListGoal([...listGoal, goal]);
  }

  return (
    <SafeAreaView >
      <GoalInput AddGoal={AddGoal} />
      <ScrollView style={styles.main_container}>
        <GoalItems title={listGoal} />
      </ScrollView>

    </SafeAreaView>
  );
}

let dv_width = Dimensions.get('window').width;
let dv_height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  main_container: {

  },
}
);
