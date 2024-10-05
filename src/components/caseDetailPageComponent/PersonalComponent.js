

import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import LocationSvg from '../../assets/svgs2/location.svg';

const { width, height } = Dimensions.get('window');

// Helper function to split the address into lines with a fixed number of characters
const splitAddress = (address, lineLength) => {
  if (!address) return [];
  const regex = new RegExp(`.{1,${lineLength}}`, 'g'); // Regex to split by the given number of characters
  return address.match(regex) || [];
};

const PersonalComponent = ({ caseDetails }) => {
  const addressLines = splitAddress(caseDetails.address, 27);

  return (
    <View style={styles.container}>
      {/* Frame 89 - About */}
      <View style={styles.about}>
        <Text style={styles.aboutText}>About</Text>
      </View>

      {/* Frame 79 - Product */}
      <View style={styles.row}>
        <Text style={styles.label}>Product</Text>
        <Text style={styles.value}>Personal Loan</Text>
      </View>

      {/* Frame 80 - Bucket */}
      <View style={styles.row}>
        <Text style={styles.label}>Bucket</Text>
        <Text style={styles.value}>Postdue</Text>
      </View>

      {/* Frame 81 - Nationality */}
      <View style={styles.row}>
        <Text style={styles.label}>Nationality</Text>
        <Text style={styles.value}>Indian</Text>
      </View>

      {/* Frame 82 - Gender */}
      <View style={styles.row}>
        <Text style={styles.label}>Gender</Text>
        <Text style={styles.value}>N/A</Text>
      </View>

      {/* Frame 90 - Address Section */}
      <View style={styles.addressContainer}>
        <Text style={styles.addressHeader}>Residential Address</Text>

        {/* Address Details */}
        <View style={styles.addressRow}>
          <Text style={styles.label}>Address</Text>
          <View style={styles.addressContent}>
            {addressLines.map((line, index) => (
              <Text key={index} style={styles.addressValue}>
                {line}
              </Text>
            ))}
            <View style={styles.mapWap}>
              <LocationSvg />
              <TouchableOpacity style={styles.viewMapTouch}>
                <Text style={styles.viewOnMap}>View On Map</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* City */}
        <View style={styles.addressRow}>
          <Text style={styles.label}>City</Text>
          <Text style={styles.value}>Hyderabad</Text>
        </View>

        {/* State */}
        <View style={[styles.addressRow, { borderBottomWidth: 0 }]}>
          <Text style={styles.label}>State</Text>
          <Text style={styles.value}>Telangana</Text>
        </View>
      </View>

      <View style={styles.office}>
        <Text style={styles.officeText}>Office Address</Text>
      

        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>N/A</Text>
        </View>

    
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <Text style={styles.value}>N/A</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>State</Text>
          <Text style={styles.value}>N/A</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>N/A</Text>
        </View>
      </View>

      <View style={styles.additional}>
        <Text style={styles.additionalText}>Additional Details</Text>
      

        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>N/A</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>N/A</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>phone</Text>
          <Text style={styles.value}>N/A</Text>
        </View>

        
      </View>

      <View style={styles.additional}>
        <Text style={styles.additionalText}></Text>
      

        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>N/A</Text>
        </View>
        
        
      </View>

      

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 14,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginTop: 0,
    overflow: 'hidden',
  },
  about: {
    marginBottom: 10,
  },
  aboutText: {
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
  addressContainer: {
    marginTop: 20,
    paddingVertical: height * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: '#D2D2D2',
  },
  addressHeader: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: width * 0.045,
    lineHeight: width * 0.06,
    color: '#000',
    marginBottom: height * 0.01,
  },
  addressRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: height * 0.015,
    borderBottomWidth: 1,
    borderBottomColor: '#D2D2D2',
    minHeight: height * 0.07,
  },
  addressValue: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: width * 0.038,
    lineHeight: width * 0.055,
    color: '#000',
  },
  viewOnMap: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: width * 0.04,
    lineHeight: width * 0.055,
    color: '#4CBC42',
    textAlign: 'right',
    marginTop: height * 0.00,
    marginLeft: width * 0.01,
  },
  addressContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingLeft: 10, // Padding between label and address content
  },
  mapWap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  additionalText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: width * 0.045,
    lineHeight: width * 0.06,
    color: '#000',
    // top: 10,
  },
  additional : {
    top: 60,
  },
  officeText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: width * 0.045,
    lineHeight: width * 0.06,
    color: '#000',
    // top: 10,
  },
  office : {
    top: 30,
  }
});

export default PersonalComponent;
