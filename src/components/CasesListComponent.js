

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import LocationSvg from '../assets/svgs2/location.svg';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import AcceptedSvg from '../assets/svgs2/Accepted.svg';
// import RejectedSvg from '../assets/svgs2/Rejected.svg';

// // Get screen width and height
// const {width, height} = Dimensions.get('window');

// const CaseListComponent = ({cases, showIcons, onRejectCase, onAcceptCase}) => {
//   // here showIcons is the prop
//   const [showAll, setShowAll] = useState(false);


 

//   // Function to render each case item
//   const renderItem = ({item}) => {

//     const displayAmount = item.status === 'Partial Paid' ? item.remainingAmount : item.emi;

//     const trucateAddress = (address) => {
//       if (address.length > 25) {
//         return address.substring(0, 22) + '...';
//       }
//       else {
//         return address;
//       }
//     }

//     return(
//     <View style={styles.caseContainer}>
//       <View style={styles.caseInfo}>
//         <Text style={styles.customerName}>{item.customerName}</Text>
//         <Text style={styles.portfolio}>{item.portfolio}</Text>
//         <View style={styles.addressContainer}>
//           <LocationSvg style={styles.locator} />
//           <Text style={styles.address}>{trucateAddress(item.address)}</Text>
//         </View>
//       </View>
//       <View style={styles.emiContainer}>
//         <Text style={styles.emi}>₹ {displayAmount}</Text>
//         {item.status === 'PTP' && (
//           <Text style={styles.statusText}>PTP on {item.ptpDate}</Text>
//         )}

//         {item.status === 'Partial Paid' && (
//           <Text style={styles.statusText}>Partial paid {item.ptpDate}</Text>
//         )}

//         {item.status === 'Not Visited' && (
//           <Text style={styles.statusText}>Not Visited</Text>
//         )}

//         {item.status === 'Fully paid' && (
//           <Text style={styles.statusText}>Fully Paid</Text>
//         )}

//         {item.status === 'Shifted' && (
//           <Text style={styles.statusText}>Shifted</Text>
//         )}

//         {item.status === 'Not Contactable' && (
//           <Text style={styles.statusText}>Not Contactable</Text>
//         )}

//         {/* {item.status === 'Revisits' && (
//           <Text style={styles.statusText}>Revisits</Text>
//         )} */}

//         {item.status === 'Others' && (
//           <Text style={styles.statusText}>Others</Text>
//         )}


//         {showIcons && !item.isAccepted && !item.isRejected && (
//           <View style={styles.iconContainer}>
//             <TouchableOpacity onPress={() => onAcceptCase(item)}>
//               <AcceptedSvg />
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.rejectedIcon}
//               onPress={() => onRejectCase(item)}>
//               <RejectedSvg />
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

//   const handleSeeAll = () => {
//     setShowAll(!showAll);
//   };

//   const displayCases = showAll ? cases : cases.slice(0, 4);

//   return (
//     <FlatList
//       data={displayCases}
//       renderItem={renderItem}
//       keyExtractor={item => item.id.toString()}
//       showsVerticalScrollIndicator={false}
//       ListFooterComponent={
//         <View style={styles.footerContainer}>
//           <TouchableOpacity
//             onPress={handleSeeAll}
//             style={styles.buttonContainer}>
//             <LinearGradient
//               colors={['#55D1A4', '#14C67B', 'rgba(76, 188, 66, 0.768627)']}
//               style={styles.linearGradient}>
//               <View style={styles.buttonContent}>
//                 <Text style={styles.buttonText}>
//                   {showAll ? 'See Less' : 'See All'}
//                 </Text>
//               </View>
//             </LinearGradient>
//           </TouchableOpacity>
//         </View>
//       }
//     />
//   );
// };

// const styles = StyleSheet.create({
//   caseContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#F4E8E8',
//     borderRadius: 6,
//     padding: 10,
//     marginVertical: 3,
//     boxShadow: '0px 10px 17px -10px rgba(39, 30, 28, 0.73)',
//   },
//   caseInfo: {
//     flexDirection: 'column',
//     flex: 1, // Make caseInfo take up remaining space
//   },
//   customerName: {
//     fontFamily: 'Poppins',
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#000000',
//   },
//   portfolio: {
//     fontFamily: 'Poppins',
//     fontSize: 12,
//     color: '#919191',
//     marginTop: 4,
//   },
//   addressContainer: {
//     flexDirection: 'row',
//     alignItems: 'center', // Align icon and text vertically
//     marginTop: 2,
//   },
//   locator: {
//     marginRight: 8, // Margin between the icon and address text
//   },
//   address: {
//     fontFamily: 'Poppins',
//     fontSize: 12, // Scaled font size for better readability
//     color: '#000000',
//     flex: 1, // Make address take remaining space
//     flexWrap: 'wrap', // Allow text to wrap
//   },
//   emiContainer: {
//     alignItems: 'flex-end',
//   },
//   emi: {
//     fontFamily: 'Poppins',
//     fontSize: 14,
//     color: '#000000',
//   },
//   footerContainer: {
//     paddingVertical: 20, // Add vertical padding to the footer
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     width: width * 0.9, // Responsive width
//     height: 49,
//   },
//   linearGradient: {
//     flex: 1,
//     borderRadius: 6,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//     paddingHorizontal: 16,
//     flexDirection: 'row', // Ensure horizontal alignment inside the gradient
//   },
//   buttonContent: {
//     flexDirection: 'row', // Ensure the logo and text are in a row
//     alignItems: 'center',
//     justifyContent: 'center', // Center align both logo and text
//   },
//   buttonText: {
//     fontFamily: 'Poppins',
//     fontStyle: 'normal',
//     fontWeight: '500',
//     fontSize: 16,
//     color: '#000000', // Explicitly set text color to black
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     marginTop: 10,
//     justifyContent: 'space-between', // Ensure there is spacing between icons
//     alignItems: 'center', // Vertically align icons
//   },
//   rejectedIcon: {
//     marginLeft: 10,
//   },
// });

// export default CaseListComponent;




import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LocationSvg from '../assets/svgs2/location.svg';
import AcceptedSvg from '../assets/svgs2/Accepted.svg';
import RejectedSvg from '../assets/svgs2/Rejected.svg';

// Get screen width and height
const {width} = Dimensions.get('window');

const CaseListComponent = ({cases, showIcons, isTouchable, onRejectCase, onAcceptCase, onCasePress}) => {
  const [showAll, setShowAll] = useState(false);

  // Function to render each case item
  const renderItem = ({item}) => {
    const displayAmount = item.status === 'Partial Paid' ? item.remainingAmount : item.emi;

    const trucateAddress = (address) => {
      if (address.length > 25) {
        return address.substring(0, 22) + '...';
      } else {
        return address;
      }
    };

    return (
      // Conditionally make the case touchable based on the isTouchable prop
      isTouchable ? (
        <TouchableOpacity
          onPress={() => onCasePress(item)} // Handle case press event here
          style={styles.caseContainer}
        >
          <View style={styles.caseInfo}>
            <Text style={styles.customerName}>{item.customerName}</Text>
            <Text style={styles.portfolio}>{item.portfolio}</Text>
            <View style={styles.addressContainer}>
              <LocationSvg style={styles.locator} />
              <Text style={styles.address}>{trucateAddress(item.address)}</Text>
            </View>
          </View>
          <View style={styles.emiContainer}>
            <Text style={styles.emi}>₹ {displayAmount}</Text>
            {item.status === 'PTP' && (
              <Text style={styles.statusText}>PTP on {item.ptpDate}</Text>
            )}
            {item.status === 'Partial Paid' && (
              <Text style={styles.statusText}>Partial paid {item.ptpDate}</Text>
            )}
            {item.status === 'Not Visited' && (
              <Text style={styles.statusText}>Not Visited</Text>
            )}
            {item.status === 'Fully paid' && (
              <Text style={styles.statusText}>Fully Paid</Text>
            )}
            {item.status === 'Shifted' && (
              <Text style={styles.statusText}>Shifted</Text>
            )}
            {item.status === 'Not Contactable' && (
              <Text style={styles.statusText}>Not Contactable</Text>
            )}
            {item.status === 'Others' && (
              <Text style={styles.statusText}>Others</Text>
            )}
            {showIcons && !item.isAccepted && !item.isRejected && (
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => onAcceptCase(item)}>
                  <AcceptedSvg />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.rejectedIcon}
                  onPress={() => onRejectCase(item)}
                >
                  <RejectedSvg />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.caseContainer}>
          <View style={styles.caseInfo}>
            <Text style={styles.customerName}>{item.customerName}</Text>
            <Text style={styles.portfolio}>{item.portfolio}</Text>
            <View style={styles.addressContainer}>
              <LocationSvg style={styles.locator} />
              <Text style={styles.address}>{trucateAddress(item.address)}</Text>
            </View>
          </View>
          <View style={styles.emiContainer}>
            <Text style={styles.emi}>₹ {displayAmount}</Text>
            {item.status === 'PTP' && (
              <Text style={styles.statusText}>PTP on {item.ptpDate}</Text>
            )}
            {item.status === 'Partial Paid' && (
              <Text style={styles.statusText}>Partial paid {item.ptpDate}</Text>
            )}
            {item.status === 'Not Visited' && (
              <Text style={styles.statusText}>Not Visited</Text>
            )}
            {item.status === 'Fully paid' && (
              <Text style={styles.statusText}>Fully Paid</Text>
            )}
            {item.status === 'Shifted' && (
              <Text style={styles.statusText}>Shifted</Text>
            )}
            {item.status === 'Not Contactable' && (
              <Text style={styles.statusText}>Not Contactable</Text>
            )}
            {item.status === 'Others' && (
              <Text style={styles.statusText}>Others</Text>
            )}
            {showIcons && !item.isAccepted && !item.isRejected && (
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => onAcceptCase(item)}>
                  <AcceptedSvg />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.rejectedIcon}
                  onPress={() => onRejectCase(item)}
                >
                  <RejectedSvg />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      )
    )};
    

  const handleSeeAll = () => {
    setShowAll(!showAll);
  };

  const displayCases = showAll ? cases : cases.slice(0, 4);

  return (
    <FlatList
      data={displayCases}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={handleSeeAll}
            style={styles.buttonContainer}
          >
            <LinearGradient
              colors={['#55D1A4', '#14C67B', 'rgba(76, 188, 66, 0.768627)']}
              style={styles.linearGradient}
            >
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>
                  {showAll ? 'See Less' : 'See All'}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  caseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F4E8E8',
    borderRadius: 6,
    padding: 10,
    marginVertical: 3,
    boxShadow: '0px 10px 17px -10px rgba(39, 30, 28, 0.73)',
  },
  caseInfo: {
    flexDirection: 'column',
    flex: 1,
  },
  customerName: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  portfolio: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#919191',
    marginTop: 4,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  locator: {
    marginRight: 8,
  },
  address: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#000000',
    flex: 1,
    flexWrap: 'wrap',
  },
  emiContainer: {
    alignItems: 'flex-end',
  },
  emi: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#000000',
  },
  footerContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: width * 0.9,
    height: 49,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rejectedIcon: {
    marginLeft: 10,
  },
});

export default CaseListComponent;
