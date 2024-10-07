import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ZamVerify</Text>
      </View>
      <View style={styles.content}>
        <Image source={require('./Zambia_logo.png')} style={styles.logo} />
        <Text style={styles.title}>Verification App 1.0</Text>
        <Text style={styles.description}>
          This app scans GS1 barcodes for health Commodities and verifies product serial
          against Verification Repository of Zambia.
        </Text>

      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('BarcodeScanner')}>

          <Text style={styles.footerButtonText}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>

          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  header: {
      backgroundColor: '#009E49',
      padding: 15,
      alignItems: 'center',
    },
    headerText: {
      color: '#ffffff',
      fontSize: 20,
      fontWeight: 'bold',
    },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
   logo: {
      width: 250,
      height: 250,
      marginBottom: 20,
      resizeMode: 'contain',
    },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  learnMoreButton: {
    backgroundColor: '#009E49',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },

  learnMoreButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#F2F2F2',
  },
  footerButton: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    width: '50%',
  },
  footerButtonText: {
    color: '#1F3A93',
    fontSize: 16,
    marginTop: 5,
  },
  icon: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});