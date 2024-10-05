
import React, {useState} from 'react';
import { View, Text, Alert, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ProfileHeader from '../components/ProfileHeader';
import DashboardFooter from '../components/DashboardFooter';
import Vector2 from '../assets/svgs/Vector2.svg';
import LogoutSvg from '../assets/svgs/Logout.svg';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'


const { width, height } = Dimensions.get('window');

const ProfilePage = () => {

    const [userDetails, setuserDetails] = useState({
        name: 'FOS Name',
        empId: 'THC0001',
        gmailId: 'userxxxxx@gmail.com',
    })

    const fetchUserDetails = async () => {
        try {

        const response = await axios.get("");
        setuserDetails(response.data);

        }catch(error) {
            console.error('Error fetching data:', error)
        }
    }

    const navigation = useNavigation();

    
    const handleLogout = () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to logout.",
            [
                {
                    text: "Cancel",
                    onPress: () => {navigation.navigate('ProfilePage')},
                    style: "cancel",
                }, 
                {
                    text: "Logout",
                    onPress: () => {navigation.navigate('Login')}
                }
            ]
        )
    };

    return (
        <View style={styles.container}>
            <ProfileHeader />
            <View style={styles.ProfileInfo}>
                <LinearGradient
                    colors={['#55D1A4', '#14C67B', '#4CBC42']} // Gradient colors
                    style={styles.gradientBackground} // Apply gradient styling
                >
                    <View style={styles.vectorContainer}>
                        <Vector2 style={styles.vector} />
                    </View>
                </LinearGradient>
                <View style={styles.info}>
                    <Text style={styles.name}>{userDetails.name}</Text>
                    <Text style={styles.empId}>{userDetails.empId}</Text>
                    <Text style={styles.gmail}>{userDetails.gmailId}</Text>
                </View>
            </View>
            <View style={styles.logoutContainer}>
                <TouchableOpacity onPress={handleLogout} style={styles.buttonContainer}>
                    <LinearGradient
                        colors={['#55D1A4', '#14C67B', 'rgba(76, 188, 66, 0.768627)']}
                        style={styles.linearGradient}
                    >
                        <View style={styles.buttonContent}>
                            <LogoutSvg style={styles.logoutLogo} />
                            <Text style={styles.buttonText}>Logout</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
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
    ProfileInfo: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
        // paddingTop: height * 0.1, // Space from the top to accommodate the header
    },
    gradientBackground: {
        width: width * 0.3, // Responsive circle width
        height: width * 0.3, // Responsive circle height (same as width for a circle)
        borderRadius: (width * 0.3) / 2, // Half of width to make it circular
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: height * 0.03, // Space below the gradient
    },
    vectorContainer: {
        width: '80%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18,
    },
    vector: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    info: {
        alignItems: 'center',
        marginTop: height * 0.02, // Space above the text elements
    },
    name: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 24,
        textAlign: 'center',
        color: '#000000',
        marginBottom: 8, // Space between text elements
    },
    empId: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        textAlign: 'center',
        color: '#000000',
        marginBottom: 8, // Space between text elements
    },
    gmail: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        textAlign: 'center',
        color: '#000000',
    },
    logoutContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: height * 0.10, // Space from the bottom to accommodate footer
    },
    buttonContainer: {
        width: width * 0.9, // Responsive width
        height: 49,
    },
    linearGradient: {
        flex: 1,
        borderRadius: 36,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: 16,
        flexDirection: 'row', // Ensure horizontal alignment inside the gradient
    },
    buttonContent: {
        flexDirection: 'row', // Ensure the logo and text are in a row
        alignItems: 'center',
        justifyContent: 'center', // Center align both logo and text
    },
    logoutLogo: {
        width: 24,
        height: 24,
        marginRight: 8, // Space between the logo and text
    },
    buttonText: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        color: '#000000', // Explicitly set text color to black
    },
    vector: {
        padding: width * 0.02,
    },
});

export default ProfilePage;
