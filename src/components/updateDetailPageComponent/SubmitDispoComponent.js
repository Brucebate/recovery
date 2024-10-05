


// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';

// // Get the screen width and height for responsive design
// const { width, height } = Dimensions.get('window');

// const SubmitDispoComponent = () => {
//   const navigation = useNavigation();

//   const handleSubmit = () => {
//     console.log("succesfully navigated to checkout page")
//     navigation.navigate('CheckOutPage');
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={handleSubmit} style={styles.buttonWrapper}>
//         <LinearGradient
//           colors={['#55D1A4', '#14C67B', '#4CBC42']} // Gradient colors
//           style={styles.submitButton}
//         >
//           <Text style={styles.buttonText}>Submit Disposition</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute', // Keep it fixed at the bottom
//     bottom: 0, // Align it to the bottom of the screen
//     left: 0,
//     right: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10, // Add some padding if needed
//     backgroundColor: '#FFFFFF', // Add a background color to make it stand out
  
//   },
//   buttonWrapper: {
//     width: width * 0.9, // Responsive width (90% of screen width)
//     height: height * 0.06, // Responsive height (6% of screen height)
//     borderRadius: width * 0.02, // Responsive border-radius (2% of screen width)
//   },
//   submitButton: {
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: width * 0.02, // Keep button border-radius consistent
//   },
//   buttonText: {
//     color: 'black',
//     fontSize: width * 0.045, // Font size adjusted based on screen width
//   },
// });

// export default SubmitDispoComponent;




import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

// Get the screen width and height for responsive design
const { width, height } = Dimensions.get('window');

const SubmitDispoComponent = ({validateFields}) => {
  const navigation = useNavigation();

  // const handleSubmit = () => {
  //   console.log("succesfully navigated to checkout page")
  //   navigation.navigate('CheckOutPage');
  // };

  const handleSubmit = () => {
    if (validateFields()) {
      // Submit the disposition logic here
      navigation.navigate('CheckOutPage');
      console.log("Submitting disposition...");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSubmit} style={styles.buttonWrapper}>
        <LinearGradient
          colors={['#55D1A4', '#14C67B', '#4CBC42']} // Gradient colors
          style={styles.submitButton}
        >
          <Text style={styles.buttonText}>Submit Disposition</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Keep it fixed at the bottom
    bottom: 0, // Align it to the bottom of the screen
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Add some padding if needed
    backgroundColor: '#FFFFFF', // Add a background color to make it stand out
  
  },
  buttonWrapper: {
    width: width * 0.9, // Responsive width (90% of screen width)
    height: height * 0.06, // Responsive height (6% of screen height)
    borderRadius: width * 0.02, // Responsive border-radius (2% of screen width)
  },
  submitButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.02, // Keep button border-radius consistent
  },
  buttonText: {
    color: 'black',
    fontSize: width * 0.045, // Font size adjusted based on screen width
  },
});

export default SubmitDispoComponent;





