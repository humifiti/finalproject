import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { fonts } from '@app/theme'
import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

const FoodDetail = () => {
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
            <Text
              style={{ color: '#FE724C', ...fonts.regular14, marginLeft: 7 }}
            >
              See Review
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FoodDetail

const styles = StyleSheet.create({
  v_container: {
    flex: 1,
    paddingHorizontal: 20,
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
})
