import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { borderBottomColor, borderLeftColor, textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useState } from 'react'
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
  const [listGoal, setListGoal] = useState([]);

  const createGoalID = () => {
    let current = new Date();
    return current.getTime().toString();
  }

  const AddGoal = (goal) => {
    var goalID = createGoalID();
    setListGoal(listGoal =>
      [...listGoal,
      { id: goalID, value: goal }]);

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
