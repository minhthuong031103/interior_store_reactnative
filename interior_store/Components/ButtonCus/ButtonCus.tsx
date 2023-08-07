import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../constants';
import styles from './styles';

export default function ButtonCus({title, style}: ButtonCusProps) {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={[styles.buttonContainer, style]}>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
}

interface ButtonCusProps {
  title: string;
  style?: any;
}
