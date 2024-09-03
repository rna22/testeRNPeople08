
import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import useLoginViewModel from '../viewmodels/LoginViewModel';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const GuestButton = ({ onPress }) => (
  <Pressable style={styles.googleBtn} onPress={onPress}>
    <Text>Try as Guest...</Text>
  </Pressable>
);

const LoginScreen = () => {
  const { loginModel, handleEmailChange, handlePasswordChange, handleLogin, handleGuestLogin } = useLoginViewModel();

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="dog" size={80} color='#FF8C00' />
      <Text style={styles.txt}> Teste RNPeople</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={loginModel.email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={loginModel.password}
        onChangeText={handlePasswordChange}
        secureTextEntry
        autoCapitalize="none"
      />
      <Pressable style={styles.btnLogin} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </Pressable>
      <GuestButton onPress={handleGuestLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      height: '100%',
    },
    input: {
      height: 40,
      width: "80%",
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10,
      margin: 10,
      borderRadius: 10,
      fontSize: 16,
    },
    btnLogin: {
      width: "80%",
      margin: 10,
      padding: 10,
      backgroundColor: '#FF8C00',
      borderRadius: "10px",
      alignItems: "center",
    },
    txt: {
        width: 200,
        fontSize: "20px",
        fontWeight: "bold",
        padding: 16,
        color: '#FF8C00',
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '80%',
    },
    subTextButton: {
        color: '#FF8C00',
    },
    subButton:{
        padding: 10,
    },
    googleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: "80%",
        height: 40,
        margin: 10,
        borderRadius: 10,
        fontSize: 16,
        backgroundColor: '#F2F2F2',
    },
    googleBtn:{
        color: "white",
        paddingLeft: 5,
    }

  });
  
  export default LoginScreen;