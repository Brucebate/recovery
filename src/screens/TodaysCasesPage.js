

import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import DashboardFooter from '../components/DashboardFooter'; // Ensure the path is correct
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import LeftArrowSvg from '../assets/svgs/LeftArrow.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import PaperPlaneSvg from '../assets/svgs2/PaperPlane.svg';
import CaseListComponent from '../components/CasesListComponent';

const { width, height } = Dimensions.get('window');

const TodaysCasesPage = () => {
    const navigation = useNavigation();

    const [hasNotifications, setHasNotifications] = useState(true);
    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleBackToDashboard = () => {
        // navigation.navigate('Dashboard');
        navigation.navigate('Dashboard', { todaysCasesCount: cases.length }); // to change cases number 
    };

    const handleCasePress = (item) => {
        if (item.isAccepted) {
            navigation.navigate('CasesDetailsPage', {caseDetails: item}) ///Navigate to the details page with the cases data
        }
        else {
            alert("Please Accept the case first");
        }
    }

    // Handle rejecting a case
    const handleRejectCase = async (rejectedCase) => {
        try {
            // Update case status in the database
            await axios.post('http://your-backend-url/api/cases/reject', {
                caseId: rejectedCase.id,
            });

            // Update the rejected state for the specific case
            setCases((prevCases) =>
                prevCases.map((caseItem) =>
                    caseItem.id === rejectedCase.id
                        ? { ...caseItem, isRejected: true, isAccepted: false }
                        : caseItem
                )
            );

            // Optionally, navigate to the history page with the rejected case data
            navigation.navigate('TodaysHistoryPage', { rejectedCases: [rejectedCase] });

        } catch (error) {
            console.error('Error rejecting case:', error);
        }
    };

    // Handle accepting a case  Backend code 
    // const handleAcceptCases = async (acceptedCase) => {
    //     try {
    //         // Update case status in the database
    //         await axios.post('http://your-backend-url/api/cases/accept', {
    //             caseId: acceptedCase.id,
    //         });

    //         // Update the accepted state for the specific case
    //         setCases((prevCases) =>
    //             prevCases.map((caseItem) =>
    //                 caseItem.id === acceptedCase.id
    //                     ? { ...caseItem, isAccepted: true, isRejected: false, showIcons: false }
    //                     : caseItem
    //             )
    //         );
    //     } catch (error) {
    //         console.error('Error accepting case:', error);
    //     }
    // };

    const handleAcceptCases = (acceptedCase) => {
        // Update the accepted state for the specific case and hide the icons
        setCases((prevCases) =>
            prevCases.map((caseItem) =>
                caseItem.id === acceptedCase.id
                    ? { ...caseItem, isAccepted: true, isRejected: false, showIcons: false } // Add `showIcons: false`
                    : caseItem
            )
        );
    };

    useEffect(() => {
        // Sample cases data for testing
        const sampleCases = [
            {
                id: 1,
                customerName: 'Bruce Wayne',
                portfolio: 'Portfolio A',
                address: 'Door No. 23, Peace Villa, Street No 123, Landlord near by Yashoda Hospital Somajiguda, Hyderabad, Telengana 500082',
                emi: 12000,
                accountNumber: 4389743878434,
                status: 'Unpaid',
                isAccepted: false,
                isRejected: false,
            },
            {
                id: 2,
                customerName: 'Jane Smith',
                portfolio: 'Portfolio B',
                address: '456 Park Avenue, City',
                emi: 15000,
                accountNumber: 43897438783333,
                isAccepted: false,
                isRejected: false,
            },
            {
                id: 3,
                customerName: 'Michael Brown',
                portfolio: 'Portfolio C',
                address: '789 Oak Lane, City',
                emi: 11000,
                accountNumber: 43897438784445,
                isAccepted: false,
                isRejected: false,
            },
            {
                id: 4,
                customerName: 'Emily White',
                portfolio: 'Portfolio D',
                address: '101 Pine Street, City',
                emi: 17000,
                accountNumber: 4389743434344,
                isAccepted: false,
                isRejected: false,
            },
            {
                id: 5,
                customerName: 'Alice Johnson',
                portfolio: 'Portfolio E',
                address: '202 Maple Road, City',
                emi: 14000,
                accountNumber: 4389744738493,
                isAccepted: false,
                isRejected: false,
            },
            {
                id: 6,
                customerName: 'Alice Johnson',
                portfolio: 'Portfolio E',
                address: '202 Maple Road, City',
                emi: 14000,
                accountNumber: 43897897389473,
                isAccepted: false,
                isRejected: false,
            }
        ];

        // Simulate data fetching
        setTimeout(() => {
            setCases(sampleCases);
            setLoading(false);
            
        }, 1000);
    }, []);

    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View style={styles.userSection}>
                <TouchableOpacity style={styles.vector} onPress={handleBackToDashboard}>
                    <LeftArrowSvg />
                </TouchableOpacity>
                <Text style={styles.textName}>Today's Cases</Text>
            </View>
            <View style={styles.BothIcon}>
                <TouchableOpacity style={styles.PaperPlaneIcon}>
                    <PaperPlaneSvg />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificationIcon}>
                    <Icon name="bell" size={width * 0.07} color="black" />
                    {hasNotifications && <View style={styles.notificationBadge} />}
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.contentContainer}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" /> // Loading indicator while fetching data
            ) : (
            
                <CaseListComponent
                    cases={cases}
                    showIcons={true}
                    isTouchable={true}
                    onCasePress={handleCasePress}
                    onRejectCase={handleRejectCase}
                    onAcceptCase={handleAcceptCases}
                />
            
            )}
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
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.03,
        height: height * 0.1,
        backgroundColor: '#ffffff',
    },
    userSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textName: {
        fontFamily: 'Mansalva',
        fontSize: width * 0.055,
        color: '#000',
        marginLeft: width * 0.03,
    },
    notificationIcon: {
        position: 'relative',
        padding: width * 0.01, // Responsive padding
        width: width * 0.1, // Width relative to screen width
        height: width * 0.1, // Height relative to screen width
    },
    notificationBadge: {
        position: 'absolute',
        right: -width * 0.00005, // Badge position relative to icon size
        top: -height * 0.005, // Badge position relative to icon size
        width: width * 0.025, // Badge width relative to screen width
        height: width * 0.025, // Badge height relative to screen width
        borderRadius: width * 0.015, // Half of width for perfect circle
        backgroundColor: 'red',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: width * 0.05,
        marginTop: height * 0.02,
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: width * 0.05,
        color: '#000000',
        marginBottom: height * 0.02,
    },
    vector: {
        padding: width * 0.02,
    },
    BothIcon: {
        flexDirection: 'row',
    }
});

export default TodaysCasesPage;
