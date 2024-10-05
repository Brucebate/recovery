



import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LeftArrowSvg from '../assets/svgs/LeftArrow.svg';
import HeaderComponent from '../components/caseDetailPageComponent/HeaderComponent';
import CheckInComponent from '../components/caseDetailPageComponent/CheckInComponent';
import ModalCheckInConfirmation from '../components/caseDetailPageComponent/ModalCheckInConfirmation';
import UpdateDispoComponent from '../components/caseDetailPageComponent/UpdateDispoComponent';


const { width, height } = Dimensions.get('window');

const CaseDetailsPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const caseDetails = route.params.caseDetails;


  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCheckInConfirmed, setIsCheckInConfirmed] = useState(false);

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous page
  };

  const handleCheckIn = () => {
    setIsModalVisible(true);
    
  }

  const handleCancelCheckIn = () => {
    setIsModalVisible(false);
    console.log("check in cancel")
  };

  const handleConfirmCheckIn = () => {
    setIsModalVisible(false);
    setIsCheckInConfirmed(true)
    console.log("Check in Confirms")
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackPress} style={styles.vector}>
          <LeftArrowSvg width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.textName}>Case Details</Text>
      </View>

      {/* Case Details */}
      <View style={styles.headerComponent}>
        <HeaderComponent caseDetails={caseDetails}  />
      </View>

      {/* Footer containing the Check-in Component */}
      <View style={styles.footerComponent}>
        {isCheckInConfirmed ? (
          // Render the UpdateDispoComponent after check-in is confirmed
          <UpdateDispoComponent />
        ) : (
          // Render the CheckInComponent if check-in is not confirmed yet
          <CheckInComponent handleCheckIn={handleCheckIn} />
        )}
      </View>

      {/* Check-In Confirmation Modal */}
      <ModalCheckInConfirmation
        visible={isModalVisible}
        onCancel={handleCancelCheckIn}
        onConfirm={handleConfirmCheckIn}
      />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: width * 0.03,
    height: height * 0.09,
    backgroundColor: '#FFFFFF',
    marginBottom: height * 0.01,
  },
  vector: {
    padding: width * 0.02,
  },
  textName: {
    fontFamily: 'Mansalva',
    fontSize: width * 0.055,
    color: '#000',
    marginLeft: width * 0.03,
  },
  headerComponent: {
    flexGrow: 1, // Allows this component to take the available space
    marginTop: -20, // Adjust as needed
  },
  footerComponent: {
    paddingBottom: 20, // Optional: add some padding at the bottom
  },
});

export default CaseDetailsPage;
