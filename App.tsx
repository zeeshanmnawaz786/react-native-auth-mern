import {View, Text} from 'react-native';
import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Welcome from './Components/Welcome';

const App = () => {
  return (
    <View className="flex flex-1 justify-center items-center bg-gray-300">
      {/* <Login /> */}
      {/* <Signup /> */}
      <Welcome/>
    </View>
  );
};

export default App;
