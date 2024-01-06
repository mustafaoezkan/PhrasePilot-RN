import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Card, Text } from '@rneui/themed';
import useLogin from '../../hooks/useLogin';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, status, error } = useLogin();
  const navigation = useNavigation();

  const handleLogin = async () => {
    await login(email, password);

    // Check if the login was successful
    if (status === 200) {
      navigation.navigate('Home'); // Navigate to the Home screen
    }
  };

  return (
    <View style={styles.container}>
      <Card>
        <Input
          label='Email'
          placeholder='Enter your email'
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Input
          label='Password'
          placeholder='Enter your password'
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Button title={loading ? 'Loading...' : 'Login'} onPress={handleLogin} />
        {error && (
          <Text style={styles.errorText} h5>
            {error}
          </Text>
        )}
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
  errorText: {
    color: 'red'
  }
});

export default LoginScreen;
