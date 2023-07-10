import { Text, TouchableOpacity, View } from 'react-native';

import { ItemProps } from '../../@types/components';

import { AntDesign, Feather, Fontisto } from '@expo/vector-icons';
import { styles } from './styles';

export const Item = ({
  title,
  unfinishedTasks = true,
  completeTask,
  deleteTask,
  returnTask,
}: ItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>

      {unfinishedTasks && (
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => completeTask(title)}
          >
            <Feather name="check" size={24} color="green" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => deleteTask(title)}
          >
            <AntDesign name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>
      )}
      {!unfinishedTasks && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => returnTask(title)}
        >
          <Fontisto name="undo" size={24} color="blue" />
        </TouchableOpacity>
      )}
    </View>
  );
};
