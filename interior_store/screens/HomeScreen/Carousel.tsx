import {View, Text} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {Colors} from '../../constants';
const slides = [
  'https://nhaxinh.com/wp-content/uploads/2022/05/phong-ngu-hien-dai-thanh-lich-skagen-13522.jpg',
  'https://nhaxinh.com/wp-content/uploads/2023/07/BST-Coastal-4.jpg',
  'https://nhaxinh.com/wp-content/uploads/2023/03/Phong-khach-Pio-tao-nha-tinh-te-3-1200x800.jpg',
];

export default function Carousel() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <SliderBox
        images={slides}
        dotColor={Colors.background1}
        inactiveDotColor={Colors.background}
        ImageComponentStyle={{borderRadius: 20, padding: 20}}
        autoplay
        circleLoop
      />
    </View>
  );
}
