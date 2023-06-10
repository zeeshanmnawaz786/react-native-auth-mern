import {View, Text} from 'react-native';
import React from 'react';

const Welcome = () => {
  return (
    <View className="items-center border border-gray-400 p-5 rounded-lg bg-white">
      <Text className="text-2xl">welcome to app...</Text>
      <View className="items-end mt-2">
        <Text className="bg-red-500 w-72 p-2.5 text-center mt-2 text-white font-bold py-3 px-4 rounded-xl">
          Login
        </Text>
      </View>
      <View className="items-end mt-2">
        <Text className="bg-red-500 w-72 p-2.5 text-center mt-2 text-white font-bold py-3 px-4 rounded-xl">
          Signup
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
