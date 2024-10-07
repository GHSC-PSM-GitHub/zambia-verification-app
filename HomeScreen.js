import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ZamVerify</Text>
      </View>
      <View style={styles.content}>
        <Image source={require('./Zambia_logo.png')} style={styles.logo} />
        <Text style={styles.welcomeMessage}>Welcome to the Product Verification app of Zambia</Text>
        <TouchableOpacity style={styles.scanButton} onPress={() => navigation.navigate('BarcodeScanner')}>
          <Text style={styles.scanButtonText}>START SCAN</Text>
        </TouchableOpacity>
        <Text style={styles.guidanceText}>Press the Start Scan button to scan GS1 barcode. You will need an internet connection.</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('BarcodeScanner')}>

          <Text style={styles.footerButtonText}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('About')}>

          <Text style={styles.footerButtonText}>About</Text>
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
  welcomeMessage: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  scanButton: {
    backgroundColor: '#009E49',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  scanButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  guidanceText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
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
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginBottom: 1,
  },
});