import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { React } from 'react';

let dv_width = Dimensions.get('window').width;
// let dv_height = Dimensions.get('window').height;

const GoalItems = props => {
    return (
        <View style={styles.ListContainer}>
            {props.title.map((goal) => {
                return (
                    <TouchableOpacity onPress={() => props.onDelete(goal.id)} key={goal.id} activeOpacity={0.65}>
                        <Text style={styles.goal}>
                            {goal.value}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>

    );
};

const styles = StyleSheet.create({
    ListContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    goal: {
        backgroundColor: '#61A4BC',
        marginBottom: 10,
        width: dv_width * 0.7,
        height: 30,
        borderColor: '#1A132F',
        borderWidth: 1,
        fontSize: 20,
        textAlign: 'center',
    }
});

export default GoalItems;