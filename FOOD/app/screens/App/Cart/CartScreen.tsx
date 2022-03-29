import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import ScreenWrapper from '@app/components/Screen/ScreenWrapper'
import { dimension } from '@app/constant/Theme'
import { colors, dimensions, fonts } from '@app/theme'
import React, { useCallback, useEffect } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

const CartScreen = () => {
  useEffect(() => {
    return () => {}
  }, [])

  const renderItem = useCallback(({ item }: { item: any }) => {
    return (
      <View style={styles.v_item}>
        <FstImage
          resizeMode="cover"
          style={styles.image}
          source={R.images.img_food}
        />
        <View style={styles.v_info}>
          <View>
            <Text style={{ ...fonts.semi_bold18 }}>Red n hot pizza</Text>
            <Text style={styles.txt_description}>Spicy chicken, beef</Text>
          </View>

          <View style={styles.v_row}>
            <Text
              style={{ ...fonts.semi_bold14, color: colors.primary, flex: 1 }}
            >
              $<Text style={styles.txt_price}>9.50</Text>
            </Text>
            <TouchableOpacity>
              <FstImage
                style={{ width: 24, height: 24 }}
                source={R.images.ic_plus}
              />
            </TouchableOpacity>
            <Text
              style={{
                ...fonts.semi_bold16,
                color: colors.primary,
                marginHorizontal: 18,
              }}
            >
              1
            </Text>
            <FstImage
              style={{ width: 24, height: 24 }}
              source={R.images.ic_plus}
            />
          </View>
        </View>
      </View>
    )
  }, [])
  const keyExtractor = useCallback(item => `${item.id}`, [])

  const renderFooter = () => {
    return (
      <>
        <ViewRow label={'Subtotal'} content={'$52.50'} />
        <ViewRow label={'Tax and Fees'} content={'$52.50'} />
        <ViewRow label={'Delivery'} content={'$52.50'} />
        <ViewRow label={'Total'} content={'$52.50'} />
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 100,
            backgroundColor: colors.primary,
            width: dimensions.width / 2,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            borderRadius: 26,
          }}
        >
          <Text
            style={{
              ...fonts.semi_bold16,
              color: 'white',
              marginHorizontal: 18,
            }}
          >
            CHECKOUT
          </Text>
        </TouchableOpacity>
      </>
    )
  }

  return (
    <ScreenWrapper
      back
      unsafe
      color="black"
      titleHeader="Cart"
      backgroundHeader="white"
      forceInset={['left']}
      children={
        <FlatList
          style={styles.v_container}
          // contentContainerStyle={styles.v_list}
          // onRefresh={onRefreshData}
          // refreshing={false}
          data={['alo', 'alo']}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={renderFooter}
        />
      }
    />
  )
}

const ViewRow = ({ label, content }: { label: string; content: strign }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
      <Text style={{ ...fonts.semi_bold16, flex: 1 }}>{label}</Text>
      <Text style={{ ...fonts.semi_bold16 }}>{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  v_container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  v_item: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 82,
    height: 82,
    borderRadius: 16,
  },
  v_info: {
    marginLeft: 20,
    justifyContent: 'space-between',
    flex: 1,
  },
  txt_description: {
    ...fonts.regular14,
    marginTop: 8,
  },
  v_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt_price: {
    ...fonts.semi_bold18,
    color: 'black',
  },
})

export default CartScreen
