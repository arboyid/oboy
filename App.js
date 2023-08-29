import React, { Component } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, StatusBar } from 'react-native'
import imgBanner from './source/assets/images/awan.jpg'
import OboyComponents from './source/components/OboyComponents'
import MainFeature from './source/components/MainFeature'
import PromoItems from './source/components/PromoItemSub'




const { heigh, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  imageBanner: {
    height: 140, width: width
  },
  greetingText: {
    fontSize: 17,
    fontWeight: "bold",
    position: 'absolute',
    alignSelf: 'center',
    top: 40,
    color: "#383838"
  },
  wrapperOboy: {
    marginHorizontal: 18,
    height: 150,
    marginTop: -60,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 10
  },
  textOboy: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginTop: 10
  },
  garisDiOboy: {
    height: .8,
    backgroundColor: '#adadad',
    marginTop: 10,
    marginHorizontal: 10
  },
  dividers: {
    width: width,
    height: 15,
    backgroundColor: "#ededed",
    marginVertical: 15
  }
})

class Home extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)" />
        <Image style={styles.imageBanner} source={imgBanner} />
        <Text style={styles.greetingText}>Selamat Pagi !!!</Text>
        <View style={styles.wrapperOboy}>
          <View style={styles.textOboy}>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "#383838" }}>Oboy Balance</Text>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "#383838" }}>IDR 50.000</Text>
          </View>
          <View style={styles.garisDiOboy}></View>
          <OboyComponents />

        </View>
        <View style={{ marginHorizontalL: 18 }}>
          <MainFeature />
        </View>
        <View style={styles.dividers}></View>
        {/* <PromoItems /> */}
      </View>
    )
  }
}

export default Home