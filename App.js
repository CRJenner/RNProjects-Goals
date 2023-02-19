import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [myListOfGoals, setMyListOfGoals] = useState([])

  function goalInputHandler(enteredText) {
  setEnteredGoalText(enteredText)
}

function addGoalHandler() {
setMyListOfGoals(currentGoals => [
  ...currentGoals, 
  enteredGoalText])
}



  return (
    <View style={styles.appContainer}>
<View style={styles.inputContainer}>
  <TextInput 
  placeholder='Your goals' 
  style={styles.textInput} 
  onChangeText={goalInputHandler}/>
  <Button title='Add Goal'
  onPress={addGoalHandler}/>
</View>
<View style={styles.goalsContainer}>
<ScrollView alwaysBounceVertical={false}>
{myListOfGoals.map((goal) => (
<View style= {styles.goalItem} key={goal}>
  <Text style= {styles.goalText}>{goal}</Text>
</View>))}

</ScrollView>
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor:'green'
  },
  textInput:{
    borderWidth: 1,
    borderColor:'grey',
    width: '70%',
    marginRight: 0,
    padding: 8
  },
  goalsContainer:{
    flex: 4,
    paddingTop: 25
  },
  goalItem:{
margin:8,
padding: 8,
borderRadius:6,
backgroundColor: 'purple',
color: 'white'
  },
  goalText:{
    color: 'white'
  }
});
