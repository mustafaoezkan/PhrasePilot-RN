import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Text } from '@rneui/themed';
import useGetWords from '../../hooks/useWord';

const HomeScreen = () => {
  const { wordList, fetchWords, loading, status, message, error } = useGetWords();

  useEffect(() => {
    fetchWords(1);
  }, []);

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
