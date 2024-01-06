import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Text } from '@rneui/themed';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Text h4 style={styles.text}>
          Welcome to the Home Screen!
        </Text>
        <Button title='Logout' onPress={() => {}} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  text: {
    textAlign: 'center',
    marginBottom: 20
  }
});

export default HomeScreen;
