import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const AddTasks = () => {
    if (task == null || task == "") {
      return
    }
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.Container}>

      <View style={styles.TasksContainer}>
        <Text style={styles.Title}>Tarefas de hoje</Text>


        <View style={styles.Items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => completeTask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView style={styles.WriteTask}> {/* behavior={Platform.OS === 'ios' ? 'padding' : 'height'} */}
        <TextInput style={styles.Input} placeholder={'Insira sua tarefa. . .'} value={task} onChangeText={text => setTask(text)}></TextInput>

        <TouchableOpacity onPress={() => AddTasks()}>
          <View style={styles.AddTask}>
            <Text style={styles.AddTaskText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    color: '#FFFFFF',
    backgroundColor: '#121212',
  },
  TasksContainer: {
    paddingTop: 45,
    paddingHorizontal: 20
  },
  Title: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  Items: {
    marginTop: 30,
  },

  //input Text
  WriteTask: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#0d0d0d',
    color: '#e8e8e8',
    borderRadius: 10,
    width: '100%',
    marginStart: 30,
    marginEnd: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.50,

    elevation: 6,
    zIndex: 1,
  },

  //AddTasks
  AddTask: {
    width: 50,
    height: 50,
    backgroundColor: '#4b0082',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 1.50,

    elevation: 6,
  },
  AddTaskText: {
    fontSize: 45,
    color: '#8C8C8C',
    marginTop: -10,
  },
});
