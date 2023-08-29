import React from 'react'
import { Image, Text, View, StyleSheet, } from 'react-native'
import iconFood from '../assets/icon/food.jpg'

const styles = StyleSheet.create({
    mainFeatureImage: {
        height: 55,
        width: 55,
        marginTop: 15
    },
    textMainFeature: {
        textAlign: 'center',
        marginTop: 4
    }
})


// const MainFeatureSub = (props) => {
//     return (
//         <View style={{ width: '25%', alignItems: 'center' }}>
//             <Image style={styles.mainFeatureImage} source={props.image} />
//             <Text style={styles.textMainFeature}>{props.title}</Text>
//         </View>
//     )
// }

class MainFeatureSub extends React.Component {
    render() {
        return (
            <View style={{ width: '25%', alignItems: 'center' }}>
                <Image style={styles.mainFeatureImage} source={this.props.image} />
                <Text style={styles.textMainFeature}>{this.props.title}</Text>
            </View>
        )
    }


}

export default MainFeatureSub 