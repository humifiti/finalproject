/* eslint-disable react-native/no-inline-styles */
import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { colors, dimensions, fonts } from '@app/theme'
import React, { useCallback } from 'react'
import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import FastImage from 'react-native-fast-image'

const FoodDetail = () => {
  return (
    <SafeAreaView style={styles.v_container}>
      <ScrollView style={styles.v_container}>
        <Banner />
        <InfoRestaurant />
        <ListFoodFeatured />
        <Category />
        <ListFood />
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
      <Text style={{ ...fonts.semi_bold20 }}>Pizza Hut</Text>
      <Text style={{ ...fonts.regular12, color: '#9796A1', marginTop: 8 }}>
        4102 Pretty View Lanenda
      </Text>
      <View style={InfoResStyle.v_row}>
        <FstImage style={InfoResStyle.icon} source={R.images.ic_delivery} />
        <Text style={{ ...fonts.regular14, color: '#5B5B5E', marginRight: 10 }}>
          free delivery
        </Text>
        <FstImage style={InfoResStyle.icon} source={R.images.ic_time} />
        <Text style={{ ...fonts.regular14, color: '#5B5B5E' }}>10-15 mins</Text>
      </View>
      <View style={styles.v_row}>
        <FstImage style={styles.ic_star} source={R.images.ic_star} />
        <Text style={styles.txt_evaluate}>
          4.5 <Text style={styles.txt_number}>(30+)</Text>
        </Text>
        <TouchableOpacity>
          <Text style={styles.txt_review}>See Review</Text>
        </TouchableOpacity>
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
  v_row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 11,
  },
  icon: { width: 12, height: 12, marginRight: 5 },
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

const ListFoodFeatured = () => {
  const dataRes = ['alo', 'alo', 'alo']
  const renderItem = useCallback(({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // NavigationUtil.navigate(SCREEN_ROUTER_APP.RESTAURANT_DETAIL)
        }}
        style={styleListRes.v_container}
      >
        <FstImage style={styleListRes.image} source={R.images.ic_restaurant} />
        <Text style={{ ...fonts.semi_bold15, marginLeft: 15, marginTop: 15 }}>
          Chicken Hawaiian
        </Text>
        <Text
          style={{
            ...fonts.regular13,
            marginLeft: 15,
            marginTop: 10,
            color: '#5B5B5E',
          }}
        >
          Chicken, Cheese and pineapple
        </Text>
        <View style={styleListRes.v_price}>
          <Text style={{ ...fonts.semi_bold14 }}>9.50 $ </Text>
        </View>
      </TouchableOpacity>
    )
  }, [])
  const keyExtractor = useCallback(item => `${item.id}`, [])
  return (
    <View>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}
      >
        <Text style={{ ...fonts.semi_bold18, flex: 1 }}>Featured items</Text>
        <TouchableOpacity>
          <Text style={{ ...fonts.regular15, color: '#F56844' }}>
            {'View All >'}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        maxToRenderPerBatch={10}
        initialNumToRender={10}
        data={dataRes}
        keyExtractor={keyExtractor}
        horizontal
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styleListRes = StyleSheet.create({
  icon: { width: 12, height: 12, marginRight: 5 },
  image: { width: '100%', height: 150, borderRadius: 20 },
  v_container: {
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 8,

    elevation: 6,
    marginTop: 20,
    marginRight: 15,
    width: dimensions.width * 0.7,
    paddingBottom: 15,
    marginBottom: 15,
  },
  v_row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 11,
    paddingLeft: 15,
  },
  v_price: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 10,
    top: 10,
    paddingHorizontal: 7,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
})

const Category = () => {
  const dataCategory = ['All', 'Bundles', 'AdditionalBundles']
  return (
    <ScrollView horizontal>
      {dataCategory.map((item, index) => (
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 16,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: '#F2EAEA',
            marginRight: 12,
            backgroundColor: index === 0 ? colors.primary : 'white',
          }}
        >
          <Text
            style={{
              ...fonts.regular14,
              color: index === 0 ? 'white' : 'black',
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const ListFood = () => {
  const renderItem = useCallback(({ item }: { item: any }) => {
    return (
      <TouchableOpacity style={styleListFood.v_container}>
        <FstImage style={styleListFood.image} source={R.images.img_food} />
        <View style={{ marginTop: 11, alignItems: 'center' }}>
          <Text style={{ ...fonts.semi_bold15 }}>Red n hot pizza</Text>
          <Text style={{ ...fonts.regular12, color: '#5B5B5E', marginTop: 8 }}>
            Spicy chicken, beef
          </Text>
        </View>
        <View style={styleListFood.v_row}>
          <Text style={{ ...fonts.semi_bold14 }}>9.50 $ </Text>
        </View>
      </TouchableOpacity>
    )
  }, [])
  const keyExtractor = useCallback(item => `${item.id}`, [])
  return (
    <FlatList
      style={styleListFood.v_listProduct}
      columnWrapperStyle={styleListFood.v_column}
      data={['alo', 'alo', 'alo', 'alo', 'alo']}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      numColumns={2}
    />
  )
}

const styleListFood = StyleSheet.create({
  v_listProduct: {
    paddingBottom: Platform.OS === 'ios' ? 60 : 80,
    //backgroundColor: 'red',
  },
  v_column: {
    justifyContent: 'space-between',
  },
  image: { width: '100%', aspectRatio: 1, borderRadius: 15 },
  v_container: {
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 9,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,

    elevation: 6,
    marginTop: 20,
    width: dimensions.width * 0.43,
    paddingBottom: 15,
  },
  v_row: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 10,
    top: 10,
    paddingHorizontal: 7,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
})

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
