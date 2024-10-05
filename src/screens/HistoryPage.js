

import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import HistoryHeader from '../components/HistoryHeader';
import DashboardFooter from '../components/DashboardFooter';
import Arrow from '../assets/svgs/arrow.svg';
import { useNavigation } from '@react-navigation/native';
import WorkLogo from '../assets/svgs2/working.svg';

const { width, height } = Dimensions.get('window');

const HistoryPage = () => {
    const navigation = useNavigation();

    const handleTodaysHistory = () => {
        navigation.navigate('TodaysHistoryPage');
    };

    const handleYesterdayHistory = () => {
        navigation.navigate('YesterdayHistoryPage');
    };

    const handleWeekHistory = () => {
        navigation.navigate('WeekHistoryPage');
    };

    const handleMonthHistory = () => {
        navigation.navigate('MonthHistoryPage');
    };

    return (
        <View style={styles.container}>
            <HistoryHeader />
            <View style={styles.historyContainer}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.historyItem} onPress={handleTodaysHistory}>
                        <Text style={styles.caseTitle}>Today's Cases</Text>
                        <Arrow style={styles.arrowLogo} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.historyItem} onPress={handleYesterdayHistory}>
                        <Text style={styles.caseTitle}>Yesterday's Cases</Text>
                        <Arrow style={styles.arrowLogo} />
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.historyItem} onPress={handleWeekHistory}>
                        <Text style={styles.caseTitle}>This Week's Cases</Text>
                        <Arrow style={styles.arrowLogo} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.historyItem} onPress={handleMonthHistory}>
                        <Text style={styles.caseTitle}>This Month's Cases</Text>
                        <Arrow style={styles.arrowLogo} />
                    </TouchableOpacity>
                </View>
                <WorkLogo style={styles.WorkLogo} />
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
    historyContainer: {
        flex: 1,
        paddingHorizontal: width * 0.05,
        marginTop: height * 0.02,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: height * 0.02,
    },
    historyItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: width * 0.03,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        width: width * 0.42,
        justifyContent: 'space-between',
    },
    caseTitle: {
        fontFamily: 'Poppins',
        fontSize: width * 0.045,
        color: '#000000',
    },
    arrowLogo: {
        width: width * 0.05,
        height: width * 0.05,
    },
    WorkLogo : {
        marginLeft : width * 0.05,
        marginTop : width * 0.05,
    },
    vector: {
        padding: width * 0.02,
    },
});

export default HistoryPage;
