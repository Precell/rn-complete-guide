import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App () {
  const [courseGoals, setCourseGoals] = useState ([]);
  const [isAddMode, setIsAddMode] = useState (false);

  const addGoalHandler = enteredGoal => {
    // setCourseGoals([...courseGoals, enteredGoal])
    setCourseGoals (currentGoals => [
      ...currentGoals,
      {key: Math.random ().toString (), value: enteredGoal},
    ]);
    setIsAddMode(false)
    
  };

  const removeGoalandler = goalId => {
    setCourseGoals (currentGoals => {
      return currentGoals.filter (goal => goal.key !== goalId);
    });
  };

  const cancelGoalAddHandler = () =>{
    setIsAddMode(false)
  }

  return (
    <View style={{padding: 30}}>
      <Button
        title="Add New Goal"
        onPress={() => {
          setIsAddMode (true);
        }}
      />
      <GoalInput visible={isAddMode} onCancel={cancelGoalAddHandler} onAddGoalHandler={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => {
          item.key;
        }}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.key}
            onDelete={removeGoalandler}
            title={itemData.item.value}
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create ({});
