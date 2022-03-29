import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const AddTasks = () => {
    if (task === null) {
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
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.WriteTask}>
        <TextInput style={styles.Input} placeholder={'Escreva uma tarefa'} value={task} onChangeText={text => setTask(text)}></TextInput>

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
    backgroundColor: '#E3E3E3',
  },
  TasksContainer: {
    paddingTop: 45,
    paddingHorizontal: 20
  },
  Title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  Items: {
    marginTop: 30,
  },
  WriteTask: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 40,
    borderWidth: 1,
    width: 260,

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
  AddTask: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,

    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.50,

    elevation: 6,
  },
  AddTaskText: {
    fontSize: 24,
    color: '#8C8C8C',
  },
});
