import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { colors, fonts } from '@app/theme'
import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { CheckBox } from 'react-native-elements'
import FastImage, { Source } from 'react-native-fast-image'

const data = ['alo', 'alo', 'alo']

const FoodDetail = () => {
  const [count, setCount] = useState<number>(1)
  return (
    <SafeAreaView style={styles.v_container}>
      <ScrollView style={styles.v_container}>
        <FstImage style={styles.img_banner} source={R.images.img_food_banner} />
        <TouchableOpacity
          onPress={() => {
            NavigationUtil.goBack()
          }}
          style={styles.v_back}
        >
          <FstImage style={styles.ic_back} source={R.images.ic_back} />
        </TouchableOpacity>
        <Text style={styles.txt_food}>Ground Beef Tacos</Text>
        <View style={styles.v_row}>
          <FstImage style={styles.ic_star} source={R.images.ic_star} />
          <Text style={styles.txt_evaluate}>
            4.5 <Text style={styles.txt_number}>(30+)</Text>
          </Text>
          <TouchableOpacity>
            <Text style={styles.txt_review}>See Review</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 18 }}
        >
          <Text style={{ ...fonts.semi_bold14, flex: 1 }}>
            $<Text style={{ ...fonts.semi_bold26 }}>9.50</Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              setCount(prevState => {
                if (prevState > 1) {
                  return prevState - 1
                }
                return 1
              })
            }}
          >
            <FstImage
              style={{ width: 32, height: 32 }}
              source={R.images.ic_minus}
            />
          </TouchableOpacity>
          <Text style={{ ...fonts.semi_bold16, marginLeft: 10 }}>{count}</Text>
          <TouchableOpacity
            onPress={() => {
              setCount(prevState => {
                return prevState + 1
              })
            }}
            style={{ marginLeft: 10 }}
          >
            <FastImage
              style={{ width: 32, height: 32 }}
              source={R.images.ic_plus}
            />
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#9796A1', ...fonts.regular15, marginTop: 19 }}>
          Brown the beef better. Lean ground beef – I like to use 85% lean
          angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion
          powder.
        </Text>
        <Text style={{ ...fonts.semi_bold18, marginTop: 26 }}>
          Choice of Add On
        </Text>
        {data.map(item => (
          <View
            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}
          >
            <FstImage
              style={{ width: 50, height: 50 }}
              source={R.images.img_food2}
            />
            <Text style={{ ...fonts.semi_bold16, marginLeft: 18, flex: 1 }}>
              Baby spinach
            </Text>
            <Text style={{ ...fonts.regular14, color: '#9796A1' }}>+$2.30</Text>
            <CheckBox
              containerStyle={styles.containerCheckBox}
              checkedIcon={<IconCheckBox img={R.images.ic_checked2} />}
              uncheckedIcon={<IconCheckBox img={R.images.ic_unchecked2} />}
              checked={true}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
const IconCheckBox = ({ img }: { img: number | Source }) => {
  return <FstImage style={styles.ic_check} resizeMode="contain" source={img} />
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
    aspectRatio: 1.56,
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
