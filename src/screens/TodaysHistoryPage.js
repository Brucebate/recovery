

// import React, { useState, useEffect } from 'react';
// import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
// import DashboardFooter from '../components/DashboardFooter'; // Ensure the path is correct
// import CasesListComponent from '../components/CasesListComponent';
// import LeftArrowSvg from '../assets/svgs/LeftArrow.svg';
// import { useNavigation } from '@react-navigation/native';
// // import axios from 'axios';

// const { width, height } = Dimensions.get('window');

// const TodaysHistoryPage = () => {
//   const navigation = useNavigation();

//   const [cases, setCases] = useState({
//     assigned: '0',
//     accepted: '0',
//     rejected: '0',
//     pending: '0',
//     visited: '0',
//   });

//   const [caseList, setCaseList] = useState([
//     {
//       id: 1,
//       customerName: 'Priyanshu',
//       portfolio: 'Poonawala',
//       address: 'Hyderabad, India',
//       emi: '0000',
//     },
//     {
//               id: 2,
//               customerName: 'Bruce Wayne',
//               portfolio: 'Poonawala',
//               address: 'Mumbai, India',
//               emi: '0000',
//             },
//             {
//                 id: 3,
//                 customerName: 'Thomas Shelby',
//                 portfolio:' Poonawala',
//                 address: 'Mumbai, India',
//                 emi: '0000',
//             },
//             {
//                 id: 4,
//                 customerName: 'Deverkonda Vijay Sai',
//                 portfolio: 'Poonawala',
//                 address: 'Mumbai, India',
//                 emi: '0000',
//             },
//             {
//                 id: 5,
//                 customerName: 'Deverkonda Vijay Sai',
//                 portfolio: 'Poonawala',
//                 address: 'Mumbai, India',
//                 emi: '0000',
//             },
//             {
//                 id: 6,
//                 customerName: 'Kumari Priya Bagti',
//                 portfolio: 'Poonawala',
//                 address: 'Siliguri, India',
//                 emi: '10000000',
//             },
//     // More sample data...
//   ]);

//   const [loading, setLoading] = useState(false);
//   const [selectedCaseType, setSelectedCaseType] = useState(null); // State to track selected case item

//   // Commented out the fetch logic for now until the backend is ready
//   const fetchCasesData = async () => {
//     try {
//       const response = await axios.get('put the api here');
//       const { assigned, accepted, rejected, pending, visited } = response.data;
//       setCases({ assigned, accepted, rejected, pending, visited });
//       setCaseList(response.data.caseData); // Assume caseData contains the list of cases
//       setLoading(false);
//     } catch (err) {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCasesData();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="black" />
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   const handleBackToHistory = () => {
//     navigation.goBack();
//   };

//   const handleCaseClick = (caseType) => {
//     setSelectedCaseType(caseType);
//     // You can add logic to filter caseList based on the selected caseType if needed.
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity style={styles.vector} onPress={handleBackToHistory}>
//           <LeftArrowSvg />
//         </TouchableOpacity>
//         <Text style={styles.textName}>Today's History</Text>
//       </View>

//       <View style={styles.contentContainer}>
//         <View style={styles.firstRow}>
//           <View style={styles.caseItem}>
//             <TouchableOpacity onPress={() => handleCaseClick('assigned')}>
//               <Text style={styles.caseNumber}>{cases.assigned}</Text>
//               <Text style={styles.caseName}>Assigned</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.caseItem}>
//             <TouchableOpacity onPress={() => handleCaseClick('accepted')}>
//               <Text style={styles.caseNumber}>{cases.accepted}</Text>
//               <Text style={styles.caseName}>Accepted</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.caseItem}>
//             <TouchableOpacity onPress={() => handleCaseClick('rejected')}>
//               <Text style={styles.caseNumber}>{cases.rejected}</Text>
//               <Text style={styles.caseName}>Declined</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.secondRow}>
//           <View style={styles.caseItem}>
//             <TouchableOpacity onPress={() => handleCaseClick('pending')}>
//               <Text style={styles.caseNumber}>{cases.pending}</Text>
//               <Text style={styles.caseName}>Pending</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.caseItem}>
//             <TouchableOpacity onPress={() => handleCaseClick('visited')}>
//               <Text style={styles.caseNumber}>{cases.visited}</Text>
//               <Text style={styles.caseName}>Visited</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {selectedCaseType && <CasesListComponent cases={caseList} showIcons={false}  />}
//       </View>

//       <DashboardFooter />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#ffffff',
//       flexDirection: 'column',
//     },
//     headerContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       paddingHorizontal: width * 0.03,
//       height: height * 0.1,
//       backgroundColor: '#ffffff',
//     },
//     textName: {
//       fontFamily: 'Mansalva',
//       fontSize: width * 0.055,
//       color: '#000',
//       marginLeft: width * 0.03,
//     },
//     contentContainer: {
//       flex: 1, // Ensure contentContainer takes up available space
//       backgroundColor: '#FFFFFF',
//       shadowColor: 'rgba(0, 0, 0, 0.25)',
//       shadowOffset: { width: 7, height: -6 },
//       shadowOpacity: 0.25,
//       borderRadius: 22,
//       paddingHorizontal: width * 0.05,
//       paddingVertical: height * 0.02,
//       paddingBottom: height * 0.08, // Increase bottom padding for footer visibility
//       elevation: 10, // Shadow for Android
//     },
//     caseItem: {
//       flex: 1,
//       marginHorizontal: width * 0.01,
//       padding: width * 0.03,
//       backgroundColor: '#f9f9f9',
//       borderRadius: 8,
//       elevation: 2,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.1,
//       shadowRadius: 3,
//       alignItems: 'center',
//     },
//     firstRow: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       marginBottom: height * 0.02,
//     },
//     secondRow: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       marginBottom: height * 0.02,
//     },
//     caseName: {
//       fontFamily: 'Poppins',
//       fontSize: width * 0.045,
//       color: '#4F4D4D',
//       textAlign: 'center',
//     },
//     caseNumber: {
//       fontFamily: 'Poppins',
//       fontSize: width * 0.04,
//       color: '#000000',
//       textAlign: 'center',
//       marginBottom: height * 0.01,
//     },
//     loadingContainer: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     errorContainer: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     errorText: {
//       color: 'red',
//       fontSize: width * 0.05,
//     },
//     vector: {
//       padding: width * 0.02,
//     },
//   });
  

// export default TodaysHistoryPage;










import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import DashboardFooter from '../components/DashboardFooter'; // Ensure the path is correct
import CasesListComponent from '../components/CasesListComponent';
import LeftArrowSvg from '../assets/svgs/LeftArrow.svg';
import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';

const { width, height } = Dimensions.get('window');

const TodaysHistoryPage = () => {
  const navigation = useNavigation();

  const [cases, setCases] = useState({
    assigned: '0',
    accepted: '0',
    rejected: '0',
    pending: '0',
    visited: '0',
  });

  const [caseList, setCaseList] = useState([
    {
      id: 1,
      customerName: 'Priyanshu',
      portfolio: 'Poonawala',
      address: 'Hyderabad, India',
      emi: '0000',
    },
    {
              id: 2,
              customerName: 'Bruce Wayne',
              portfolio: 'Poonawala',
              address: 'Mumbai, India',
              emi: '0000',
            },
            {
                id: 3,
                customerName: 'Thomas Shelby',
                portfolio:' Poonawala',
                address: 'Mumbai, India',
                emi: '0000',
            },
            {
                id: 4,
                customerName: 'Deverkonda Vijay Sai',
                portfolio: 'Poonawala',
                address: 'Mumbai, India',
                emi: '0000',
            },
            {
                id: 5,
                customerName: 'Deverkonda Vijay Sai',
                portfolio: 'Poonawala',
                address: 'Mumbai, India',
                emi: '0000',
            },
            {
                id: 6,
                customerName: 'Kumari Priya Bagti',
                portfolio: 'Poonawala',
                address: 'Siliguri, India',
                emi: '10000000',
            },
    // More sample data...
  ]);

  const [loading, setLoading] = useState(false);
  const [selectedCaseType, setSelectedCaseType] = useState(null); // State to track selected case item

  // Fetching logic commented out until backend is ready
  const fetchCasesData = async () => {
    try {
      const response = await axios.get('put the api here');
      const { assigned, accepted, rejected, pending, visited } = response.data;
      setCases({ assigned, accepted, rejected, pending, visited });
      setCaseList(response.data.caseData); // Assume caseData contains the list of cases
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCasesData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="black" />
        <Text>Loading...</Text>
      </View>
    );
  }

  const handleBackToHistory = () => {
    navigation.goBack();
  };

  const handleCaseClick = (caseType) => {
    setSelectedCaseType(caseType);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.vector} onPress={handleBackToHistory}>
          <LeftArrowSvg />
        </TouchableOpacity>
        <Text style={styles.textName}>Today's History</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.firstRow}>
          {['assigned', 'accepted', 'rejected'].map(type => (
            <View style={styles.caseItem} key={type}>
              <TouchableOpacity onPress={() => handleCaseClick(type)}>
                <Text style={styles.caseNumber}>{cases[type]}</Text>
                <Text style={styles.caseName}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.secondRow}>
          {['pending', 'visited'].map(type => (
            <View style={styles.caseItem} key={type}>
              <TouchableOpacity onPress={() => handleCaseClick(type)}>
                <Text style={styles.caseNumber}>{cases[type]}</Text>
                <Text style={styles.caseName}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {selectedCaseType && <CasesListComponent cases={caseList} showIcons={false} isTouchable={false} />}
      </View>

      <DashboardFooter />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      flexDirection: 'column',
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: width * 0.03,
      height: height * 0.1,
      backgroundColor: '#ffffff',
    },
    textName: {
      fontFamily: 'Mansalva',
      fontSize: width * 0.055,
      color: '#000',
      marginLeft: width * 0.03,
    },
    contentContainer: {
      flex: 1, // Ensure contentContainer takes up available space
      backgroundColor: '#FFFFFF',
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: { width: 7, height: -6 },
      shadowOpacity: 0.25,
      borderRadius: 22,
      paddingHorizontal: width * 0.05,
      paddingVertical: height * 0.02,
      paddingBottom: height * 0.08, // Increase bottom padding for footer visibility
      elevation: 10, // Shadow for Android
    },
    caseItem: {
      flex: 1,
      marginHorizontal: width * 0.01,
      padding: width * 0.03,
      backgroundColor: '#f9f9f9',
      borderRadius: 8,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      alignItems: 'center',
    },
    firstRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: height * 0.02,
    },
    secondRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: height * 0.02,
    },
    caseName: {
      fontFamily: 'Poppins',
      fontSize: width * 0.045,
      color: '#4F4D4D',
      textAlign: 'center',
    },
    caseNumber: {
      fontFamily: 'Poppins',
      fontSize: width * 0.04,
      color: '#000000',
      textAlign: 'center',
      marginBottom: height * 0.01,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorText: {
      color: 'red',
      fontSize: width * 0.05,
    },
    vector: {
      padding: width * 0.02,
    },
  });
  

export default TodaysHistoryPage;

