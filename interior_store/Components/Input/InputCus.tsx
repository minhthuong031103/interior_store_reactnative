import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../constants';
import AuthSvg from '../../assets/AuthSvg';

export default function InputCus({
  placeHolder,
  leftIcon,
  title,
  rightIcon,
  isPassword,
  isPasswordShow,
  setShowPassword,
  type,
}: InputCusProps) {
  return (
    <View>
      <View>
        <Text style={{marginBottom: 5, marginLeft: 5}}>{title}</Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.input,
          borderRadius: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 12,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginRight: 10}}>{leftIcon}</View>
          <TextInput
            keyboardType={type}
            secureTextEntry={isPasswordShow}
            placeholder={placeHolder}
            style={{alignSelf: 'flex-start'}}></TextInput>
        </View>
        {isPassword ? (
          isPasswordShow ? (
            <TouchableOpacity onPress={setShowPassword}>
              {AuthSvg.eye()}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={setShowPassword}>
              {AuthSvg.eye_slash()}
            </TouchableOpacity>
          )
        ) : null}
      </View>
    </View>
  );
}

interface InputCusProps {
  placeHolder: string;
  leftIcon?: React.ReactNode;
  title?: string;
  rightIcon?: React.ReactNode;
  isPassword?: boolean;
  isPasswordShow?: boolean;
  setShowPassword?: any;
  type?: string;
}
