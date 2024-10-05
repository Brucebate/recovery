
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   Image,
//   ScrollView,
//   KeyboardAvoidingView,
//   Alert,
//   Platform,
// } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { launchImageLibrary } from 'react-native-image-picker';
// import { Picker } from '@react-native-picker/picker';

// const { width } = Dimensions.get('window');

// const DetailsFillComponent = ({caseDetails, setDetailsFilled}) => {
//   const [fullyPaid, setFullyPaid] = useState(false);
//   const [partialPaid, setPartialPaid] = useState(false);
//   const [ptp, setPtp] = useState(false);
//   const [others, setOthers] = useState(false);

//   // Image upload state
//   const [receiptImage, setReceiptImage] = useState(null);
//   const [locationImage, setLocationImage] = useState(null);
//   const [imageUploaded, setImageUploaded] = useState(false);

//   // For date picker
//   const [ptpDate, setPtpDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   // State for input amounts
//   const [amountPaid, setAmountPaid] = useState('');

//   //State for input feedback
//   const [feedback, setFeedback] = useState('')

//   //Flag to track if the amount input was edited
//   const [hasEditedAmount, setHasEditedAmount] = useState(false);

//   // Dropdown status state for "Others"
//   const [selectedStatus, setSelectedStatus] = useState("NSP");


//   // const [isAmountPaidValid, setIsAmountPaidValid] = useState(false);
//   // const [isFeedbackValid, setIsFeedbackValid] = useState(false);
//   // const [isReceiptImageValid, setIsReceiptImageValid] = useState(false);


//   // const onDateChange = (event, selectedDate) => {
//   //   setShowDatePicker(false);
//   //   setPtpDate(selectedDate || ptpDate);
//   //   validateDetails();
//   // };

//   const onDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || ptpDate;
//     setShowDatePicker(false);
  
//     // Check if the selected date is today or in the past
//     const today = new Date();
//     if (currentDate <= today.setHours(0, 0, 0, 0)) {  // setHours to ensure the comparison is accurate for today's date
//       Alert.alert('Validation Error', 'Please select a future date for PTP.');
//     } else {
//       setPtpDate(currentDate);
//       validateDetails();
//     }
//   };

//   // Function to reset image states
//   const resetImages = () => {
//     setReceiptImage(null);
//     setLocationImage(null);
//     setImageUploaded(false);
//   };

//   // Checkbox handlers with image reset
//   const handleFullyPaid = () => {
//     if (!fullyPaid) {
//       resetImages();
//     }
//     setFullyPaid(!fullyPaid);
//     setPartialPaid(false);
//     setPtp(false);
//     setOthers(false);
//     setAmountPaid(''); // Reset amount when switching options
//     setDetailsFilled(false);
//   };

//   const handlePartialPaid = () => {
//     if (!partialPaid) {
//       resetImages();
//     }
//     setPartialPaid(!partialPaid);
//     setFullyPaid(false);
//     setPtp(false);
//     setOthers(false);
//     setDetailsFilled(false);
//   };

//   const handlePtp = () => {
//     if (!ptp) {
//       resetImages();
//     }
//     setPtp(!ptp);
//     setFullyPaid(false);
//     setPartialPaid(false);
//     setOthers(false);
//   };

//   const handleOthers = () => {
//     if (!others) {
//       resetImages();
//     }
//     setOthers(!others);
//     setFullyPaid(false);
//     setPartialPaid(false);
//     setPtp(false);
//   };

//   // Image upload handlers
//   const handleImageUpload = (setImage) => {
//     launchImageLibrary({}, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) { // Updated to handle errorCode
//         console.log('ImagePicker Error: ', response.errorMessage);
//       } else {
//         const source = { uri: response.assets[0].uri };
//         setImage(source);
//         setImageUploaded(true);
//       }
//     });
//   };

//   // Image cancel handlers
//   const cancelImageUpload = (setImage) => {
//     setImage(null);
//     setImageUploaded(false);
//   };

//   const handleAmountFocus = () => {
//     setHasEditedAmount(false);
//   }

//   // Validation for fully paid
//   const validateFullyPaid = () => {
//     if (hasEditedAmount && amountPaid !== caseDetails.emi.toString()) {
//       Alert.alert(
//         'Validation Error',
//         `Amount should be equal to ${caseDetails.emi} for Fully Paid`,
//         [
//           {
//             text: 'Ok',
//             onPress: () => setAmountPaid('')

//           }
//         ]
//       );
     
//     }
//   };

//   // Validation for partially paid
//   const validatePartialPaid = () => {
//     if (hasEditedAmount && parseFloat(amountPaid) >= caseDetails.emi) {
//       Alert.alert(
//         'Validation Error',
//         `Amount should be less than ${caseDetails.emi} for Partially Paid`,
//         [
//           {
//             text: 'OK',
//             onPress: () => setAmountPaid('')
//           }
//         ]
//       );
      
//     }
    
//   };


//   // Validation function
//   const validateDetails = () => {
//     if (!fullyPaid && !partialPaid && !ptp && !others) {
//       Alert.alert('Validation Error', 'Please check at least one payment option.');
//       return false;
//     }
//     if (fullyPaid || partialPaid) {
//       if (amountPaid.trim() === '') {
//         // Alert.alert('Validation Error', 'Amount Paid is required.');
//         return false;
//       }
//     }
//     if (feedback.trim() === '') {
//       // Alert.alert('Validation Error', 'Feedback is required.');
//       return false;
//     }
//     if (ptp || partialPaid) {
//       if (!ptpDate) {
//         return false;
//       }
//     }

//     setDetailsFilled(true); // Mark details as filled if validations pass
//     return true;
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
//     >
//       <View style={styles.amount}>
//         <Text style={styles.amountText}>Emi Amount : {caseDetails.emi}</Text>

//       </View>
//       <ScrollView
//         contentContainerStyle={styles.scrollContainer}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.innerContainer}>
//           {/* Fully Paid Checkbox */}
//           <View style={styles.checkboxContainer}>
//             <CheckBox value={fullyPaid} onValueChange={handleFullyPaid} />
//             <Text style={styles.label}>Fully Paid</Text>
//           </View>
//           {fullyPaid && (
//             <View style={styles.inputContainer}>
//               <TextInput
//                 placeholder="Amount Paid"
//                 style={styles.input}
//                 keyboardType="numeric"
//                 value={amountPaid}
//                 onChangeText={(text) => {
//                   setAmountPaid(text);
//                   setHasEditedAmount(true); // Mark as edited when user types
//                   validateDetails();
//                 }}
//                 onFocus={handleAmountFocus} // Reset flag on focus
//                 onBlur={validateFullyPaid} // Validate on blur
//               />
//               <TextInput 
//                placeholder="Feedback" 
//                style={styles.input} 
//                onChangeText={(text) => {
//                 setFeedback(text);
//                 validateDetails();
//                }}
//               />
//               <TextInput placeholder="New Address Found" style={styles.input} />
//               <TextInput placeholder="New Mobile Number" style={styles.input} />

//               {/* Image Upload for Payment Receipt */}
//               <TouchableOpacity
//                 onPress={() => handleImageUpload(setReceiptImage)}
//                 style={styles.uploadButton}
//               >
//                 <Text style={styles.uploadButtonText}>Upload Payment Receipt</Text>
//               </TouchableOpacity>
//               {receiptImage && (
//                 <View style={styles.imageContainer}>
//                   <Image source={receiptImage} style={styles.image} />
//                   <TouchableOpacity
//                     onPress={() => cancelImageUpload(setReceiptImage)}
//                     style={styles.cancelButton}
//                   >
//                     <Text style={styles.cancelButtonText}>Cancel</Text>
//                   </TouchableOpacity>
//                 </View>
//               )}

//               {/* Image Upload for Location */}
//               <TouchableOpacity
//                 onPress={() => handleImageUpload(setLocationImage)}
//                 style={styles.uploadButton}
//               >
//                 <Text style={styles.uploadButtonText}>Upload Location Image</Text>
//               </TouchableOpacity>
//               {locationImage && (
//                 <View style={styles.imageContainer}>
//                   <Image source={locationImage} style={styles.image} />
//                   <TouchableOpacity
//                     onPress={() => cancelImageUpload(setLocationImage)}
//                     style={styles.cancelButton}
//                   >
//                     <Text style={styles.cancelButtonText}>Cancel</Text>
//                   </TouchableOpacity>
//                 </View>
//               )}
//             </View>
//           )}

//           {/* Partial Paid Checkbox */}
//           <View style={styles.checkboxContainer}>
//             <CheckBox value={partialPaid} onValueChange={handlePartialPaid} />
//             <Text style={styles.label}>Partial Paid</Text>
//           </View>
//           {partialPaid && (
//             <View style={styles.inputContainer}>
//               <TextInput
//                placeholder="Amount Paid"
//                style={styles.input}
//                keyboardType="numeric"
//                value={amountPaid}
//                onChangeText={(text) => {
//                 setAmountPaid(text);
//                 setHasEditedAmount(true);
//                 validateDetails() // Mark as edited when user types
//               }}
//               onFocus={handleAmountFocus} // Reset flag on focus
//               onBlur={validatePartialPaid} // Validate on blur
//               />
//               <TextInput 
//                placeholder="Feedback" 
//                style={styles.input} 
//                onChangeText={(text) => {
//                 setFeedback(text);
//                 validateDetails();
//                }}
//               />
//               <TextInput placeholder="New Address Found" style={styles.input} />
//               <TextInput placeholder="New Mobile Number" style={styles.input} />

//               {/* PTP Date Picker */}
//               <TouchableOpacity
//                 style={styles.datePicker}
//                 onPress={() => setShowDatePicker(true)}
//               >
//                 <Text style={styles.dateText}>Set PTP Date: {ptpDate.toDateString()}</Text>
//               </TouchableOpacity>
//               {showDatePicker && (
//                 <DateTimePicker
//                   value={ptpDate}
//                   mode="date"
//                   display="default"
//                   onChange={onDateChange}
//                 />
//               )}

//               {/* Image Upload for Payment Receipt */}
//               <TouchableOpacity
//                 onPress={() => handleImageUpload(setReceiptImage)}
//                 style={styles.uploadButton}
//               >
//                 <Text style={styles.uploadButtonText}>Upload Payment Receipt</Text>
//               </TouchableOpacity>
//               {receiptImage && (
//                 <View style={styles.imageContainer}>
//                   <Image source={receiptImage} style={styles.image} />
//                   <TouchableOpacity
//                     onPress={() => cancelImageUpload(setReceiptImage)}
//                     style={styles.cancelButton}
//                   >
//                     <Text style={styles.cancelButtonText}>Cancel</Text>
//                   </TouchableOpacity>
//                 </View>
//               )}

//               {/* Image Upload for Location */}
//               <TouchableOpacity
//                 onPress={() => handleImageUpload(setLocationImage)}
//                 style={styles.uploadButton}
//               >
//                 <Text style={styles.uploadButtonText}>Upload Location Image</Text>
//               </TouchableOpacity>
//               {locationImage && (
//                 <View style={styles.imageContainer}>
//                   <Image source={locationImage} style={styles.image} />
//                   <TouchableOpacity
//                     onPress={() => cancelImageUpload(setLocationImage)}
//                     style={styles.cancelButton}
//                   >
//                     <Text style={styles.cancelButtonText}>Cancel</Text>
//                   </TouchableOpacity>
//                 </View>
//               )}
//             </View>
//           )}

//           {/* PTP Checkbox */}
//           <View style={styles.checkboxContainer}>
//             <CheckBox value={ptp} onValueChange={handlePtp} />
//             <Text style={styles.label}>PTP (Promise to Pay)</Text>
//           </View>
//           {ptp && (
//             <View style={styles.inputContainer}>
//               <TouchableOpacity
//                 style={styles.datePicker}
//                 onPress={() => setShowDatePicker(true)}
//               >
//                 <Text style={styles.dateText}>Set PTP Date: {ptpDate.toDateString()}</Text>
//               </TouchableOpacity>
//               {showDatePicker && (
//                 <DateTimePicker
//                   value={ptpDate}
//                   mode="date"
//                   display="default"
//                   onChange={onDateChange}
//                 />
//               )}
//               <TextInput 
//                placeholder="Feedback" 
//                style={styles.input} 
//                onChangeText={(text) => {
//                 setFeedback(text);
//                 validateDetails();
//                }}
//               />
//               <TextInput placeholder="New Address Found" style={styles.input} />
//               <TextInput placeholder="New Mobile Number" style={styles.input} />
//             </View>
//           )}

//           {/* Others Checkbox */}
//           <View style={styles.checkboxContainer}>
//             <CheckBox value={others} onValueChange={handleOthers} />
//             <Text style={styles.label}>Others (NSP, ANF, LM, etc.)</Text>
//           </View>
//           {others && (
//             <View style={styles.inputContainer}>
//               <Picker
//                 selectedValue={selectedStatus}
//                 style={styles.picker}
//                 onValueChange={(itemValue) => setSelectedStatus(itemValue)}
//               >
//                 <Picker.Item label="NSP" value="NSP" />
//                 <Picker.Item label="ANF" value="ANF" />
//                 <Picker.Item label="LM" value="LM" />
//                 <Picker.Item label="Shifted" value="Shifted" />
//                 <Picker.Item label="Restricted" value="Restricted" />

//               </Picker>
//               <TextInput 
//                placeholder="Feedback" 
//                style={styles.input} 
//                onChangeText={(text) => {
//                 setFeedback(text);
//                 validateDetails();
//                }}
//               />
//             </View>
//           )}
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//   },
//   innerContainer: {
//     flex: 1,
//   },
//   amount: {
//     paddingBottom: 10,

//   },
//   amountText: {
//     color: 'black',
//     fontSize: 16,
//     left: 10,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   label: {
//     marginLeft: 8,
//     fontSize: 16,
//     color: '#333',
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     width: '100%', // Full width of the parent container
//     maxWidth: 230, // Set a maximum width if needed
//     multiline: true, // Ensure the input does not grow vertically
//     textAlignVertical: 'center', // Ensure proper text alignment within the box
//     overflow: 'hidden', // Hide overflow if any
//   },
//   picker: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   datePicker: {
//     paddingVertical: 10,
//   },
//   dateText: {
//     fontSize: 16,
//     color: '#60C971',
//   },
//   uploadButton: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   uploadButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   imageContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginRight: 10,
//   },
//   cancelButton: {
//     backgroundColor: '#FF4136',
//     padding: 5,
//     borderRadius: 5,
//   },
//   cancelButtonText: {
//     color: '#fff',
//     fontSize: 14,
//   },
// });

// export default DetailsFillComponent;






import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  Platform,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';

const { width } = Dimensions.get('window');

const DetailsFillComponent = ({caseDetails, setDetailsFilled}) => {
  const [fullyPaid, setFullyPaid] = useState(false);
  const [partialPaid, setPartialPaid] = useState(false);
  const [ptp, setPtp] = useState(false);
  const [others, setOthers] = useState(false);

  // Image upload state
  const [receiptImage, setReceiptImage] = useState(null);
  const [locationImage, setLocationImage] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);

  // For date picker
  const [ptpDate, setPtpDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // State for input amounts
  const [amountPaid, setAmountPaid] = useState('');

  //State for input feedback
  const [feedback, setFeedback] = useState('')

  //Flag to track if the amount input was edited
  const [hasEditedAmount, setHasEditedAmount] = useState(false);

  // Dropdown status state for "Others"
  const [selectedStatus, setSelectedStatus] = useState("NSP");


  // const [isAmountPaidValid, setIsAmountPaidValid] = useState(false);
  // const [isFeedbackValid, setIsFeedbackValid] = useState(false);
  // const [isReceiptImageValid, setIsReceiptImageValid] = useState(false);


  // const onDateChange = (event, selectedDate) => {
  //   setShowDatePicker(false);
  //   setPtpDate(selectedDate || ptpDate);
  //   validateDetails();
  // };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || ptpDate;
    setShowDatePicker(false);
  
    // Check if the selected date is today or in the past
    const today = new Date();
    if (currentDate <= today.setHours(0, 0, 0, 0)) {  // setHours to ensure the comparison is accurate for today's date
      Alert.alert('Validation Error', 'Please select a future date for PTP.');
    } else {
      setPtpDate(currentDate);
      validateDetails();
    }
  };

  // Function to reset Field states 
  const resetAllFields = () => {
    setAmountPaid('');
    setFeedback('');
    setPtpDate(null);
    
  }

  // Function to reset image states
  const resetImages = () => {
    setReceiptImage(null);
    setLocationImage(null);
    setImageUploaded(false);
  };

  // Checkbox handlers with image reset
  const handleFullyPaid = () => {
    if (!fullyPaid) {
      resetAllFields();
      resetImages();
    }
    setFullyPaid(!fullyPaid);
    setPartialPaid(false);
    setPtp(false);
    setOthers(false);
    setAmountPaid(''); // Reset amount when switching options
    setDetailsFilled(false);
  };

  const handlePartialPaid = () => {
    if (!partialPaid) {
      resetAllFields();
      resetImages();
    }
    setPartialPaid(!partialPaid);
    setFullyPaid(false);
    setPtp(false);
    setOthers(false);
    setDetailsFilled(false);
  };

  const handlePtp = () => {
    if (!ptp) {
      resetAllFields();
      resetImages();
    }
    setPtp(!ptp);
    setFullyPaid(false);
    setPartialPaid(false);
    setOthers(false);
  };

  const handleOthers = () => {
    if (!others) {
      resetAllFields();
      resetImages();
    }
    setOthers(!others);
    setFullyPaid(false);
    setPartialPaid(false);
    setPtp(false);
  };

  // Image upload handlers
  const handleImageUpload = (setImage) => {
    launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) { // Updated to handle errorCode
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        setImage(source);
        setImageUploaded(true);
      }
    });
  };

  // Image cancel handlers
  const cancelImageUpload = (setImage) => {
    setImage(null);
    setImageUploaded(false);
  };

  const handleAmountFocus = () => {
    setHasEditedAmount(false);
  }

  // Validation for fully paid
  const validateFullyPaid = () => {
    if (hasEditedAmount && amountPaid !== caseDetails.emi.toString()) {
      Alert.alert(
        'Validation Error',
        `Amount should be equal to ${caseDetails.emi} for Fully Paid`,
        [
          {
            text: 'Ok',
            onPress: () => setAmountPaid('')

          }
        ]
      );
     
    }
  };

  // Validation for partially paid
  const validatePartialPaid = () => {
    if (hasEditedAmount && parseFloat(amountPaid) >= caseDetails.emi) {
      Alert.alert(
        'Validation Error',
        `Amount should be less than ${caseDetails.emi} for Partially Paid`,
        [
          {
            text: 'OK',
            onPress: () => setAmountPaid('')
          }
        ]
      );
      
    }
    
  };


  // Validation function
  const validateDetails = () => {
    if (!fullyPaid && !partialPaid && !ptp && !others) {
      Alert.alert('Validation Error', 'Please check at least one payment option.');
      return false;
    }
    if (fullyPaid || partialPaid) {
      if (amountPaid.trim() === '') {
        // Alert.alert('Validation Error', 'Amount Paid is required.');
        return false;
      }
    }
    if (feedback.trim() === '') {
      // Alert.alert('Validation Error', 'Feedback is required.');
      return false;
    }
    if (ptp || partialPaid) {
      if (!ptpDate) {
        return false;
      }
    }

    setDetailsFilled(true); // Mark details as filled if validations pass
    return true;
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <View style={styles.amount}>
        <Text style={styles.amountText}>Emi Amount : {caseDetails.emi}</Text>

      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.innerContainer}>
          {/* Fully Paid Checkbox */}
          <View style={styles.checkboxContainer}>
            <CheckBox value={fullyPaid} onValueChange={handleFullyPaid} />
            <Text style={styles.label}>Fully Paid</Text>
          </View>
          {fullyPaid && (
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Amount Paid"
                style={styles.input}
                keyboardType="numeric"
                value={amountPaid}
                onChangeText={(text) => {
                  setAmountPaid(text);
                  setHasEditedAmount(true); // Mark as edited when user types
                  validateDetails();
                }}
                onFocus={handleAmountFocus} // Reset flag on focus
                onBlur={validateFullyPaid} // Validate on blur
              />
              <TextInput 
               placeholder="Feedback" 
               style={styles.input} 
               onChangeText={(text) => {
                setFeedback(text);
                validateDetails();
               }}
              />
              <TextInput placeholder="New Address Found" style={styles.input} />
              <TextInput placeholder="New Mobile Number" style={styles.input} />

              {/* Image Upload for Payment Receipt */}
              <TouchableOpacity
                onPress={() => handleImageUpload(setReceiptImage)}
                style={styles.uploadButton}
              >
                <Text style={styles.uploadButtonText}>Upload Payment Receipt</Text>
              </TouchableOpacity>
              {receiptImage && (
                <View style={styles.imageContainer}>
                  <Image source={receiptImage} style={styles.image} />
                  <TouchableOpacity
                    onPress={() => cancelImageUpload(setReceiptImage)}
                    style={styles.cancelButton}
                  >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              )}

              {/* Image Upload for Location */}
              <TouchableOpacity
                onPress={() => handleImageUpload(setLocationImage)}
                style={styles.uploadButton}
              >
                <Text style={styles.uploadButtonText}>Upload Location Image</Text>
              </TouchableOpacity>
              {locationImage && (
                <View style={styles.imageContainer}>
                  <Image source={locationImage} style={styles.image} />
                  <TouchableOpacity
                    onPress={() => cancelImageUpload(setLocationImage)}
                    style={styles.cancelButton}
                  >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}

          {/* Partial Paid Checkbox */}
          <View style={styles.checkboxContainer}>
            <CheckBox value={partialPaid} onValueChange={handlePartialPaid} />
            <Text style={styles.label}>Partial Paid</Text>
          </View>
          {partialPaid && (
            <View style={styles.inputContainer}>
              <TextInput
               placeholder="Amount Paid"
               style={styles.input}
               keyboardType="numeric"
               value={amountPaid}
               onChangeText={(text) => {
                setAmountPaid(text);
                setHasEditedAmount(true);
                validateDetails() // Mark as edited when user types
              }}
              onFocus={handleAmountFocus} // Reset flag on focus
              onBlur={validatePartialPaid} // Validate on blur
              />
              <TextInput 
               placeholder="Feedback" 
               style={styles.input} 
               onChangeText={(text) => {
                setFeedback(text);
                validateDetails();
               }}
              />
              <TextInput placeholder="New Address Found" style={styles.input} />
              <TextInput placeholder="New Mobile Number" style={styles.input} />

              {/* PTP Date Picker */}
              <TouchableOpacity
                style={styles.datePicker}
                onPress={() => setShowDatePicker(true)}
              >
                <Text style={styles.dateText}>
                  {ptpDate ? `Set PTP Date: ${ptpDate.toDateString()}` : 'Select PTP Date'}
                </Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={ptpDate || new Date()}
                  mode="date"
                  display="default"
                  onChange={onDateChange}
                />
              )}

              {/* Image Upload for Payment Receipt */}
              <TouchableOpacity
                onPress={() => handleImageUpload(setReceiptImage)}
                style={styles.uploadButton}
              >
                <Text style={styles.uploadButtonText}>Upload Payment Receipt</Text>
              </TouchableOpacity>
              {receiptImage && (
                <View style={styles.imageContainer}>
                  <Image source={receiptImage} style={styles.image} />
                  <TouchableOpacity
                    onPress={() => cancelImageUpload(setReceiptImage)}
                    style={styles.cancelButton}
                  >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              )}

              {/* Image Upload for Location */}
              <TouchableOpacity
                onPress={() => handleImageUpload(setLocationImage)}
                style={styles.uploadButton}
              >
                <Text style={styles.uploadButtonText}>Upload Location Image</Text>
              </TouchableOpacity>
              {locationImage && (
                <View style={styles.imageContainer}>
                  <Image source={locationImage} style={styles.image} />
                  <TouchableOpacity
                    onPress={() => cancelImageUpload(setLocationImage)}
                    style={styles.cancelButton}
                  >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}

          {/* PTP Checkbox */}
          <View style={styles.checkboxContainer}>
            <CheckBox value={ptp} onValueChange={handlePtp} />
            <Text style={styles.label}>PTP (Promise to Pay)</Text>
          </View>
          {ptp && (
            <View style={styles.inputContainer}>
              <TouchableOpacity
                style={styles.datePicker}
                onPress={() => setShowDatePicker(true)}
              >
                <Text style={styles.dateText}>
                  {ptpDate ? `Set PTP Date: ${ptpDate.toDateString()}` : 'Select PTP Date'}
                </Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={ptpDate || new Date()}
                  mode="date"
                  display="default"
                  onChange={onDateChange}
                />
              )}
              <TextInput 
               placeholder="Feedback" 
               style={styles.input} 
               onChangeText={(text) => {
                setFeedback(text);
                validateDetails();
               }}
              />
              <TextInput placeholder="New Address Found" style={styles.input} />
              <TextInput placeholder="New Mobile Number" style={styles.input} />
            </View>
          )}

          {/* Others Checkbox */}
          <View style={styles.checkboxContainer}>
            <CheckBox value={others} onValueChange={handleOthers} />
            <Text style={styles.label}>Others (NSP, ANF, LM, etc.)</Text>
          </View>
          {others && (
            <View style={styles.inputContainer}>
              <Picker
                selectedValue={selectedStatus}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedStatus(itemValue)}
              >
                <Picker.Item label="NSP" value="NSP" />
                <Picker.Item label="ANF" value="ANF" />
                <Picker.Item label="LM" value="LM" />
                <Picker.Item label="Shifted" value="Shifted" />
                <Picker.Item label="Restricted" value="Restricted" />

              </Picker>
              <TextInput 
               placeholder="Feedback" 
               style={styles.input} 
               onChangeText={(text) => {
                setFeedback(text);
                validateDetails();
               }}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  innerContainer: {
    flex: 1,
  },
  amount: {
    paddingBottom: 10,

  },
  amountText: {
    color: 'black',
    fontSize: 16,
    left: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%', // Full width of the parent container
    maxWidth: 230, // Set a maximum width if needed
    multiline: true, // Ensure the input does not grow vertically
    textAlignVertical: 'center', // Ensure proper text alignment within the box
    overflow: 'hidden', // Hide overflow if any
  },
  picker: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  datePicker: {
    paddingVertical: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#60C971',
  },
  uploadButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#FF4136',
    padding: 5,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default DetailsFillComponent;

