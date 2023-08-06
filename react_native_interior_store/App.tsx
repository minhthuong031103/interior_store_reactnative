import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import MainLayout from './Components/MainLayout/MainLayout';
import {Colors} from './constants';

export default function App() {
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

          <Text style={{marginBottom: 5, marginLeft: 5}}>Email</Text>
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
              <Text>123</Text>
              <TextInput
                placeholder="Enter email"
                style={{alignSelf: 'flex-start'}}></TextInput>
            </View>
            <Text>iconright1</Text>
          </View>
        </View>
      </View>
    </MainLayout>
  );
}
