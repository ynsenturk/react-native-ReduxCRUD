import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {addUser} from '../redux/userSlice';
import {useDispatch, useSelector} from 'react-redux';

const AddForm = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.users.value);
  console.log('length:', userList.length);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add User</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          dispatch(
            addUser({id: userList[userList.length - 1].id + 1, name, username}),
          );
          setName('');
          setUsername('');
        }}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#4D8EAF',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#4D8EAF',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    width: '90%',
    backgroundColor: 'white',
  },
  addButton: {
    backgroundColor: '#0C425D',
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    width: '90%',
  },
  addText: {
    color: 'white',
    fontWeight: '700',
  },
});

export default AddForm;
