import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button, Modal} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState ('');

  const goalInputHandler = enteredText => {
    setEnteredGoal (enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoalHandler (enteredGoal);
    setEnteredGoal ('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">

      <View style={styles.screen} on>
        <TextInput
          placeholder="Course Goal"
          value={enteredGoal}
          onChangeText={goalInputHandler}
          style={styles.inputContainer}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>

            <Button title="ADD" onPress={addGoalHandler} />
          </View>

          <View style={styles.button}>

            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
        </View>

      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create ({
  screen: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  inputContainer: {
    borderBottomColor: 'red',
    borderWidth: 1,
    padding: 10,
    width: 300,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    width: '40%',
  },
});
