import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { borderBottomColor, borderLeftColor, textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useState } from 'react'
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
  const [listGoal, setListGoal] = useState([]);

  let goalID = 0;
  const AddGoal = (goal) => {
    setListGoal(currentGoals =>
      [...currentGoals,
      { id: Math.random().toString(), value: goal }]);
    goalID = goalID + 1;
  };

  const RemoveGoal = (id) => {
    setListGoal(currentGoals => {
      return currentGoals.filter(goal => goal.id != id);
    })
  };

  return (
    <SafeAreaView >
      <GoalInput AddGoal={AddGoal} />
      <ScrollView style={styles.main_container}>
        <GoalItems
          title={listGoal}
          onDelete={RemoveGoal}
        />
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
