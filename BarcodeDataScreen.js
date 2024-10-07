import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function BarcodeDataScreen({ route, navigation }) {
  const { parsedcode } = route.params;


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ZamVerify</Text>
      </View>
      <View style={styles.content}>
        <Image source={require('./Zambia_logo.png')} style={styles.logo} />
        <View style={styles.tableContainer}>
          {parsedcode.ol.map((item, index) => (
            <React.Fragment key={index}>
              <View style={styles.tableRow}>
                <View style={styles.tableCellLabel}>
                  <Text style={styles.label}>{item.label}</Text>
                </View>
                <View style={styles.tableCellValue}>
                  <Text style={styles.value}>{item.value}</Text>
                </View>
              </View>
              {index < parsedcode.ol.length - 1 && <View style={styles.rowSeparator} />}
            </React.Fragment>
          ))}

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
  tableContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 1,
  },
  tableCellLabel: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  tableCellValue: {
    flex: 1,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  rowSeparator: {
    height: 2, // Increased thickness
    backgroundColor: '#000000', // Black color
    marginVertical: 1, // Spacing around the separator
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
});