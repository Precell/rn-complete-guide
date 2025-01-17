import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([])
  
  const goalInputHandler = (enteredText)=>{
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = ()=>{
    console.log(enteredGoal);
    // setCourseGoals([...courseGoals, enteredGoal])    
    setCourseGoals(currentGoals =>[...currentGoals, enteredGoal])   
    setEnteredGoal('') 
  }
  
  return (
    <View style={{ padding: 30 }}>
      <View style={styles.screen }>
        <TextInput placeholder='Course Goal' value={enteredGoal} onChangeText={goalInputHandler} style={styles.inputContainer} />
        <Button title='ADD' onPress={addGoalHandler}/>
      </View>
      <ScrollView >
        {
          courseGoals.map((goal, i) => <View style={styles.listItem} key={i}><Text  >{goal}</Text></View>)
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flexDirection: 'row', width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputContainer:{ borderBottomColor: 'red',
    borderWidth: 1,
    padding: 10,
    width: 200
  },
  listItem:{
    padding:10,
    backgroundColor:'#ccc',
    borderColor:'black',
    marginVertical:10
  }

});

