/* eslint-disable react-native/no-inline-styles */
import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import { SCREEN_ROUTER_APP } from '@app/constant/Constant'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { fonts } from '@app/theme'
import React, { useEffect, useCallback } from 'react'
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import HomeApi from './api/HomeApi'

const { width } = Dimensions.get('window')
const HomeScreen = () => {
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <SafeAreaView style={styles.v_container}>
      <ScrollView
        style={styles.v_container}
        refreshControl={<RefreshControl refreshing={false} />}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.txt_title}>What would you like to order</Text>
        <Search />
        <Category />
        <ListRestaurant />
        <ListFood />
      </ScrollView>
    </SafeAreaView>
  )
}

const Search = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        NavigationUtil.navigate(SCREEN_ROUTER_APP.SEARCH)
      }}
      style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}
    >
      <View style={styleSearch.v_container}>
        <FstImage style={styleSearch.ic_search} source={R.images.ic_search} />
        <Text style={styleSearch.text}> Find for food or restaurant...</Text>
      </View>
    </TouchableOpacity>
  )
}

const styleSearch = StyleSheet.create({
  v_container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    paddingVertical: 17,
    paddingHorizontal: 18,
    width: '100%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E7E7E7',
  },
  ic_search: {
    width: 24,
    height: 24,
  },
  text: {
    color: '#9DA4BB',
    marginLeft: 14,
    ...fonts.regular14,
  },
})

const Category = () => {
  useEffect(() => {
    getDataCategory()
  }, [])

  const getDataCategory = async () => {
    try {
      await HomeApi.getCategory()
    } catch (error) {}
  }
  const data = [
    { nameFood: 'Burger', imageFood: R.images.ic_bugger },
    { nameFood: 'Donut', imageFood: R.images.ic_donut },
    { nameFood: 'Pizza', imageFood: R.images.ic_pizza },
    { nameFood: 'Mexican', imageFood: R.images.ic_mexican },
    { nameFood: 'Asian', imageFood: R.images.ic_asian },
  ]
  const renderItem = useCallback(({ item }: { item: any }) => {
    return (
      <TouchableOpacity style={styleCategory.v_item}>
        <FstImage style={styleCategory.icon} source={item.imageFood} />
        <Text style={styleCategory.text}>{item.nameFood}</Text>
      </TouchableOpacity>
    )
  }, [])
  const keyExtractor = useCallback(item => `${item.id}`, [])
  return (
    <FlatList
      maxToRenderPerBatch={10}
      initialNumToRender={10}
      data={data}
      keyExtractor={keyExtractor}
      horizontal
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  )
}
const styleCategory = StyleSheet.create({
  v_item: {
    height: 98,
    width: 59,
    backgroundColor: 'white',
    marginLeft: 15,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 10,
    marginTop: 20,
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  text: {
    marginTop: 15,
    ...fonts.regular11,
    color: '#67666D',
  },
})

const ListRestaurant = () => {
  const dataRes = ['alo', 'alo', 'alo']
  const renderItem = useCallback(({ item }: { item: any }) => {
    return (
      <TouchableOpacity style={styleListRes.v_container}>
        <FstImage style={styleListRes.image} source={R.images.ic_restaurant} />
        <View style={styleListRes.v_row}>
          <Text style={{ ...fonts.semi_bold15, marginRight: 5 }}>
            McDonald’s
          </Text>
          <FstImage style={styleListRes.icon} source={R.images.ic_tick} />
        </View>
        <View style={styleListRes.v_row}>
          <FstImage style={styleListRes.icon} source={R.images.ic_delivery} />
          <Text
            style={{ ...fonts.regular14, color: '#5B5B5E', marginRight: 10 }}
          >
            free delivery
          </Text>
          <FstImage style={styleListRes.icon} source={R.images.ic_time} />
          <Text style={{ ...fonts.regular14, color: '#5B5B5E' }}>
            free delivery
          </Text>
        </View>
      </TouchableOpacity>
    )
  }, [])
  const keyExtractor = useCallback(item => `${item.id}`, [])
  return (
    <View>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}
      >
        <Text style={{ ...fonts.semi_bold18, flex: 1 }}>
          Featured restaurants
        </Text>
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
    width: width * 0.7,
    paddingBottom: 15,
    marginBottom: 15,
  },
  v_row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 11,
    paddingLeft: 15,
  },
})

const ListFood = () => {
  const dataRes = ['alo', 'alo', 'alo']
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
      </TouchableOpacity>
    )
  }, [])
  const keyExtractor = useCallback(item => `${item.id}`, [])
  return (
    <View>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}
      >
        <Text style={{ ...fonts.semi_bold18, flex: 1 }}>Popular items</Text>
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

const styleListFood = StyleSheet.create({
  icon: { width: 12, height: 12, marginRight: 5 },
  image: { width: '100%', aspectRatio: 1, borderRadius: 15 },
  v_container: {
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,

    elevation: 6,
    marginTop: 20,
    marginRight: 15,
    width: width * 0.4,
    paddingBottom: 15,
    marginBottom: 20,
  },
  v_row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 11,
    paddingLeft: 15,
  },
})

const styles = StyleSheet.create({
  v_container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  txt_title: {
    ...fonts.semi_bold26,
    marginTop: 10,
  },
})

export default HomeScreen
