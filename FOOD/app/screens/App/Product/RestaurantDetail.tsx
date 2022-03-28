import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { fonts } from '@app/theme'
import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import FastImage, { Source } from 'react-native-fast-image'

const FoodDetail = () => {
  const [count, setCount] = useState<number>(1)
  return (
    <SafeAreaView style={styles.v_container}>
      <ScrollView style={styles.v_container}>
        <Banner />
        <InfoRestaurant />
      </ScrollView>
    </SafeAreaView>
  )
}

const InfoRestaurant = () => {
  return (
    <View style={InfoResStyle.v_container}>
      <View style={InfoResStyle.v_avatar}>
        <FastImage
          tintColor={'#FFC529'}
          style={InfoResStyle.avatar}
          source={R.images.img_pizza_hut}
        />
      </View>
    </View>
  )
}

const InfoResStyle = StyleSheet.create({
  v_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  v_avatar: {
    width: 104,
    height: 104,
    borderRadius: 104 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: -50,
  },
  avatar: {
    width: 81,
    height: 81,
  },
})

const Banner = () => {
  return (
    <>
      <FstImage style={styles.img_banner} source={R.images.img_food_banner} />
      <TouchableOpacity
        onPress={() => {
          NavigationUtil.goBack()
        }}
        style={styles.v_back}
      >
        <FstImage style={styles.ic_back} source={R.images.ic_back} />
      </TouchableOpacity>
    </>
  )
}

export default FoodDetail

const styles = StyleSheet.create({
  containerCheckBox: {
    backgroundColor: 'white',
    borderWidth: 0,

    margin: 0,
  },
  ic_check: {
    width: 18,
    height: 18,
  },
  v_container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  img_banner: {
    width: '100%',
    aspectRatio: 2.1,
    borderRadius: 15,
  },
  v_back: {
    backgroundColor: 'white',
    position: 'absolute',
    width: 38,
    height: 38,
    left: 10,
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  ic_back: {
    width: 24,
    height: 24,
  },
  txt_food: {
    fontFamily: R.fonts.san_semi_bold,
    fontSize: 28,
    marginTop: 22,
  },
  v_row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  ic_star: {
    width: 18,
    height: 18,
  },
  txt_evaluate: { marginLeft: 9, ...fonts.semi_bold14 },
  txt_number: {
    color: '#9796A1',
  },
  txt_review: {
    color: '#FE724C',
    ...fonts.regular14,
    marginLeft: 7,
  },
})
