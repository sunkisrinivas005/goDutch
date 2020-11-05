import AsyncStorage from '@react-native-community/async-storage';

export const _storeData = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return error;
  }
};

export const _getData = async (key) => {
  try {
    let value = await AsyncStorage.getItem(key);
    if (value !== null) return JSON.parse(value);
  } catch (error) {
    return error;
  }
};
export async function removeAll(keys) {
  try {
    const value = await AsyncStorage.multiRemove(keys);
    if (value !== null) return JSON.parse(value);
  } catch (error) {
    return null;
  }
}
