import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import ScreenWrapper from '@app/components/Screen/ScreenWrapper'
import { SCREEN_ROUTER_APP } from '@app/constant/Constant'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { colors } from '@app/theme'
import React, { useCallback } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

interface ChooseInfoProps {
  route: {
    params: {
      isAccountScreen: boolean
      callback: ({
        nameCB,
        phoneCB,
        addressCB,
        idCB,
      }: {
        nameCB: string
        phoneCB: string
        addressCB: string
        idCB: number
      }) => void
    }
  }
}

const DeliveryAddress = () => {
  //   const dispatch = useDispatch()

  //   const { isLoading, isError, data } = useAppSelector(
  //     state => state.listAddressSlice
  //   )
  //   const isAccountScreen = props?.route?.params?.isAccountScreen

  //   const [body, setBody] = useState({
  //     page: DEFAULT_PARAMS.PAGE,
  //     limit: DEFAULT_PARAMS.LIMIT,
  //   })

  //   useEffect(() => {
  //     getData()
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [body])

  //   const getData = () => {
  //     dispatch(getListAddress(body))
  //   }

  const renderItem = useCallback(({ item }: { item: any }) => {
    return (
      <>
        <TouchableOpacity
          //   onPress={() => {
          //     NavigationUtil.navigate(SCREEN_ROUTER_APP.ADD_ADDRESS)
          //   }}
          style={styles.v_item}
        >
          <FstImage style={styles.ic_location} source={R.images.ic_location4} />
          <View style={styles.v_address}>
            <Text
              style={styles.txt_info_user}
              children={`Nguyễn Thị Thanh Hường | 0767332485`}
            />
            <Text
              style={styles.txt_address}
              children="Số 8 Tôn Thất Thuyết, Cầu Giấy, Hà Nội"
              // children={`${item.address}, ${item.ward_name}, ${item.district_name}, ${item.province_name}.`}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.v_line} />
      </>
    )
  }, [])
  //   const onRefreshData = () => {
  //     setBody({
  //       ...body,
  //       page: DEFAULT_PARAMS.PAGE,
  //     })
  //   }

  const keyExtractor = useCallback(item => `${item.id}`, [])

  return (
    <ScreenWrapper
      unsafe
      color="black"
      backgroundHeader="white"
      back
      forceInset={['left']}
      titleHeader={'Delivery Address'}
      children={
        <View style={styles.v_container}>
          <TouchableOpacity
            onPress={() => {
              NavigationUtil.navigate(SCREEN_ROUTER_APP.ADD_ADDRESS)
            }}
            style={styles.v_add_address}
          >
            <FstImage
              resizeMode="contain"
              style={styles.icon}
              source={R.images.ic_add}
            />
            <Text style={styles.txt_add_address} children={'Add new address'} />
          </TouchableOpacity>
          {/* {data.length === 0 && (
            <Empty description={R.strings().list_address_empty} />
          )} */}
          <FlatList
            // onRefresh={onRefreshData}
            // refreshing={false}
            contentContainerStyle={styles.v_list}
            data={['alo', 'alo', 'alo']}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
          />
        </View>
      }
    />
  )
}

const styles = StyleSheet.create({
  txt_fix: {
    fontFamily: R.fonts.san_regular,
    fontSize: 15,
    color: colors.primary,
  },
  v_container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  v_add_address: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
    paddingVertical: 13,
    paddingHorizontal: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  txt_add_address: {
    fontSize: 16,
    color: colors.primary,
    fontFamily: R.fonts.san_regular,
    marginLeft: 11,
  },
  v_list: {
    borderRadius: 16,
    marginTop: 12,
    backgroundColor: 'white',
  },
  v_item: {
    flexDirection: 'row',
    paddingTop: 13,
    paddingBottom: 18,
    paddingLeft: 16,
    paddingRight: 19,
  },
  ic_location: {
    width: 28,
    height: 28,
  },
  v_body: {
    marginLeft: 12,
    marginTop: 4,
  },
  v_address: {
    marginLeft: 12,
    marginTop: 4,
    flex: 1,
  },
  txt_info_user: {
    fontFamily: R.fonts.san_regular,
    fontSize: 16,
    color: colors.colorDefault.text,
  },
  txt_address: {
    fontFamily: R.fonts.san_regular,
    fontSize: 16,
    marginTop: 6,
    color: '#595959',
  },
  v_line: {
    height: 1.5,
    backgroundColor: colors.backgroundColor,
  },
})

export default DeliveryAddress
