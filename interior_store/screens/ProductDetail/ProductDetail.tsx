import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {MainLayout} from '../../Components';
import {Colors} from '../../constants';
import HomeSvg from '../../assets/HomeSvg';
import {BlurView} from '@react-native-community/blur';
export default function ProductDetail() {
  return (
    <MainLayout>
      <View style={{flex: 1}}>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>{HomeSvg.back()}</View>
          <View style={{flexDirection: 'row', gap: 18}}>
            {HomeSvg.share()}
            {HomeSvg.like()}
          </View>
        </View>
        <Image
          style={{
            resizeMode: 'cover',
            height: '40%',
            width: '100%',
            marginTop: 10,
          }}
          source={require('../../assets/sofa2.jpg')}
        />
        <ScrollView>
          <View
            style={{
              backgroundColor: Colors.background,
              height: '100%',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              position: 'relative',
              zIndex: 1,
              top: -20,
              padding: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>Leather Recliner</Text>
              <View
                style={{
                  backgroundColor: Colors.background1,
                  paddingVertical: 5,
                  paddingHorizontal: 8,
                  borderRadius: 20,
                }}>
                <Text>$ 799.99</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 14}}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                {HomeSvg.star()}
                <Text>4.5</Text>
              </View>

              <View
                style={{
                  backgroundColor: Colors.background1,
                  height: '100%',
                  width: 1.5,
                }}></View>
              <View>
                <Text>355 Reviews</Text>
              </View>
            </View>
            <View style={{marginTop: 30}}>
              <Text>Description</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                pellentesque tincidunt lectus ac venenatis. Nam lobortis ante
                enim, vitae pulvinar neque euismod eu. Mauris ullamcorper nisi
                et ex ultricies suscipit. Nullam elementum accumsan leo nec
                porttitor. Phasellus ac tincidunt ligula, vel tincidunt lacus.
                Nulla facilisi. Fusce vel augue sollicitudin, condimentum libero
                a, cursus nisi. Curabitur non tortor eu nunc blandit scelerisque
                a vel justo. Vestibulum viverra vitae sem in imperdiet. Aliquam
                non nisl vel nisi scelerisque lobortis porttitor non lacus.
                Donec a dui porttitor, tempor libero eget, sodales velit. Lorem
              </Text>
              <Text>
                ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                pellentesque tincidunt lectus ac venenatis. Nam lobortis ante
                enim, vitae pulvinar neque euismod eu. Mauris ullamcorper nisi
                et ex ultricies suscipit. Nullam elementum accumsan leo nec
                porttitor. Phasellus ac tincidunt ligula, vel tincidunt lacus.
                Nulla facilisi. Fusce vel augue sollicitudin, condimentum libero
                a, cursus nisi. Curabitur non tortor eu nunc blandit scelerisque
                a vel justo. Vestibulum viverra vitae sem in imperdiet. Aliquam
                non nisl vel nisi scelerisque lobortis porttitor non lacus.
                Donec a dui porttitor, tempor libero eget, sodales velit.
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={{height: 80, backgroundColor: '#000'}}>
          <BlurView
            style={{position: 'absolute', zIndex: 30, bottom: 0}}
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
          />
        </View>
      </View>
    </MainLayout>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    height: 100,
    zIndex: 10,

    left: 0,
    bottom: 0,
    right: 0,
  },
});
