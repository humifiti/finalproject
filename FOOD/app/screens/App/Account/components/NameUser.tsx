import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import { fonts, styleView } from '@app/theme'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const NameUser = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        //NavigationUtil.navigate(SCREEN_ROUTER_APP.UPDATE_ACCOUNT)
      }}
      style={styles.ctn_v_name_user}
    >
      <View style={styles.v_name_contact}>
        <Text
          style={styles.txt_name_user}
          children={'Nguyễn Thị Thanh Hường'}
        />
        <View style={styles.v_phone}>
          <FstImage source={R.images.ic_phone} style={styles.ic_phone} />
          <Text style={styles.rg16_gr8} children={'0795296216'} />
        </View>
      </View>
      <FstImage source={R.images.img_account_default} style={styles.img_user} />
    </TouchableOpacity>
  )
}

export default NameUser

const styles = StyleSheet.create({
  ctn_v_name_user: {
    // ...styleView.rowItemBetween,
    ...styleView.rowItem,
    padding: 15,

    // marginTop:
    //   getStatusBarHeight() +
    //   (Platform.OS === 'android' ? 0 : !isIphoneX() ? 0 : 10),
  },

  v_name_contact: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  txt_name_user: {
    lineHeight: 25,
    ...fonts.semi_bold18,
    color: '#262626',
  },
  v_phone: {
    ...styleView.rowItem,
    alignItems: 'center',
  },
  ic_phone: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  rg16_gr8: {
    lineHeight: 25,
    ...fonts.regular16,
    color: '#595959',
  },
  img_user: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: '#F8B290',
  },
})
