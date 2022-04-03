import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Dimensions } from 'react-native'

let dv_width = Dimensions.get('window').width;

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    return (
        <View style={styles.input_view}>
            <TextInput
                placeholder="Goal you want to add"
                style={styles.text_input}
                onChangeText={setEnteredGoal}
                value={enteredGoal}
            />
            <Button title="(+) Add goal" onPress={() => props.AddGoal(enteredGoal)} />
        </View>
    );
};

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
});




export default GoalInput;