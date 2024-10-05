import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');



const HistoryComponent = ({caseDetails}) => {

    return (
        <View style={styles.container}>
            <View style={styles.allocation}>
                <Text style={styles.allocationText}>Allocation Details</Text>
            

                <View style={styles.row}>
                    <Text style={styles.label}>FOS ID</Text>
                    <Text style={styles.value}>N/A</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>FOS NAME</Text>
                    <Text style={styles.value}>N/A</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Assigned case by date</Text>
                    <Text style={styles.value}>N/A</Text>
                </View>

                
            </View>

            <View style={styles.lastPayment}>
                <Text style={styles.lastPaymentText}>Disbursement Details</Text>
            

                <View style={styles.row}>
                    <Text style={styles.label}> Last Payment Amount</Text>
                    <Text style={styles.value}>N/A</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Last Payment Mode</Text>
                    <Text style={styles.value}>N/A</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Last Payment Date</Text>
                    <Text style={styles.value}>N/A</Text>
                </View>
            </View>

      </View>
    )

}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 14,
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginTop: 0,
        overflow: 'hidden',
      },
      allocation: {
        marginBottom: 10,
      },
      allocationText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: width * 0.045,
        lineHeight: width * 0.06,
        color: '#000',
      },
      lastPayment: {
        marginBottom: 10,
        top: 15,
      },
      lastPaymentText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: width * 0.045,
        lineHeight: width * 0.06,
        color: '#000',
      },
      row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: height * 0.015,
        borderBottomWidth: 1,
        borderBottomColor: '#D2D2D2',
        minHeight: height * 0.07,
      },
      label: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: width * 0.04,
        lineHeight: width * 0.055,
        color: '#605E5E',
        marginRight: 10, // Adding space between label and content
      },
      value: {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: width * 0.04,
        lineHeight: width * 0.055,
        color: '#000',
        textAlign: 'right',
        flexShrink: 1,
      },

})

export default HistoryComponent;