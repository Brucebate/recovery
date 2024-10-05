import { StyleSheet } from 'react-native';
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
    alignItems:'center',

  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    width: 218,
    height: 50,
    fontFamily: 'Mansalva', // Ensure this font is properly linked in your project
    fontStyle: 'italic',
    letterSpacing: 3,
    color: '#000000',
    textAlign: 'center',
    // marginTop: 20,
  
    
  },
  
  image: {
    width: width * 0.8,  // 80% of screen width
    height: height * 0.35, // 35% of screen height
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  header: {
    fontFamily: 'Poppins', // Ensure the font is loaded
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: width * 0.06, // Adjust font size based on width
    lineHeight: 30,
    textAlign: 'center',
    letterSpacing: 6,
    color: '#000000',
    marginBottom: 32, // Adjust if needed
  },
  username:{
    marginTop: 5,
    marginBottom: 2,
    // Adjust the height as needed
  

  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: width * 0.8, // Adjust width based on screen size
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#FFFCFC',
    borderRadius: 10,
    color: 'black',
    alignItems:'center'
    
  
  },
  
//   input: {
//     height: 63,
//     width:339,
//     borderColor: '#000000',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//     backgroundColor: '#FFFCFC',
//     borderRadius: 10,
//     color: 'black',
//     alignItems:'center'

//   },
  inputContainer: {
    marginBottom: 16,
  },
 
  absoluteContainer: {
    position: 'absolute',
    width: width * 0.9, // Adjust width to 90% of screen
    height: height * 0.5, // 50% of screen height
    backgroundColor: '#F6F6F6',
    // backgroundColor: 'blue',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 42,
    padding: 16,
    alignItems: 'center',
  },
  buttonContainer: {
    width: width * 0.8, // Adjust width to 80% of screen
    height: 49,
    
    marginLeft: -333 / 2 + 0.5,
    // top: '50%',
    marginTop: -49 / 2 + 292.5,
    
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 49,
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#0000FF', // Change this color as needed
    textDecorationLine: 'underline',
  },


  placeholderColor: 'gray', 
});

export default LoginPageStyles;