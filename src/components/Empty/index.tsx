import { View, Image, Text } from "react-native";
import { styles } from './styles';
import ClipSource from '../../../assets/Clipboard.png';

export function Empty() {

  return (
    <View style={styles.emptyContent}>
      <View style={styles.lineEmpty}></View>
      <Image
          source={ClipSource}
          style={styles.clipBoradImage}
      />
      
      <Text style={styles.emptyTaskTextBold}> 
        Você ainda não tem tarefas cadastradas
      </Text>

      <Text style={styles.emptyTaskText}> 
        Crie tarefas e organize seus itens a fazer 
      </Text>
    </View>
  );
}