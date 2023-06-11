import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View className="flex flex-1 justify-center items-center border border-gray-400 p-5 rounded-lg bg-white">
      <Text className="text-2xl">Login</Text>
      <Text className="text-md">Sign in to continue</Text>

      <View className="mt-2">
        <Text className="text-red-800">Email</Text>
        <TextInput
          placeholder="Enter email..."
          className="bg-gray-50 border border-gray-300 mt-2 w-72 p-2.5 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </View>

      <View className="mt-2">
        <Text className="text-red-800">Password</Text>
        <TextInput
          placeholder="Enter Password..."
          className="bg-gray-50 border border-gray-300 mt-2 w-72 p-2.5 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </View>
      <View className="items-end mt-2">
        <Text className="text-red-800">Forgot Password?</Text>
        <Text className="bg-red-500 w-72 p-2.5 text-center mt-2 text-white font-bold py-3 px-4 rounded-xl">
          Button
        </Text>
      </View>
      <View className="mt-2">
        <Text>
          Don,t have an account?
          <Text className="text-red-800">Create a new account</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
