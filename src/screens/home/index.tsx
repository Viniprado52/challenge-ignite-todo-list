import React, { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, Alert, FlatList, ScrollView } from "react-native";
import { styles } from './styles';
import { Empty } from "../../components/Empty";
import { TaskItem } from "../../components/TaskItem";
import { InfoTask } from "../../components/InfoTask";
import { Task } from "../../shared/models/Task";
import LogoSource from '../../../assets/Logo.png';
import PlusSource from '../../../assets/plus.png';

export default function App() {
  const [task, setTask] = useState<string>('');
  const [taskList, setTaskList] = useState<Array<Task>>([]);

  function handleAddTask(): void {
    const newTask: Task = {
      description: task,
      done: false
    };

    if (newTask.description === '') {
      return Alert.alert('Não é possível adicionar tarefas vazias', 'Por favor, informe a descrição da tarefa!');
    }

    if (taskList.find(item => item.description === newTask.description)) {
      return Alert.alert('Tarefa já existente', 'Não é possível incluir tarefas já existentes!');
    }

    setTaskList((currentContentTaskList) => [newTask, ...currentContentTaskList]);
    setTask('');
  }

  function handleToogleDoneTask(taskToogle: Task): void {
    let updatedList: Array<Task> = [];

    updatedList = taskList.map((item) => {
      if (item.description == taskToogle.description) {
        item.done = !item.done;
        return item;
      }
      return item;
    });
    setTaskList((_) => updatedList);
  }

  function handleDeleteTask(taskDelete: Task): void {
    let updatedList: Array<Task> = [];
    updatedList = taskList.filter(item => 
      item.description !== taskDelete.description
    );

    Alert.alert("Excluir Tarefa", "Deseja realmente exluir a tarefa?", [
      {
        text: 'Sim',
        onPress: () => {
          setTaskList((_) => updatedList);
        }
      },
      {
        text: 'Não',
        onPress: () => {}
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        bounces={false}
      >
        <View style={styles.outlinedView}> 
          <View style={styles.logoContent}>
            <Image
              source={LogoSource}
              style={styles.logoTodo}
            />
          </View>

          <View style={styles.inputTaskGroup}>
            <TextInput
              keyboardType="ascii-capable"
              placeholder="Adicione uma nova tarefa"
              value={task}
              onChangeText={setTask}
              placeholderTextColor="#787878"
              style={styles.inputTask}
              onSubmitEditing={handleAddTask}
            />
            <TouchableOpacity 
              onPress={handleAddTask}
              style={styles.addTaskButton}>
              <Image
                source={PlusSource}
                style={styles.plusIconButton}
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.inputContent}>
            <View style={styles.infoTaskGroup}>
              <InfoTask
                title="Criadas"
                quantity={taskList.length}
                type="created"
              />

              <InfoTask
                title="Concluidas"
                quantity={taskList.filter(item => item.done).length}
                type="completed"
              />
            </View>
          </View>
        </View>
        
      </ScrollView>
      
      <View style={styles.taskListContent}>
        {
          taskList.length > 0
          ? 
            <FlatList
              style={styles.list}
              data={taskList}
              keyExtractor={item => item.description}
              renderItem={({ item }) => (
                <TaskItem
                  toogleDone={() => handleToogleDoneTask(item)}
                  deleteTask={() => handleDeleteTask(item)}
                  task={item} 
                />
              )}
            />
          : <Empty />
        }
      </View>
    </View>
  );
}