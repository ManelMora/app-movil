import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const HomeScreen = ({ navigation }: Props) => {
  const [username, setUserName] = useState('');

  return (
    <View>
      <Text>HomeScreen</Text>

      <TextInput
        placeholder="Enter your name"
        onChangeText={(text) => {
          setUserName(text);
        }}
      />

      <Button
        title="Join call"
        onPress={() => {
          navigation.navigate('VideoCallScreen', {
            username,
          });
        }}
      />
    </View>
  );
};

export default HomeScreen;
