


import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginPageStyles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    width: width * 0.9,
    height: 50,
    fontFamily: 'Mansalva',
    fontStyle: 'italic',
    letterSpacing: 3,
    color: '#000000',
    textAlign: 'center',
    marginLeft: 15,
  },
  image: {
    width: width * 0.7,
    height: height * 0.35,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: width * 0.06,
    lineHeight: 30,
    textAlign: 'center',
    letterSpacing: 3,
    color: '#000000',
    marginBottom: 32,
  },
  input: {
    flex : 1,
    color: 'black',   /// I add this because TextInput components are only responding to input and pulling up the keyboard when you click on the placeholder.
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: width * 0.8,
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#FFFCFC',
    borderRadius: 10,
    color: 'black',
  },
  usernameIcon: {
    marginRight: 15,
  },
  passwordIcon: {
    marginRight: 15,
  },
  passwordToggle: {
    position: 'absolute',
    right: 10,  // Adjust the position from the right
    height: '100%',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 16,
    position: 'relative', // Ensure the passwordToggle is positioned relative to the container
  },
  absoluteContainer: {
    position: 'absolute',
    width: width * 0.9,
    height: height * 0.5,
    backgroundColor: '#F6F6F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 42,
    padding: 16,
    alignItems: 'center',
  },
  buttonContainer: {
    width: width * 0.8,
    height: 49,
    marginTop: 0,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 16,
    color: 'black',
    textDecorationLine: 'underline',
  },
  placeholderColor: 'gray',
});

export default LoginPageStyles;
