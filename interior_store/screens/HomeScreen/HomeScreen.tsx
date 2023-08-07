import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {MainLayout} from '../../Components';
import HomeSvg from '../../assets/HomeSvg';
import {Colors} from '../../constants';
import Carousel from './Carousel';
import {NavigationService, Routes} from '../../navigation';
const data = [{key: 1}, {key: 2}, {key: 3}];

const renderArrivalItem = item => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '80%',
          height: 300,
          backgroundColor: Colors.whiteItem,
          borderRadius: 18,
        }}>
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate(Routes.ProductDetail);
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{
                width: '100%',
                height: 200,
                borderTopLeftRadius: 18,
                borderTopRightRadius: 18,
              }}
              source={require('../../assets/sofa3.jpg')}
            />
          </View>
          <View style={{gap: 10, paddingHorizontal: 12, marginTop: 27}}>
            <Text
              style={{color: Colors.black, fontSize: 20, fontWeight: '400'}}>
              Leatherette Sofa
            </Text>
            <Text
              style={{
                color: Colors.green,
                fontSize: 19,
                fontWeight: 'bold',
              }}>
              $15.18
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.black,
              width: 39,
              height: 39,
              borderRadius: 39,
              position: 'absolute',
              right: 10,
              top: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {HomeSvg.heart()}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <MainLayout>
      <ScrollView>
        <View style={{flex: 1, padding: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>{HomeSvg.hamburger()}</View>
            <View>{HomeSvg.cart()}</View>
          </View>

          <View style={{marginTop: 27}}>
            <Text
              style={{
                color: Colors.black,
                fontSize: 20,
                fontWeight: 'bold',
                lineHeight: 32,
                letterSpacing: 0.824,
              }}>
              Hot Deals
            </Text>
          </View>
          <View>
            <Carousel />
          </View>
          <View style={{marginTop: 20}}>
            <Text>New Arrivals</Text>
          </View>
          {/* <FlatList
            style={{width: '100%'}}
            horizontal
            data={data}
            renderItem={renderArrivalItem}
          /> */}
          <View style={{flexDirection: 'row'}}>{renderArrivalItem()}</View>
        </View>
      </ScrollView>
    </MainLayout>
  );
}
