
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Import the LinearGradient component

const { width, height } = Dimensions.get('window');  // to make responsive for all screens mobile we have to use that for sure

const Startup = ({ navigation }) => {
  // Create animated values
  const fadeAnim = useRef(new Animated.Value(1)).current; // For fading in and out
  const greenScreenAnim = useRef(new Animated.Value(0)).current; // For showing green screen

  useEffect(() => {
    // Start the animation sequence
    Animated.sequence([
      // Fade out the gradient screen after a delay
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
      // Fade in the green screen
      Animated.timing(greenScreenAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ]).start(() => {
      // Navigate to the main screen after animations complete
      navigation.replace('Login'); // Replace 'Login' with your actual main screen name
    });
  }, [fadeAnim, greenScreenAnim, navigation]);

  return (
    <View style={styles.container}>
      {/* First LinearGradient with Text */}
      <Animated.View style={[styles.gradientContainer, { opacity: fadeAnim }]}>
        <LinearGradient
          colors={['#55D1A4', '#14C67B', '#4CBC42']} // Gradient colors
          style={StyleSheet.absoluteFillObject} // Ensure gradient fills the container
          start={{ x: 0, y: 0 }} // Gradient start point
          end={{ x: 0, y: 1 }}   // Gradient end point
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>RecoverEase</Text>
          </View>
        </LinearGradient>
      </Animated.View>

      {/* Second LinearGradient as a background */}
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject, // Ensure it covers the whole screen
          { opacity: greenScreenAnim }
        ]}
      >
        <LinearGradient
          colors={['#55D1A4', '#14C67B', '#4CBC42']} // Gradient colors
          style={StyleSheet.absoluteFillObject} // Ensure gradient fills the container
          start={{ x: 0, y: 0 }} // Gradient start point
          end={{ x: 0, y: 1 }}   // Gradient end point
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Ensure the background is set to see the gradient properly
  },
  gradientContainer: {
    width: width * 0.6, // Diameter of the circle
    height: width * 0.6, // Diameter of the circle
    borderRadius: (width * 0.6) / 2, // Half of the diameter
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: width * 0.2,
    top: height * 0.3,
    overflow: 'hidden', // Ensure the gradient stays within the circle
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#fff',
    width: '80%',
    height: 50,
    fontFamily: 'Mansalva', // Ensure this font is properly linked in your project
    fontStyle: 'italic',
    textAlign: 'center',
    letterSpacing: 3,
    color: '#000000', // Text color
  },
});

export default Startup;