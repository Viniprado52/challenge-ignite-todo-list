import { TouchableOpacity, View, Text, Image } from 'react-native';
import { styles } from './styles';

import DeleteSource from '../../../assets/trash.png';
import DoneSource from '../../../assets/Vector.png';
import { Task } from '../../shared/models/Task';

type Props = {
  task: Task,
  toogleDone: () => void,
  deleteTask: () => void
}

export function TaskItem({ task, toogleDone, deleteTask }: Props) {

  return (
    <View style={styles.content}>
      {
        task.done 
        ? <TouchableOpacity onPress={toogleDone} style={styles.doneButtonOk}>
            <Image 
              source={DoneSource}
              style={styles.doneButtonIcon}
            />
          </TouchableOpacity> 
        : <TouchableOpacity onPress={toogleDone} style={styles.doneButtonNOk}></TouchableOpacity>
      }

      {
        task.done
        ? <Text style={styles.textTaskDone}> {task.description} </Text>
        : <Text style={styles.textTask}> {task.description} </Text>
      }
      
      <TouchableOpacity onPress={deleteTask} style={styles.deleteButton}>
        <Image 
          source={DeleteSource}
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );
}