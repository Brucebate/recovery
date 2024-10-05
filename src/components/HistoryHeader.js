import React, {useState} from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import LeftArrowSvg from '../assets/svgs/LeftArrow.svg';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use your back arrow SVG
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const HistoryHeader = () => {

    const [hasNotifications, setHasNotifications] = useState(true);

    const navigation = useNavigation();

    const handleBackToDashboard = () => {
        navigation.navigate('Dashboard');
    }

    return (
        <View style={styles.headerContainer}>
            <View style={styles.userSection}>
                <TouchableOpacity style={styles.vector} onPress={handleBackToDashboard} >
                    <LeftArrowSvg />
                </TouchableOpacity>
                <Text style={styles.textName}>History</Text>
            </View>
            <TouchableOpacity style={styles.notificationIcon}>
            <Icon name="bell"  size={width * 0.07} color="black"/>
                {hasNotifications && <View style={styles.notificationBadge} />}
            </TouchableOpacity>
        
        </View>
    );
};

const styles = StyleSheet.create({
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
    vector: {
        marginTop: height * 0.01,
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
        top: -height * 0.005,  // Badge position relative to icon size
        width: width * 0.025,  // Badge width relative to screen width
        height: width * 0.025, // Badge height relative to screen width
        borderRadius: width * 0.015, // Half of width for perfect circle
        backgroundColor: 'red',
    },

    vector: {
        padding: width * 0.02,
    },
});

export default HistoryHeader;
