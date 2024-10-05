// import React, { useState } from 'react';
// import { View, Text, TextInput, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import LoginPageLoginPageStyles from '../LoginPageStyles/LoginPageLoginPageStyles';
// import Userlogo from '../assets/svgs/user.svg'; 
// import PasswordLogo from '../assets/svgs/password.svg';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';
// import Geolocation from 'react-native-geolocation-service'; 

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [locationEnabled, setLocationEnabled] = useState(false);

//   const navigation = useNavigation(); // Initialize the navigation



//   const requestLocationPermission = () => {

//   }
  
//   const handleLogin = () => {
//     if (username === '' || password === '') {
//       Alert.alert('Error', 'Please enter both username and password');
//       return;
//     }
//     if (!locationEnabled) {
//       Alert.alert(
//         'Location required',
//         'Please enable your location to proceed with login',
//         [
//           {text: "OK", onPress: () => requestLocationPermission}  
//         ]
//       )
//     }
//     navigation.replace('Dashboard');
//   };

//   const handleForgotPassword = () => {
//     Alert.alert('Forgot Password', 'Please contact your team lead to get your username & password');
//   };

//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
//       <View style={LoginPageLoginPageStyles.container}>
//         <View style={LoginPageLoginPageStyles.topContainer}>
//           <Text style={LoginPageLoginPageStyles.title}>RecoverEase</Text>
//           <Image source={require('../assets/images/login.jpg')} style={LoginPageLoginPageStyles.image} />
//         </View>

//         <View style={LoginPageLoginPageStyles.bottomContainer}>
//           <Text style={LoginPageLoginPageStyles.header}>Login</Text>

//           <View style={LoginPageLoginPageStyles.inputContainer}>
//             <View style={LoginPageLoginPageStyles.inputWrapper}>
//               <Userlogo style={LoginPageLoginPageStyles.usernameIcon} />
//               <TextInput
//                 placeholder="UserID"
//                 placeholderTextColor={LoginPageLoginPageStyles.placeholderColor}
//                 value={username}
//                 onChangeText={setUsername}
//                 style={LoginPageLoginPageStyles.input}
//               />
//             </View>
//           </View>

//           <View style={LoginPageLoginPageStyles.inputContainer}>
//             <View style={LoginPageLoginPageStyles.inputWrapper}>
//               <PasswordLogo style={LoginPageLoginPageStyles.passwordIcon} />
//               <TextInput
//                 placeholder="Password"
//                 placeholderTextColor={LoginPageLoginPageStyles.placeholderColor}
//                 secureTextEntry={!passwordVisible}
//                 value={password}
//                 onChangeText={setPassword}
//                 style={LoginPageLoginPageStyles.input}
//               />
//               <TouchableOpacity
//                 onPress={() => setPasswordVisible(!passwordVisible)}
//                 style={LoginPageLoginPageStyles.passwordToggle}
//               >
//                 <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={25} color="#000" />
//               </TouchableOpacity>
//             </View>
//           </View>

//           <TouchableOpacity onPress={handleLogin} style={LoginPageLoginPageStyles.buttonContainer}>
//             <LinearGradient
//               colors={['#55D1A4', '#14C67B', 'rgba(76, 188, 66, 0.768627)']}
//               style={LoginPageLoginPageStyles.linearGradient}
//             >
//               <Text style={LoginPageLoginPageStyles.buttonText}>Login</Text>
//             </LinearGradient>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={handleForgotPassword} style={LoginPageLoginPageStyles.forgotPasswordContainer}>
//             <Text style={LoginPageLoginPageStyles.forgotPasswordText}>Forgot Password?</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default LoginPage;


import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Image, ScrollView, LoginPageStylesheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Userlogo from '../assets/svgs/user.svg'; 
import PasswordLogo from '../assets/svgs/password.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import LoginPageStyles from '../styles/LoginPageStyles';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);

  const navigation = useNavigation(); // Initialize the navigation

  // Create refs for the TextInput
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const requestLocationPermission = () => {
    // Add your location permission logic here
  }

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }
    if (!locationEnabled) {
      Alert.alert(
        'Location required',
        'Please enable your location to proceed with login',
        [
          {text: "OK", onPress: () => requestLocationPermission()}  
        ]
      )
    }
    navigation.replace('Dashboard');
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
                placeholderTextColor="#aaa"
                value={username}
                onChangeText={setUsername}
                style={LoginPageStyles.input}
                ref={usernameInputRef} // Attach ref
                onFocus={() => { usernameInputRef.current.focus(); }} // Focus on input
                
              />
            </View>
          </View>

          <View style={LoginPageStyles.inputContainer}>
            <View style={LoginPageStyles.inputWrapper}>
              <PasswordLogo style={LoginPageStyles.passwordIcon} />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#aaa"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
                style={LoginPageStyles.input}
                ref={passwordInputRef} // Attach ref
                onFocus={() => { passwordInputRef.current.focus(); }} // Focus on input
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