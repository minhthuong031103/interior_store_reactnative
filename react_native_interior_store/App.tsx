import {
  View,
  Text,
  TextInput,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {Colors} from './constants';
import LoginSvg from './assets/LoginSvg';
import {ButtonCus, InputCus, MainLayout} from './Components';
import styles from './Components/ButtonCus/styles';

export default function App() {
  const [isShowPassword, setIsShowPassword] = React.useState(true);
  return (
    <MainLayout>
      <View style={{flex: 1, padding: 12}}>
        <View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{
                width: 300,
                height: 300,
              }}
              source={require('./assets/imgBg.png')}></Image>
          </View>
          <View style={{alignItems: 'center', marginVertical: 12}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 24,
                color: Colors.green,
                textAlign: 'center',
              }}>
              Unlimited Luxurious Furniture
            </Text>
          </View>
          <View style={{gap: 10}}>
            <InputCus
              placeHolder={'enter password'}
              leftIcon={LoginSvg.email()}
              title="Email"
            />
            <InputCus
              leftIcon={LoginSvg.password()}
              placeHolder={'enter password'}
              title="Password"
              isPassword={true}
              isPasswordShow={isShowPassword}
              rightIcon={LoginSvg.eye()}
              setShowPassword={() => {
                //if isShowPassword = true => !isShowPassword = false
                setIsShowPassword(!isShowPassword);
              }}
            />
          </View>
          <ButtonCus style={{marginTop: 30}} title="LOGIN" />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text>Didn't have an account? </Text>
            <TouchableOpacity>
              <Text style={{color: Colors.green}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </MainLayout>
  );
}
