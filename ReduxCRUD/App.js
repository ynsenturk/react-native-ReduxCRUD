import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import AddForm from './src/components/AddForm';
import UserList from './src/components/UserList';
import store from './src/redux/store';

const App = () => {
  const RootApp = () => {
    return (
      <SafeAreaView>
        <View>
          <View style={styles.container}>
            <Text style={styles.title}>Redux CRUD</Text>
          </View>
          <AddForm />
          <ScrollView style={styles.scroll}>
            <UserList />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  };
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
  },
  scroll: {
    marginBottom: 650,
  },
});

export default App;
