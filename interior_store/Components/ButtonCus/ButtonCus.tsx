import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../constants';
import styles from './styles';

export default function ButtonCus({title, style, onPress}: ButtonCusProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, style]}>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
}

interface ButtonCusProps {
  title: string;
  style?: any;
  onPress?: () => void;
}
