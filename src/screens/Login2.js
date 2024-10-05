import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginPageStyles from '../styles/LoginPageStyles';
import Userlogo from '../assets/svgs/user.svg'; 
import PasswordLogo from '../assets/svgs/password.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigation = useNavigation(); // Initialize the navigation

  const handleLogin = async () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', data.message);
        navigation.replace('Dashboard');
      } else {
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Please contact your team lead to get your username & password');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
      <View style={LoginPageStyles.container}>
        <View style={LoginPageStyles.topContainer}>
          <Text style={LoginPageStyles.title}>RecoverEase</Text>
          <Image source={require('../assets/images/login.jpg')} style={LoginPageStyles.image} />
        </View>

        <View style={LoginPageStyles.bottomContainer}>
          <Text style={LoginPageStyles.header}>Login</Text>

          <View style={LoginPageStyles.inputContainer}>
            <View style={LoginPageStyles.inputWrapper}>
              <Userlogo style={LoginPageStyles.usernameIcon} />
              <TextInput
                placeholder="UserID"
                placeholderTextColor={LoginPageStyles.placeholderColor}
                value={username}
                onChangeText={setUsername}
                style={LoginPageStyles.input}
              />
            </View>
          </View>

          <View style={LoginPageStyles.inputContainer}>
            <View style={LoginPageStyles.inputWrapper}>
              <PasswordLogo style={LoginPageStyles.passwordIcon} />
              <TextInput
                placeholder="Password"
                placeholderTextColor={LoginPageStyles.placeholderColor}
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
                style={LoginPageStyles.input}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={LoginPageStyles.passwordToggle}
              >
                <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={25} color="#000" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={handleLogin} style={LoginPageStyles.buttonContainer}>
            <LinearGradient
              colors={['#55D1A4', '#14C67B', 'rgba(76, 188, 66, 0.768627)']}
              style={LoginPageStyles.linearGradient}
            >
              <Text style={LoginPageStyles.buttonText}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleForgotPassword} style={LoginPageStyles.forgotPasswordContainer}>
            <Text style={LoginPageStyles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginPage;
