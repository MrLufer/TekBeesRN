import React, {useState} from 'react';
import {View, Button, TextInput} from 'react-native';
import {useAuth} from '../context/AuthContext';

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const {user, signIn, signOut} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      navigation.navigate('Detail');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <View>
      {user ? (
        <>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Detail')}
          />
          <Button title="Sign Out" onPress={() => signOut()} />
        </>
      ) : (
        <>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button title="Sign In" onPress={() => handleSignIn()} />
        </>
      )}
    </View>
  );
};

export default HomeScreen;
