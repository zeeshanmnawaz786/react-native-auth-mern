import {View, Text} from 'react-native';

const Welcome = ({navigation}: any) => {
  return (
    <View className="flex flex-1 justify-center items-center border border-gray-400 p-5 rounded-lg bg-white">
      <Text className="text-2xl">welcome to app...</Text>
      <View className="items-end mt-2">
        <Text
          onPress={() => navigation.navigate('login')}
          className="bg-red-500 w-72 p-2.5 text-center mt-2 text-white font-bold py-3 px-4 rounded-xl">
          Login
        </Text>
      </View>
      <View className="items-end mt-2">
        <Text
          onPress={() => navigation.navigate('signup')}
          className="bg-red-500 w-72 p-2.5 text-center mt-2 text-white font-bold py-3 px-4 rounded-xl">
          Signup
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
