import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { borderBottomColor, borderLeftColor, textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useState } from 'react'
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
  const [listGoal, setListGoal] = useState([]);
  const [modalState, setmodalState] = useState(false);

  const createGoalID = () => {
    let current = new Date();
    return current.getTime().toString();
  }

  const AddGoal = (goal) => {
    var goalID = createGoalID();
    setListGoal(listGoal =>
      [...listGoal,
      { id: goalID, value: goal }]);
    setmodalState(false);
  };

  const RemoveGoal = (id) => {
    setListGoal(currentGoals => {
      return currentGoals.filter(goal => goal.id != id);
    })
  };

  const openModal = () => {
    setmodalState(true);
  }

  return (
    <SafeAreaView >
      <Button title="(+) Add goal" onPress={openModal} />
      <GoalInput AddGoal={AddGoal} modalState={modalState} />
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
