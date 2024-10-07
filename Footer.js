// src/components/Footer.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.footerText}>🔍 Scan</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text style={styles.footerText}>ℹ️ About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderTopWidth: 1,
    borderTopColor: '#E7E7E7',
  },
  footerText: {
    fontSize: 18,
    color: '#1E90FF',
  },
});

export default Footer;