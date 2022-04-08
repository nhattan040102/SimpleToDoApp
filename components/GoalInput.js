import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Dimensions, Modal } from 'react-native'

let dv_width = Dimensions.get('window').width;

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    return (
        <Modal
        onDismiss={clearText}
        animationType={'slide'}
        transparent={false}
        visible={props.modalState}>
            <View style={styles.input_view}>
                <TextInput
                    placeholder="Goal you want to add"
                    style={styles.text_input}
                    onChangeText={setEnteredGoal}
                    value={enteredGoal}
                />
                <Button title="(+) Add goal" onPress={() => props.AddGoal(enteredGoal)} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    input_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        width: 250
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