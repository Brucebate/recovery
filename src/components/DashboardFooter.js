// import React, {useState} from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import Home from '../assets/svgs/Home.svg'
// import Contest from '../assets/svgs/Contest.svg'
// import Earnings from '../assets/svgs/Earnings.svg'
// import History from '../assets/svgs/History.svg'




// const DashboardFooter = () => {


//     return (
//     <View style={styles.footerContainer}>
//         <TouchableOpacity style={styles.iconWrapper}>
//             <Home style={styles.icon}/>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconWrapper}>
//             <Contest style={styles.icon}/>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.icoWrapper}>
//             <Earnings style={styles.icon}/>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconWrapper}>
//             <History style={styles.icon}/>
//         </TouchableOpacity>
        

//     </View>
//     );
// };


// const styles = StyleSheet.create({
//     footerContainer: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         width: '100%',
//         height: 44,
//         borderTopWidth: 1,
//         borderTopColor: 'rgba(0, 0, 0, 0.24)',
//         backgroundColor: '#ffffff',
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         paddingHorizontal: 10,
//         elevation: 4, // For drop shadow on Android
//         shadowColor: '#1D1C1C', // For drop shadow on iOS
//         shadowOffset: { width: 4, height: 4 },
//         shadowOpacity: 0.5,
//         shadowRadius: 5,
//     },
//     iconWrapper: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     icon: {
//         width: 24, // Adjust the width and height according to your SVG sizes
//         height: 24,
//     },
// });



// export default DashboardFooter;


import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import HomeSvg from '../assets/svgs/Home.svg';
import ContestSvg from '../assets/svgs/Contest.svg';
import EarningsSvg from '../assets/svgs/Earnings.svg';
import HistorySvg from '../assets/svgs/History.svg';
import { useNavigation } from '@react-navigation/native';


const DashboardFooter = () => {

    const navigation = useNavigation();

    const handleHomePage = () => {
        navigation.navigate('Dashboard')
    }
    const handleHistoryPage = () => {
        navigation.navigate('HistoryPage')
    }
    const handleContestPage = () => {
        navigation.navigate('ContestPage')
    }
    const handleEarningsPage = () => {
        navigation.navigate('EarningsPage')
    }

    return (
        <View style={styles.footerContainer}  >
            <TouchableOpacity style={styles.iconWrapper} onPress={handleHomePage}>
                <HomeSvg style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper} onPress={handleContestPage} >
                <ContestSvg style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper} onPress={handleEarningsPage}>
                <EarningsSvg style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper} onPress={handleHistoryPage}>
                <HistorySvg style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 60, // Increased height for better touchability
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.24)',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        elevation: 4, // For drop shadow on Android
        shadowColor: '#1D1C1C', // For drop shadow on iOS
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    iconWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 24, // Adjust the width and height according to your SVG sizes
        height: 24,
    },
});

export default DashboardFooter;
