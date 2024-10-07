import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const InvalidBarcodeScreen = ({ navigation }) => {

  const handleOKPress = () => {
    // Navigate to the home screen or any other action
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Scan Barcode</Text>
      </View>

      {/* Coat of Arms Image */}
      <Image
        style={styles.image}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_Zambia.svg/1200px-Coat_of_arms_of_Zambia.svg.png' }}
      />

      {/* Message Box */}
      <View style={styles.messageBox}>
        <Text style={styles.title}>Invalid Barcode</Text>
        <Text style={styles.message}>
          The barcode you scanned is not a GS1 barcode.
        </Text>
      </View>

      {/* OK Button */}
      <TouchableOpacity style={styles.okButton} onPress={handleOKPress}>
        <Text style={styles.okButtonText}>OK</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <Text style={styles.navText}>Scan</Text>
        <Text style={styles.navText}>About</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    padding: 15,
    backgroundColor: '#3B5998',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  messageBox: {
    width: '90%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
  },
  okButton: {
    width: '50%',
    marginVertical: 20,
    backgroundColor: '#3B5998',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  okButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navText: {
    fontSize: 16,
  },
});

export default InvalidBarcodeScreen;