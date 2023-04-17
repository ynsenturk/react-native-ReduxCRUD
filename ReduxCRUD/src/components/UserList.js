import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteUser, updateUsername} from '../redux/userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.users.value);
  const [newUsername, setNewUsername] = useState('');

  //renderItem function
  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemContent}>
          <View style={styles.itemInfo}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.username}>{item.username}</Text>
          </View>
          <View style={styles.itemDelete}>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => {
                dispatch(deleteUser({id: item.id}));
              }}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.settings}>
          <TextInput
            style={styles.updateInput}
            placeholder="New Username"
            onChangeText={setNewUsername}
            value={newUsername}
          />
          <TouchableOpacity
            style={styles.updateButton}
            onPress={() => {
              dispatch(updateUsername({id: item.id, username: newUsername}));
            }}>
            <Text style={styles.updateText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={userList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#BCD8E6',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
  },
  itemContent: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemInfo: {
    flexDirection: 'column',
    flex: 2,
    marginLeft: 10,
  },
  itemDelete: {
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    width: '80%',
  },
  deleteText: {
    color: 'white',
    fontWeight: '700',
  },
  name: {fontSize: 20, fontWeight: 'bold', marginBottom: 5, color: '#0D4E6E'},
  username: {fontsize: 16, fontWeight: 'normal', color: '#0D4E6E'},
  settings: {flexDirection: 'row'},
  updateInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    flex: 2,
    backgroundColor: 'white',
  },
  updateButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    flex: 1,
  },
  updateText: {
    color: 'white',
    fontWeight: '700',
  },
});

export default UserList;
