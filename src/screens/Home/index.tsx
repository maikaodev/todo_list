import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  FlatList,
  Platform,
  KeyboardAvoidingView,
  Linking,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Item } from '../../components';

import { styles } from './styles';

import { ListProps } from '../../@types/states';

export const Home = () => {
  const [title, setTitle] = useState('');
  const [todoList, setTodoList] = useState<ListProps[]>([]);
  const [finishedTaskList, setFinishedTaskList] = useState<ListProps[]>([]);

  const addItem = () => {
    const id = String(todoList.length + 1);

    if (!title) {
      alert('A tarefa precisa de uma descrição');
      return;
    }

    setTodoList([...todoList, { id, title }]);
    setTitle('');
  };

  const deleteTask = (title: string) => {
    const index = todoList.findIndex((object) => {
      return object.title === title;
    });

    let list = [...todoList];

    if (index > -1) {
      list.splice(index, 1);
    }
    setTodoList(list);
  };

  const completeTask = (title: string) => {
    const index = todoList.findIndex((object) => {
      return object.title === title;
    });

    const id = String(finishedTaskList.length + 1);

    setFinishedTaskList([...finishedTaskList, { id, title }]);

    let list = [...todoList];

    if (index > -1) {
      list.splice(index, 1);
    }
    setTodoList(list);
  };

  const returnTask = (title: string) => {
    const index = finishedTaskList.findIndex((item) => {
      return item.title === title;
    });

    const idx = String(todoList.length + 1);

    setTodoList([...todoList, { id: idx, title: title }]);

    let list = [...finishedTaskList];

    if (index > -1) {
      list.splice(index, 1);
    }
    setFinishedTaskList(list);
  };

  const handleLinkPress = () => {
    const url = 'https://www.linkedin.com/in/maikaodev/';

    Linking.openURL(url);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        <TextInput
          placeholder="Digite uma nova tarefa"
          style={styles.input}
          onChangeText={setTitle}
          value={title}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={addItem}
          activeOpacity={0.4}
        >
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Tarefas a fazer</Text>

      <FlatList
        style={styles.list}
        data={todoList}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        )}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />

      <Text style={styles.title}>Tarefas concluídas</Text>

      <FlatList
        style={styles.list}
        data={finishedTaskList}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            unfinishedTasks={false}
            returnTask={returnTask}
          />
        )}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <Text>Desenvolvido por</Text>
        <Text style={styles.tag} onPress={handleLinkPress}>
          {' '}
          @maikaodev
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};
