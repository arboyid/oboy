import React from 'react'
import { Image, Text, View, StyleSheet, } from 'react-native'
import iconPay from '../assets/icon/pay.jpg'
import iconTopUp from '../assets/icon/topup.jpg'
import Iconreward from '../assets/icon/reward.jpg'

const styles = StyleSheet.create({
    wrapperPay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ovoFeatureImage: {
        height: 45,
        width: 45,
        marginTop: 25,
        marginHorizontal: 29
    }
})


const OboyComponents = () => {
    return (
        <View style={styles.wrapperPay}>
            <View>
                <Image style={styles.ovoFeatureImage} source={iconPay} />
                <Text style={{ alignSelf: "center", marginTop: 5 }}>Pay</Text>
            </View>
            <View>
                <Image style={styles.ovoFeatureImage} source={iconTopUp} />
                <Text style={{ alignSelf: "center", marginTop: 5 }}>Top Up</Text>
            </View>
            <View>
                <Image style={styles.ovoFeatureImage} source={Iconreward} />
                <Text style={{ alignSelf: "center", marginTop: 5 }}>Rewards</Text>
            </View>
        </View>

    )
}

export default OboyComponents 