import React, { components } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PromoItemSub from './PromoItemSub'

const PromoItems = () => {
    return (
        <View style={{
            marginHorizontal: 18, width: '100%',
            flexWrap: 'wrap', flexDirection: 'row'
        }}>
            <PromoItemSub
                image={{ uri: "https://www.teakpalace.com/image/cache/catalog/artikel/gambar-makanan-paling-enak-sate-kambing-1000x750h.jpg" }}
                text="Sate Ayam"
            />


        </View>
    )
}

export default PromoItems