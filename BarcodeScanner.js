import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { interpretScan, dummyFunction } from './Decoder.js';
import axios from 'axios';

export default function BarcodeScanner({ navigation }) {
  const [barcodeData, setBarcodeData] = useState(null);
  const [parsedData, setParsedData] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false); // Flag to avoid multiple scans
  const [loading, setLoading] = useState(false); // Spinner state

  const handleBarcodeRead = async ({ data }) => {
    if (isProcessing) return;  // Prevent multiple scans
    setIsProcessing(true); // Set processing flag

    try {
      const parsedcode = interpretScan(data);
      setParsedData(parsedcode);

      const gtinObject = parsedcode.ol.find(item => item.label === 'GTIN');
      const serialObject = parsedcode.ol.find(item => item.label === 'SERIAL');

      if (gtinObject && serialObject) {
        setLoading(true); // Show spinner

        const apiPayload = {
          barcode: gtinObject.value,
          Serial: serialObject.value
        };

        console.log("Sending API Payload:", apiPayload);

        // Axios POST request
        axios.request({
          method: 'POST',       // Specify the method

         url: 'https://zammsawms.co.zm:10443/api/mobileapi',

          //url : 'https://run.mocky.io/v3/02d9f397-2fff-4c69-a3f5-5e7897ead7fc',

          data: apiPayload,   // Payload to send
          headers: {
            'Content-Type': 'application/json',  // Custom headers
            'ApiKey': '40b489ce-10b7-4eee-86b1-01287e1c0648' // Optional authentication token
          }
        })
        .then(response => {
          // Handle success
          console.log('API Response:', response.data);

          const apiData = response.data;

          if (apiData.status === 'Item serial not found') {
              // Navigate to SerialNotFoundScreen with necessary data
              navigation.navigate('SerialNotFoundScreen', {
                gtin: gtinObject.value,
                serial: serialObject.value
              });
            } else {
          // Process the API data
          parsedcode.ol.unshift({
            label: 'PRODUCT NAME',
            value: apiData.skuDescription,
          });
          parsedcode.ol.splice(1, 0, {
            label: 'SKU',
            value: apiData.sku,
          });
          parsedcode.ol.push({
            label: 'VERIFICATION STATUS',
            value: apiData.status,
          });

          // Navigate to BarcodeDataScreen with the updated parsedcode
          navigation.navigate('BarcodeDataScreen', { parsedcode });
          }
        })
        .catch(error => {
          if (error.response) {
            // Server responded with a status code outside the 2xx range
            console.error('Error response data:', error.response.data);
            console.error('Error status:', error.response.status);
            console.error('Error headers:', error.response.headers);
          } else if (error.request) {
            // Request was made, but no response received
            console.error('No response received:', error.request);
          } else {
            // Something happened in setting up the request
            console.error('Error message:', error.message);
          }

          // Log the entire error object for debugging purposes
          console.error('Full error object:', error);
        })
        .finally(() => {
          setLoading(false); // Hide spinner
          setIsProcessing(false); // Reset processing state
        });

      } else {
        console.error("GTIN or Serial not found.");
        setIsProcessing(false);
      }
    } catch (error) {
      console.error("Error during barcode processing:", error);
      setIsProcessing(false);
    }
  };

  const handleRetry = () => {
    setBarcodeData(null);
    setParsedData(null);
    setIsCameraActive(true); // Turn the camera back on
    setIsProcessing(false); // Reset the processing flag
  };

  return (
    <View style={styles.container}>
      {isCameraActive ? (
        <RNCamera
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          onBarCodeRead={handleBarcodeRead}
        >
          <View style={styles.overlay}>
            <View style={styles.topOverlay} />
            <View style={styles.middleOverlay}>
              <View style={styles.sideOverlay} />
              <View style={styles.focusedArea} />
              <View style={styles.sideOverlay} />
            </View>
            <View style={styles.bottomOverlay} />
          </View>

          {loading && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          )}
        </RNCamera>
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          {parsedData && (
            <View style={styles.fieldContainer}>
              {parsedData.ol.map((aidata) => (
                <View key={aidata.label} style={styles.fieldContainer}>
                  <Text style={styles.label}>{aidata.label}: {aidata.value}</Text>
                </View>
              ))}
            </View>
          )}
          <Button title="Scan Again" onPress={handleRetry} />
        </ScrollView>
      )}
    </View>
  );
}

const { width } = Dimensions.get('window');
const overlayColor = 'rgba(0, 0, 0, 0.7)'; // Dark overlay color

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topOverlay: {
    flex: 1,
    backgroundColor: overlayColor,
    width: '100%',
  },
  middleOverlay: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomOverlay: {
    flex: 1,
    backgroundColor: overlayColor,
    width: '100%',
  },
  sideOverlay: {
    flex: 1,
    backgroundColor: overlayColor,
  },
  focusedArea: {
    width: width * 0.5,
    height: width * 0.5,
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: 'transparent',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  fieldContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
});