import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLocalStorage = async ({ key, value }) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error setting data to AsyncStorage:', error);
  }
};

export const getLocalStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);

    return value;
  } catch (error) {
    console.error('Error getting data from AsyncStorage:', error);
    return null;
  }
};

export const removeLocalStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data from AsyncStorage:', error);
  }
};
