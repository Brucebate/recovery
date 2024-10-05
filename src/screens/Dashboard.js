import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import DashboardHeader from '../components/DashboardHeader';
import DashboardFooter from '../components/DashboardFooter';
import FixedDashboard from '../components/FixedDashboard';
import ScrollableDashboard from '../components/ScrollableDashboard';

const { width, height } = Dimensions.get('window'); // Get device dimensions

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <DashboardHeader/>
            <FixedDashboard/>
            <ScrollableDashboard/>
            <DashboardFooter/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
    },
    mainContent: {
        flexGrow: 1,
        paddingBottom: height * 0.08, // Padding relative to screen height (8%)
    }
});

export default Dashboard;

