import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  [myListOfGoals, setMyListOfGoals] = useState([])

 
    
    function addGoalHandler(enteredGoalText) {
    setMyListOfGoals((currentGoals) => [
      ...currentGoals, 
      {text:enteredGoalText, key: Math.random().toString()}
      ])
    }
  

  return (
    <View style={styles.appContainer}>
<GoalInput onAddGoal={addGoalHandler} setMyListOfGoals={setMyListOfGoals}/>
<View style={styles.goalsContainer}>
<FlatList data= {myListOfGoals} renderItem={(itemData) => {
  return <GoalItem text={itemData.item.text}/>
}}
alwaysBounceVertical={false}/>
    </View>
    </View>
  );
}
//xcode for ios

const styles = StyleSheet.create({
  appContainer: {
    flex:10,
    paddingTop: 50,
    paddingHorizontal: 16
  },

  goalsContainer:{
    flex: 4,
    paddingTop: 25
  },
  
});
