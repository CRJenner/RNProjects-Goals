import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
<View style={styles.inputContainer}>
  <TextInput placeholder='Your goals' style={styles.textInput}/>
  <Button title='Add Goal'/>
</View>
<View>
  <Text>List of goals...</Text>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor:'yellow'
  },
  textInput:{
    borderWidth: 1,
    borderColor:'red',
    width: '70%',
    marginRight: 0,
    padding: 8
  }
});
