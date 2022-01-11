import { Dimensions, View } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from '@app/components/Button/Button'
import FstImage from '@app/components/FstImage/FstImage'
import { SwiperFlatList } from '@app/components/SwiperFlatList'
import R from '@app/assets/R'
import { colors } from '@app/theme'
const window = Dimensions.get('window')
const { width } = window
const data = [
  {
    imageUrl: R.images.img_vietbuiltding_banner,
  },
  {
    imageUrl: R.images.img_vietbuiltding_banner,
  },
  {
    imageUrl: R.images.img_vietbuiltding_banner,
  },
]
const SlideBarHomeLayout = () => {
  const renderItemBanner = ({ item }: { item: any; index: number }) => {
    return (
      <Button
        onPress={() => {}}
        children={
          <FstImage
            source={item?.imageUrl}
            style={[styles.imgBanner, { width: width - 40 }]}
            resizeMode="cover"
          />
        }
      />
    )
  }
  return (
    <View style={styles.container}>
      {!!data?.length && (
        <SwiperFlatList
          autoplay
          autoplayDelay={5}
          autoplayLoop
          index={0}
          keyExtractor={(item: any, index: any) => `${item} ${index}`}
          showPagination={false}
          data={data || []}
          renderItem={renderItemBanner}
          paginationActiveColor={colors.primary}
          paginationStyleItem={styles.normalDot}
        />
      )}
    </View>
  )
}
export default SlideBarHomeLayout
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  imgBanner: {
    width: width - 10,
    height: 175,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  normalDot: {
    height: 12,
    width: 12,
    borderRadius: 12,
    backgroundColor: colors.primary,
    marginHorizontal: 4,
  },
})
