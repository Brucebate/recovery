import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import DashboardIcon from '../assets/svgs/Dashboard.svg'; // Import your SVG
import BikeLogo from '../assets/svgs/bike.svg';
import RightArrow from '../assets/svgs/rightArrow.svg';
import AimLogo from '../assets/svgs/aim.svg';


const { width, height } = Dimensions.get('window'); // Get device width

const FixedDashboard = () => {
    const navigation = useNavigation();
    const route = useRoute();   /// using route here

    const [todaysCases, setTodaysCases] = useState(0);
    const [pendingCases, setPendingCases] = useState(0);
    const [attendedCases, setAttendedCases] = useState(0);

    const fetchCasesNumber = async () => {
        try {
            const response = await axios.get('')
            const data = response.data

            setTodaysCases = data.todaysCases;
            setPendingCases = data.pendingCases;
            setAttendedCases = data.attendedCases;
        }
        catch(error) {
            console.error('Error fetching cases data')
        }
    }

    useEffect(() => {
        fetchCasesNumber()
    },[])

    useEffect(() => {
        if (route.params?.todaysCasesCount) {
            setTodaysCases(route.params.todaysCasesCount);
        }
    }, [route.params?.todaysCasesCount]);

    useEffect(() => {
        if (route.params?.pendingCasesCount) {
            setPendingCases(route.params.pendingCasesCount);
        }
    }, [route.params?.attendedCasesCount]);

    useEffect(() => {   //this useEffet will show count on the dashboard of the cases inside the page
        if (route.params?.attendedCasesCount) {
            setAttendedCases(route.params.attendedCasesCount);
        }
    }, [route.params?.attendedCasesCount]);



    const handleTodaysCases = () => {
        navigation.navigate('TodaysCasesPage')
    }

    const handlePendingCases = () => {
        navigation.navigate('PendingCasesPage')
    }

    const handleAttendedCases = () => {
        navigation.navigate('AttendedCasesPage')
    }

    const handleButtonPress = () => {

    }

    const handleLivePress = () => {

    }

        return (
        <View style={styles.FixedContainer}>
            <View style={styles.Starter}>
                <Text style={styles.heading}>Dashboard</Text>
                <DashboardIcon style={styles.icon}/>   
            </View>
            <View style={styles.casesContainer}>
                <TouchableOpacity onPress={handleTodaysCases}>
                    <View style={styles.caseBox}>
                        <Text style={styles.caseNumber}>{todaysCases}</Text>
                        <Text style={styles.caseLabel}>Today's Cases</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePendingCases}>
                <View style={styles.caseBox}>
                    <Text style={styles.caseNumber}>{pendingCases}</Text>
                    <Text style={styles.caseLabel}>Pending Cases</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAttendedCases}>
                <View style={styles.caseBox}>
                    <Text style={styles.caseNumber}>{attendedCases}</Text>
                    <Text style={styles.caseLabel}>Attended Cases</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.mapButtonContainer}>
            <LinearGradient
                colors={['#55D1A4', '#14C67B', '#4CBC42']} // Gradient colors
                style={styles.buttonGradient} // Apply gradient styling
            >
                <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                    <BikeLogo style={styles.bikeLogo}/>
                    <Text style={styles.buttonText}>Today's Route Map</Text>
                    <RightArrow style={styles.rightArrowLogo}/>

                </TouchableOpacity>
            </LinearGradient>
            </View>
            <View style={styles.liveButtonContainer}>
            <LinearGradient
                colors={['#55D1A4', '#14C67B', '#4CBC42']} // Gradient colors
                style={styles.buttonGradient} // Apply gradient styling
            >
                <TouchableOpacity style={styles.button} onPress={handleLivePress}>
                    <AimLogo style={styles.bikeLogo}/>
                    <Text style={styles.buttonText}>Cases Near You</Text>
                    <RightArrow style={styles.rightArrowLogo}/>

                </TouchableOpacity>
            </LinearGradient>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    
    Starter: {
        width: '100%', // Full width
        height: height * 0.05, // 5% of screen height
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width * 0.05, // 5% padding relative to screen width
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        marginBottom: 10, 
    },
    heading: {
        fontFamily: 'Poppins',
        fontSize: width * 0.045, // Font size relative to screen width (4.5%)
        color: '#000000',
        textAlign: 'center',
    },
    icon: {
        width: width * 0.06, // 6% of screen width
        height: width * 0.06,
        marginLeft: 7,
    },
    casesContainer: {
        flexDirection: 'row', // Align cases horizontally
        justifyContent: 'space-around', // Evenly space the cases
        flexWrap: 'wrap', // Allow wrapping for smaller screens
        marginTop: 20,
    },
    caseBox: {
        alignItems: 'center',
        width: width * 0.3, // Set each case box to take up 30% of the screen width
        paddingVertical: height * 0.02, // 2% of screen height
        backgroundColor: '#ffffff', // Light background for contrast
        borderRadius: 8, // Rounded corners
        elevation: 2, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        marginBottom: 10, // Space between boxes
    },
    caseNumber: {
        fontFamily: 'Poppins',
        fontSize: width * 0.045, // Font size relative to screen width
        fontWeight: '400',
        color: '#000000',
        textAlign: 'center',
    },
    caseLabel: {
        fontFamily: 'Poppins',
        fontSize: width * 0.035, // Font size relative to screen width
        fontWeight: '400',
        color: '#4F4D4D',
        textAlign: 'center',
        marginTop: 5,
    },
    mapButtonContainer: {
        justifyContent: 'center', // Center the button content
        alignItems: 'center', // Center the button content
        marginTop: 20,
    },
    liveButtonContainer: {
        justifyContent: 'center', // Center the button content
        alignItems: 'center', // Center the button content
        marginTop: 5,
    },
    buttonGradient: {
        width: width * 0.9, // 90% of screen width
        borderRadius: 8,
        marginVertical: 5,
        justifyContent: 'center', // Center the button content
        alignItems: 'center', // Center the button content
    },
    button: {
        width: '100%', // Full width of the gradient container
        paddingVertical: height * 0.02, // 2% of screen height
        paddingHorizontal: width * 0.06, // 6% of screen width
        flexDirection: 'row', // Align logo and text horizontally
        alignItems: 'center', // Center logo and text vertically
        justifyContent: 'space-between', // Space between logo, text, and right arrow
    },
    bikeLogo: {
        width: width * 0.08, // 8% of screen width
        height: width * 0.08, // Keep the logo square
        marginRight: 8, // Space between logo and text
    },
    buttonText: {
        fontFamily: 'Poppins',
        fontSize: width * 0.04, // Font size relative to screen width
        fontWeight: '600',
        color: 'black',
    },
    rightArrowLogo: {
        width: width * 0.08, // 8% of screen width
        height: width * 0.08, // Keep the arrow square
        marginLeft: 8, // Space between text and right arrow
    },
});


export default FixedDashboard;
