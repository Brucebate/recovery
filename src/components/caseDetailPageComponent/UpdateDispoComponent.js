import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

// Get the screen width and height for responsive design
const { width, height } = Dimensions.get('window');

const UpdateDispoComponent = () => {

    const navigation = useNavigation();
    const route = useRoute()
    const caseDetails = route.params?.caseDetails || {};


    const handlePress = () => {
        navigation.navigate('UpdateDispositionPage', { caseDetails: caseDetails })
    }


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.buttonWrapper}>
        <LinearGradient
          colors={['#55D1A4', '#14C67B', '#4CBC42']} // Gradient colors
          style={styles.checkInButton}
        >
          <Text style={styles.buttonText}>Update Disposition</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.00, // Adjust margin based on screen height
    top: 4,
  },
  buttonWrapper: {
    width: width * 0.9, // Responsive width (90% of screen width)
    height: height * 0.06, // Responsive height (6% of screen height)
    borderRadius: width * 0.02, // Responsive border-radius (2% of screen width)
  },
  checkInButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.02, // Keep button border-radius consistent
  },
  buttonText: {
    color: 'black',
    fontSize: width * 0.045, // Font size adjusted based on screen width
    // fontWeight: 'bold',
  },
});

export default UpdateDispoComponent;