
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
        navigation.navigate('Dashboard');
    };

    useEffect(() => {
        // Sample cases data for testing
        const sampleCases = [
            {
                id: 1,
                customerName: 'John Doe',
                portfolio: 'Portfolio A',
                address: '123 Main Street, City',
                emi: 12000,
            },
            {
                id: 2,
                customerName: 'Jane Smith',
                portfolio: 'Portfolio B',
                address: '456 Park Avenue, City',
                emi: 15000,
            },
            {
                id: 3,
                customerName: 'Michael Brown',
                portfolio: 'Portfolio C',
                address: '789 Oak Lane, City',
                emi: 11000,
            },
            {
                id: 4,
                customerName: 'Emily White',
                portfolio: 'Portfolio D',
                address: '101 Pine Street, City',
                emi: 17000,
            },
            {
                id: 5,
                customerName: 'Alice Johnson',
                portfolio: 'Portfolio E',
                address: '202 Maple Road, City',
                emi: 14000,
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
                        <Icon name="bell" size={24} color="#000000" /> {/* Notification icon */}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.casesContainer}>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <CaseListComponent cases={cases} showIcons={true} />
                )}
            </View>
            <DashboardFooter />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    userSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    vector: {
        marginRight: 10,
    },
    textName: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '600',
    },
    BothIcon: {
        flexDirection: 'row',
    },
    PaperPlaneIcon: {
        marginRight: 20,
    },
    notificationIcon: {
        marginRight: 20,
    },
    casesContainer: {
        flex: 1,
    },
});

export default TodaysCasesPage;