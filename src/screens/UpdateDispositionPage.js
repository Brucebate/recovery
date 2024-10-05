

// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import LeftArrowSvg from '../assets/svgs/LeftArrow.svg';
// import SubmitDispoComponent from '../components/updateDetailPageComponent/SubmitDispoComponent';
// import DetailsFillComponent from '../components/updateDetailPageComponent/DetailsFillComponent';

// const { width, height } = Dimensions.get('window');

// const UpdateDispositionPage = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const caseDetails = route.params.caseDetails;

 



//   const handleBackPress = () => {
//     navigation.goBack();
//   };


//   const validateFormFields = () => {
//     return validateForm;
//   }

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Adjust offset for iOS to avoid overlapping
//     >
//       {/* Scrollable content for better user experience */}
//       {/* <ScrollView contentContainerStyle={styles.scrollViewContent}> */}

//         {/* Header */}
//         <View style={styles.headerContainer}>
//           <TouchableOpacity onPress={handleBackPress} style={styles.vector}>
//             <LeftArrowSvg width={24} height={24} />
//           </TouchableOpacity>
//           <Text style={styles.textName}>Update Details</Text>
//         </View>

//         {/* Content goes here, can be scrollable or any other input fields */}
//         <View style={styles.content}>
//           <DetailsFillComponent caseDetails={caseDetails} onValidationFail={validateFormFields}/>
//         </View>

//       {/* </ScrollView> */}

//       {/* Footer with SubmitDispoComponent at the bottom */}
//       <View style={styles.footerComponent}>
//         <SubmitDispoComponent validateFields={validateFormFields} />
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   scrollViewContent: {
//     flexGrow: 1,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingHorizontal: width * 0.03,
//     height: height * 0.09,
//     backgroundColor: '#FFFFFF',
//     marginBottom: height * 0.005,  // Reduced gap between header and content
//   },
//   vector: {
//     padding: width * 0.02,
//   },
//   textName: {
//     fontFamily: 'Mansalva',
//     fontSize: width * 0.055,
//     color: '#000',
//     marginLeft: width * 0.03,
//   },
//   content: {
//     flex: 1,
//     paddingLeft: width * 0.03, // Shift the component towards the left
//     alignItems: 'flex-start',   // Align the component to the start (left) of the container
//     flexGrow: 1,
//     paddingBottom: 35,
//   },
//   footerComponent: {
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     flex: 1,
//   },
// });

// export default UpdateDispositionPage;







import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LeftArrowSvg from '../assets/svgs/LeftArrow.svg';
import SubmitDispoComponent from '../components/updateDetailPageComponent/SubmitDispoComponent';
import DetailsFillComponent from '../components/updateDetailPageComponent/DetailsFillComponent';

const { width, height } = Dimensions.get('window');

const UpdateDispositionPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const caseDetails = route.params.caseDetails;

  const [detailsFilled, setDetailsFilled] = useState(false);




  const handleBackPress = () => {
    navigation.goBack();
  };


  // const validateFormFields = () => {
  //   return validateForm;
  // }


  const validateFormFields = () => {
    if (!detailsFilled) {
      Alert.alert('Validation Error', 'Please check the checkbox and fill the required details.');
      return false;
    }
    return true;
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Adjust offset for iOS to avoid overlapping
    >
      {/* Scrollable content for better user experience */}
      {/* <ScrollView contentContainerStyle={styles.scrollViewContent}> */}

        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleBackPress} style={styles.vector}>
            <LeftArrowSvg width={24} height={24} />
          </TouchableOpacity>
          <Text style={styles.textName}>Update Details</Text>
        </View>

        {/* Content goes here, can be scrollable or any other input fields */}
        <View style={styles.content}>
          <DetailsFillComponent 
           caseDetails={caseDetails}
          //  onValidationFail={validateFormFields}
           setDetailsFilled={setDetailsFilled}
          />
        </View>

      {/* </ScrollView> */}

      {/* Footer with SubmitDispoComponent at the bottom */}
      <View style={styles.footerComponent}>
        <SubmitDispoComponent validateFields={validateFormFields} />
      </View>
    </KeyboardAvoidingView>
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
  vector: {
    padding: width * 0.02,
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

export default UpdateDispositionPage;

