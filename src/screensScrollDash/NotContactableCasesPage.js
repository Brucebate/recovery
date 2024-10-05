

import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import DashboardFooter from '../components/DashboardFooter'; // Ensure the path is correct
import LeftArrowSvg from '../assets/svgs/LeftArrow.svg';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CaseListComponent from '../components/CasesListComponent';

const { width, height } = Dimensions.get('window');

const NotContactableCasesPage = () => {
    const [hasNotifications, setHasNotifications] = useState(true);
    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    const handleBackToDashboard = () => {
        // navigation.navigate('Dashboard');
        navigation.navigate('Dashboard', { notContactableCasesCount: cases.length })
    };

    useEffect(() => {
        // Simulating data fetching
        const fetchNotContactableCases = async () => {
            try {
                // Sample data to simulate API response
                const sampleCases = [
                    {
                        id: 1,
                        customerName: 'John Doe',
                        portfolio: 'Poonawala',
                        address: '123 Main Street, City',
                        emi: 2000,
                        status: 'Not Contactable'
                        
                    },
                    {
                        id: 2,
                        customerName: 'Jane Smith',
                        portfolio: 'Poonawala',
                        address: '123 Main Street, City Hyderabad',
                        emi: 5000,
                        status: 'Not Contactable',
                        
                    },
                    {
                        id: 3,
                        customerName: 'Robert Brown',
                        portfolio: 'Poonawala',
                        address: '123 Main Street, City',
                        emi: 3000,
                        status: 'Not Contactable',
                    },
                    {
                        id: 4,
                        customerName: 'Emily Davis',
                        portfolio: 'Poonawala',
                        address: '123 Main Street, City',
                        emi: 1500,
                        status: 'Not Contactable',
                    },
                    {
                        id: 5,
                        customerName: 'Michael Wilson',
                        portfolio: 'Poonawala',
                        address: '123 Main Street, City',
                        emi: 4000,
                        status: 'Not Contactable',
                    },
                ];

                setTimeout(() => {
                    setCases(sampleCases);
                    setLoading(false);
                }, 1000); // Simulating 1 second delay
            } catch (error) {
                console.error('Error fetching Not Contactable cases:', error);
                setLoading(false);
            }
        };

        fetchNotContactableCases();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.userSection}>
                    <TouchableOpacity style={styles.vector} onPress={handleBackToDashboard}>
                        <LeftArrowSvg />
                    </TouchableOpacity>
                    <Text style={styles.textName}>Not Contactable Cases</Text>
                </View>
                <TouchableOpacity style={styles.notificationIcon}>
                    <Icon name="bell" size={width * 0.07} color="black" />
                    {hasNotifications && <View style={styles.notificationBadge} />}
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" /> // Loader while fetching cases
                ) : (
                    <CaseListComponent
                        cases={cases}
                        // showIcons={true}
                        
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
        padding: width * 0.01,
        width: width * 0.1,
        height: width * 0.1,
    },
    notificationBadge: {
        position: 'absolute',
        right: -width * 0.00005,
        top: -height * 0.005,
        width: width * 0.025,
        height: width * 0.025,
        borderRadius: width * 0.015,
        backgroundColor: 'red',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: width * 0.05,
        marginTop: height * 0.02,
    },
    vector: {
        padding: width * 0.02,
    },
});

export default NotContactableCasesPage;
