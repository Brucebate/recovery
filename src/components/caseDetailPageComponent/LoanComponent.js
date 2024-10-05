import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');



const LoanComponent = ({caseDetails}) => {

    // Function to mask the account number
    const maskAccountNumber = (accountNumber) => {
        if (!accountNumber) return 'N/A'; // Handle case when accountNumber is not provided
       // Ensure the accountNumber is treated as a string
        const accountNumberStr = accountNumber.toString();

        // Mask all digits except the last 4
        const lastFourDigits = accountNumberStr.slice(-4);
        const maskedNumber = accountNumberStr.slice(0, -4).replace(/\d/g, 'x');
        return maskedNumber + lastFourDigits;
    };

    return (
        <View style={styles.container}>
            <View style={styles.collection}>
                <Text style={styles.collectionText}>Collection Details</Text>
            

                <View style={styles.row}>
                    <Text style={styles.label}>Collectable Amount</Text>
                    <Text style={styles.value}>₹ 10000</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Overdue Amount</Text>
                    <Text style={styles.value}>₹ 8525</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Paid</Text>
                    <Text style={styles.value}>₹ 2500</Text>
                </View>
            </View>

            <View style={styles.disbursement}>
                <Text style={styles.disbursementText}>Disbursement Details</Text>
            

                <View style={styles.row}>
                    <Text style={styles.label}> Loan Type</Text>
                    <Text style={styles.value}>Personal Loan</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Account Number</Text>
                    <Text style={styles.value}>{maskAccountNumber(caseDetails.accountNumber)}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Disbursed Amount</Text>
                    <Text style={styles.value}>₹ 2500</Text>
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
      collection: {
        marginBottom: 10,
      },
      collectionText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: width * 0.045,
        lineHeight: width * 0.06,
        color: '#000',
      },
      disbursement: {
        marginBottom: 10,
        top: 15,
      },
      disbursementText: {
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

export default LoanComponent;