
import { View, Text } from "react-native";

import { styles } from "./styles";

type Props = {
  title: string,
  quantity: number,
  type: 'created'|'completed'
};

export function InfoTask({ title, quantity, type }: Props) {
  return (
    <View style={styles.InfoContent}>
      {
        type === 'created'
        ? <Text style={styles.textCreatedInfoStyle}> {title} </Text>
        : <Text style={styles.textDoneInfoStyle}> {title} </Text>
      }
      
      <View style={styles.numberInfo}>
          <Text style={styles.numberText}>{quantity}</Text>
      </View>
    </View>
  );
}