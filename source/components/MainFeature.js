import React from 'react'
import { Image, Text, View, StyleSheet, } from 'react-native'
import iconFood from '../assets/icon/food.jpg'
import MainFeatureSub from './MainFeatureSub'

const styles = StyleSheet.create({
    wrapperMainFeature: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        flexWrap: 'wrap',
        width: '100%'

    }
})


const MainFeature = () => {
    return (
        <View style={styles.wrapperMainFeature}>
            <MainFeatureSub image={require('../assets/icon/food.jpg')} title="Food" />
            <MainFeatureSub image={require('../assets/icon/bike.jpg')} title="Bike" />
            <MainFeatureSub image={require('../assets/icon/car.jpg')} title="Car" />
            <MainFeatureSub image={require('../assets/icon/send.jpg')} title="Delivery" />
            <MainFeatureSub image={require('../assets/icon/subscribe.jpg')} title="Subcription" />
            <MainFeatureSub image={require('../assets/icon/doctor.jpg')} title="Doctor" />
            <MainFeatureSub image={require('../assets/icon/pulsa.jpg')} title="Pulsa/Token" />
            <MainFeatureSub image={require('../assets/icon/more.jpg')} title="More" />
        </View>

    )
}

export default MainFeature 