import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function SerialNotFoundScreen({ route, navigation }) {
  const { gtin, serial } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ZamVerify</Text>
      </View>
      <View style={styles.content}>
        <Image source={require('./Zambia_logo.png')} style={styles.logo} />
        <View style={styles.messageBox}>
          <Text style={styles.title}>Item Serial Not Found</Text>
          <Text style={styles.message}>
            A trade item with specific GTIN ({gtin}) and Serial ({serial}) is not found in the verification repository.
          </Text>
          <View style={styles.okLinkContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.okLink}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  messageBox: {
    borderWidth: 2,
    borderColor: '#1F3A93', // Color for thick border
    borderRadius: 10,
    padding: 20,
    width: '90%',
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },
  message: {
    fontSize: 17, // Increased font size
    color: '#333',
    textAlign: 'left',
    marginBottom: 15,
    width: '100%',
  },
  okLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  okLink: {
    fontSize: 16,
    color: '#1F3A93',
    textDecorationLine: 'underline',
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
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginBottom: 1,
  },
});