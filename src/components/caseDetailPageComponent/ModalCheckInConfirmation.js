import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const CheckInConfirmationModal = ({visible, onCancel, onConfirm}) => {

    return (
        <Modal
          transparent={true}
          visible={visible}
          animationType="fade"
          onRequestClose={onCancel} // Handle modal close
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Confirm Check In</Text>
              <Text style={styles.modalText}>Are you sure you want to check in?</Text>
              
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onConfirm} style={styles.confirmButton}>
                  <Text style={styles.confirmButtonText}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      );

} 

const styles = StyleSheet.create({

    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)', // Dark overlay for the background
      },
      modalContainer: {
        width: width * 0.8,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#221919',
      },
      modalText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      cancelButton: {
        flex: 1,
        backgroundColor: '#F33D3D',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginRight: 10,
      },
      confirmButton: {
        flex: 1,
        backgroundColor: '#37C058',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
      },
      cancelButtonText: {
        color: 'black',
        fontSize: 16,

      },
      confirmButtonText: {
        color: 'black',
        fontSize: 16,
      },

})

export default CheckInConfirmationModal