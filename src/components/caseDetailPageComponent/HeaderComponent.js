
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

// const { width } = Dimensions.get('window');

// const HeaderComponent = ({ caseDetails }) => {
//   const [activeTab, setActiveTab] = useState('Personal'); // Default tab

//   // Function to handle tab changes
//   const handleTabPress = (tabName) => {
//     setActiveTab(tabName);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Customer Info */}
//       <Text style={styles.customerName}>{caseDetails.customerName || 'No Customer Name'}</Text>

//       <View style={styles.portfolioContainer}>
//         <Text style={styles.portfolio}>{caseDetails.portfolio || 'Portfolio N/A'}.</Text>
//         <Text style={styles.accountNumber}>{caseDetails.accountNumber || 'Account N/A'}</Text>
//       </View>

//       {/* Amount and Status */}
//       <View style={styles.AmountStatusContainer}>
//         <View style={styles.AmountSection}>
//           <Text style={styles.amountText}>Amount to be Collected</Text>
//           <Text style={styles.emiAmount}>{caseDetails.emi || '0'}</Text>
//         </View>
//         <View style={styles.StatusSection}>
//           <Text style={styles.statusText}>Status</Text>
//           <Text style={styles.status}>{caseDetails.status}</Text>
//         </View>
//       </View>

//       {/* Tabs */}
//       <View style={styles.tabsContainer}>
//         {/* Personal Tab */}
//         <TouchableOpacity
//           style={[styles.tabButton, activeTab === 'Personal' && styles.activeTab]}
//           onPress={() => handleTabPress('Personal')}
//         >
//           <Text style={[styles.tabText, activeTab === 'Personal' && styles.activeTabText]}>Personal</Text>
//         </TouchableOpacity>

//         {/* Loan Tab */}
//         <TouchableOpacity
//           style={[styles.tabButton, activeTab === 'Loan' && styles.activeTab]}
//           onPress={() => handleTabPress('Loan')}
//         >
//           <Text style={[styles.tabText, activeTab === 'Loan' && styles.activeTabText]}>Loan</Text>
//         </TouchableOpacity>

//         {/* History Tab */}
//         <TouchableOpacity
//           style={[styles.tabButton, activeTab === 'History' && styles.activeTab]}
//           onPress={() => handleTabPress('History')}
//         >
//           <Text style={[styles.tabText, activeTab === 'History' && styles.activeTabText]}>History</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     backgroundColor: '#fff',
//     paddingVertical: width * 0.05, // Responsive vertical padding
//     paddingHorizontal: width * 0.05, // Responsive horizontal padding
//   },
//   customerName: {
//     fontFamily: 'Poppins-Bold',
//     fontSize: width * 0.053, // Responsive font size
//     fontWeight: '700',
//     color: '#000',
//     marginBottom: width * 0.03, // Responsive margin
//   },
//   portfolioContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: width * 0.04, // Responsive margin
//     borderBottomWidth: 1,
//     borderBottomColor: '#77D7A3',
//     paddingBottom: width * 0.02, // Responsive padding
//   },
//   portfolio: {
//     fontFamily: 'Poppins-Medium',
//     fontSize: width * 0.04, // Responsive font size
//     color: '#000',
//     fontWeight: '500',
//   },
//   accountNumber: {
//     fontFamily: 'Poppins-Medium',
//     fontSize: width * 0.04, // Responsive font size
//     color: '#000',
//     fontWeight: '500',
//     marginLeft: width * 0.02, // Space between texts
//   },
//   amountText: {
//     fontFamily: 'Poppins-Medium',
//     fontSize: width * 0.045, // Responsive font size
//     color: '#333',
//     marginBottom: width * 0.01, // Responsive margin
//   },
//   emiAmount: {
//     fontFamily: 'Poppins-Bold',
//     fontSize: width * 0.041, // Responsive font size
//     color: '#0F6F41',
//   },
//   AmountStatusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   statusText: {
//     fontFamily: 'Poppins-Medium',
//     fontSize: width * 0.045, // Responsive font size
//     color: '#333',
//     marginBottom: width * 0.01, // Responsive margin
//   },
//   status: {
//     fontFamily: 'Poppins-Bold',
//     fontSize: width * 0.041, // Responsive font size
//     color: '#0F6F41',
//   },
//   // Tab styles
//   tabsContainer: {
//     flexDirection: 'row',
//     alignItems: 'stretch',
//     marginTop: width * 0.05, // Space above the tabs
//   },
//   tabButton: {
//     flex: 1, // Each tab will take equal space
//     borderBottomWidth: 1,
//     borderBottomColor: '#AAA6A6',
//     alignItems: 'center',
//     paddingVertical: width * 0.02, // Padding for the tab buttons
//   },
//   activeTab: {
//     borderBottomColor: '#1FD47D', // Active tab border color
//   },
//   tabText: {
//     fontFamily: 'Poppins',
//     fontSize: 13,
//     color: '#000',
//   },
//   activeTabText: {
//     color: '#1FD47D', // Active tab text color
//   },
// });

// export default HeaderComponent;




import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import PersonalComponent from './PersonalComponent'; // Import the Personal component
import LoanComponent from './LoanComponent'; // Import the Loan component
import HistoryComponent from './HistoryComponent'; // Import the History component
// import { useNavigation, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const HeaderComponent = ({ caseDetails }) => {
  const [activeTab, setActiveTab] = useState('Personal'); // Default tab

  // const navigation = useNavigation();
  // const route = useRoute();
  // const caseDetails = route.params.caseDetails;

  // Function to handle tab changes
  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const maskAccountNumber = (accountNumber) => {
    if (!accountNumber) return 'N/A'
    const accountNumberStr = accountNumber.toString(); // convert accountNumber into string
    const lastFourDigits = accountNumberStr.slice(-4); // get last four digit
    const maskedNumber = accountNumberStr.slice(0, -4).replace(/\d/g, 'x')
    return maskedNumber + lastFourDigits;
  }

  // Function to render the active tab's component
  const renderActiveTabComponent = () => {
    switch (activeTab) {
      case 'Personal':
        return <PersonalComponent caseDetails={caseDetails}/>;
      case 'Loan':
        return <LoanComponent caseDetails={caseDetails}/>;
      case 'History':
        return <HistoryComponent caseDetails={caseDetails}/>;
      default:
        return <PersonalComponent caseDetails={caseDetails} />; // Default to the Personal tab if none is selected
    }
  };

  return (
    <View style={styles.container}>
      {/* Customer Info */}
      <Text style={styles.customerName}>{caseDetails.customerName || 'No Customer Name'}</Text>

      <View style={styles.portfolioContainer}>
        <Text style={styles.portfolio}>{caseDetails.portfolio || 'Portfolio N/A'}.</Text>
        <Text style={styles.accountNumber}>{maskAccountNumber(caseDetails.accountNumber)}</Text>
      </View>

      {/* Amount and Status */}
      <View style={styles.AmountStatusContainer}>
        <View style={styles.AmountSection}>
          <Text style={styles.amountText}>Amount to be Collected</Text>
          <Text style={styles.emiAmount}>{caseDetails.emi || '0'}</Text>
        </View>
        <View style={styles.StatusSection}>
          <Text style={styles.statusText}>Status</Text>
          <Text style={styles.status}>{caseDetails.status}</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {/* Personal Tab */}
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Personal' && styles.activeTab]}
          onPress={() => handleTabPress('Personal')}
        >
          <Text style={[styles.tabText, activeTab === 'Personal' && styles.activeTabText]}>Personal</Text>
        </TouchableOpacity>

        {/* Loan Tab */}
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Loan' && styles.activeTab]}
          onPress={() => handleTabPress('Loan')}
        >
          <Text style={[styles.tabText, activeTab === 'Loan' && styles.activeTabText]}>Loan</Text>
        </TouchableOpacity>

        {/* History Tab */}
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'History' && styles.activeTab]}
          onPress={() => handleTabPress('History')}
        >
          <Text style={[styles.tabText, activeTab === 'History' && styles.activeTabText]}>History</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Active Tab Content */}
      <ScrollView style={styles.activeTabContent}>
        {renderActiveTabComponent()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: width * 0.03, 
    paddingHorizontal: width * 0.05,
    flex: 1, // Allow the container to take up the full screen height
  },
  customerName: {
    fontFamily: 'Poppins-Bold',
    fontSize: width * 0.053, 
    fontWeight: '700',
    color: '#000',
    marginBottom: width * 0.03,
  },
  portfolioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width * 0.04,
    borderBottomWidth: 1,
    borderBottomColor: '#77D7A3',
    paddingBottom: width * 0.02,
  },
  portfolio: {
    fontFamily: 'Poppins-Medium',
    fontSize: width * 0.04, 
    color: '#000',
    fontWeight: '500',
  },
  accountNumber: {
    fontFamily: 'Poppins-Medium',
    fontSize: width * 0.04, 
    color: '#000',
    fontWeight: '500',
    marginLeft: width * 0.02,
  },
  AmountStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amountText: {
    fontFamily: 'Poppins-Medium',
    fontSize: width * 0.045, 
    color: '#333',
    marginBottom: width * 0.01,
  },
  emiAmount: {
    fontFamily: 'Poppins-Bold',
    fontSize: width * 0.041,
    color: '#0F6F41',
  },
  statusText: {
    fontFamily: 'Poppins-Medium',
    fontSize: width * 0.045,
    color: '#333',
    marginBottom: width * 0.01,
  },
  status: {
    fontFamily: 'Poppins-Bold',
    fontSize: width * 0.041,
    color: '#0F6F41',
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: width * 0.05,
  },
  tabButton: {
    flex: 1, 
    borderBottomWidth: 1,
    borderBottomColor: '#AAA6A6',
    alignItems: 'center',
    paddingVertical: width * 0.02,
  },
  activeTab: {
    borderBottomColor: '#1FD47D',
  },
  tabText: {
    fontFamily: 'Poppins',
    fontSize: 13,
    color: '#000',
  },
  activeTabText: {
    color: '#1FD47D',
  },
  activeTabContent: {
    marginTop: width * 0.05,
    flex: 1, // Allow the active tab content to grow and take up space
  },
});

export default HeaderComponent;
