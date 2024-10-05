
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import LeftArrowSvg from '../assets/svgs/LeftArrow.svg';
import GoalsCheckOut from '../assets/svgs2/GoalsCheckOut.svg';
import CheckOutButton from '../components/checkOutPageComponent/CheckOutButton';

const { width, height } = Dimensions.get('window');

const CheckOutPage = () => {
  const navigation = useNavigation();

//   const handleBackPress = () => {
//     navigation.goBack();
//   };

  return (
    <View style={styles.container}>
        {/* Header */}
        {/* <View style={styles.headerContainer}>
          
          <Text style={styles.textName}>Check Out</Text>
        </View> */}

        {/* Content goes here, can be scrollable or any other input fields */}
        <View style={styles.content}>
          <Text style={styles.successText}>
          Successfully updated the disposition
          Please Check Out !
          </Text>
          <GoalsCheckOut />
        </View>

      {/* </ScrollView> */}

      {/* Footer with SubmitDispoComponent at the bottom */}
      <View style={styles.footerComponent}>
        <CheckOutButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: width * 0.03,
    height: height * 0.09,
    backgroundColor: '#FFFFFF',
    marginBottom: height * 0.005,  // Reduced gap between header and content
  },
  
  textName: {
    fontFamily: 'Mansalva',
    fontSize: width * 0.055,
    color: '#000',
    marginLeft: width * 0.03,
  },
  content: {
    flex: 1,
    paddingLeft: width * 0.03, // Shift the component towards the left
    alignItems: 'flex-start',   // Align the component to the start (left) of the container
    flexGrow: 1,
    paddingBottom: 35,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    left: 35,
  },
  successText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    
  },

  footerComponent: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
  },
});

export default CheckOutPage;
