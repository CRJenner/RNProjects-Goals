import {StyleSheet, View, TextInput, Button} from 'react-native'
import {useState} from 'react'

function GoalInput(props){
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }
function addGoalHandler(){
  props.onAddGoal(enteredGoalText)
  setEnteredGoalText('')
}
    return (
        <View style={styles.inputContainer}>
            <TextInput 
             placeholder='Your goals' 
             style={styles.textInput} 
             onChangeText={goalInputHandler}
             value={enteredGoalText}
             />
             <Button title='Add Goal'
             onPress={addGoalHandler}/>
        </View>
        )
}

export default GoalInput

const styles = StyleSheet.create({
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
});