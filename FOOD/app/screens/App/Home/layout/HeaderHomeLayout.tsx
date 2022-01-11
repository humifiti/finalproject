import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '@app/theme'
import { TouchableOpacity } from 'react-native'
const HeaderHomeLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerSearch}>
        <FstImage source={R.images.ic_search} style={styles.iconStyle} />
        <TextInput style={styles.textInput} placeholder="Bạn muốn tìm gì ?" />
      </View>
      <TouchableOpacity style={styles.containerButton}>
        <FstImage source={R.images.ic_chat_blue} style={styles.iconStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerButton}>
        <FstImage source={R.images.ic_cart_blue} style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  )
}
export default HeaderHomeLayout
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 5,
  },
  textInput: {
    minHeight: 40,
    marginLeft: 12,
    width: '70%',
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  containerSearch: {
    width: '70%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: colors.white,
    borderRadius: 12,
  },
  containerButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
