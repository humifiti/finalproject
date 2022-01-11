import {
  APP_SLICE,
  SCREEN_ROUTER,
  SCREEN_ROUTER_AUTH,
} from '@app/constant/Constant'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { navigateSwitch } from '@app/navigation/switchNavigatorSlice'
import React, { useState, useRef } from 'react'
import {
  Button,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native'
import R from '@app/assets/R'
import { connect } from 'react-redux'
import ScreenWrapper from '@app/components/Screen/ScreenWrapper'
import FstImage from '@app/components/FstImage/FstImage'
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper'
import Card from '@app/components/Card'
import RNTextInput from '@app/components/RNTextInput'
import { colors } from '@app/theme'
import { CheckBox } from 'react-native-elements'
import RNButton from '@app/components/RNButton'
const { width, height } = Dimensions.get('window')

const LoginScreen = (props: any) => {
  const [isDialogLoading, setDialogLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  const [isCheck, setIsCheck] = useState(false)
  const nameRef = useRef<RNTextInput>(null)
  const nameInputRef = useRef<TextInput>(null)
  const emailRef = useRef<RNTextInput>(null)
  const emailInputRef = useRef<TextInput>(null)
  const passRef = useRef<RNTextInput>(null)
  const passInputRef = useRef<TextInput>(null)

  const requestLogin = () => {
    props?.navigateSwitch(SCREEN_ROUTER.MAIN)
  }

  return (
    <ScreenWrapper
      unsafe
      dialogLoading={isDialogLoading}
      forceInset={['left']}
      children={
        <>
          <KeyboardAvoidingView
            style={styles.v_keyboard}
            enabled
            behavior={'padding'}
            keyboardVerticalOffset={-1000}
          >
            <ScrollView
              style={styles.v_scroll}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              <ImageBackground
                source={R.images.ic_backgroud}
                style={styles.img_bg}
                resizeMode="cover"
                children={
                  <TouchableOpacity
                    onPress={requestLogin}
                    children={
                      <FstImage
                        source={R.images.img_back}
                        style={styles.ic_back}
                        resizeMode="contain"
                      />
                    }
                  />
                }
              />
              <Card style={styles.root_view}>
                <View
                  style={styles.v_container}
                  children={
                    <>
                      <FstImage
                        tintColor={'#FE724C'}
                        resizeMode="contain"
                        style={styles.img_logo}
                        source={R.images.ic_logo}
                      />
                      <Text
                        style={styles.txt_title}
                        children={R.strings().login_with_your_account}
                      />
                      <RNTextInput
                        autoCapitalize="none"
                        ref={nameRef}
                        refs={nameInputRef}
                        title={R.strings().full_name}
                        value={name}
                        placeholder={R.strings().input_full_name}
                        keyboardType="default"
                        onChangeText={setName}
                        maxLength={45}
                        placeholderTextColor={colors.colorDefault.placeHolder}
                        valueType="name"
                        isRequire
                      />

                      <RNTextInput
                        ref={emailRef}
                        refs={emailInputRef}
                        title={R.strings().email}
                        value={email}
                        placeholder={R.strings().input_email}
                        keyboardType="email-address"
                        onChangeText={setEmail}
                        maxLength={225}
                        placeholderTextColor={colors.colorDefault.placeHolder}
                        valueType="email"
                        isRequire
                      />
                      <RNTextInput
                        autoCapitalize="none"
                        maxLength={16}
                        ref={passRef}
                        refs={passInputRef}
                        title={R.strings().password}
                        secureTextEntry
                        value={password}
                        placeholder={R.strings().input_password}
                        keyboardType="default"
                        onChangeText={setPassword}
                        placeholderTextColor={colors.colorDefault.placeHolder}
                        isRequire
                        valueType="password"
                      />

                      <TouchableOpacity
                        onPress={() => {
                          NavigationUtil.navigate(
                            SCREEN_ROUTER_AUTH.FORGOT_PASSWORD
                          )
                        }}
                        children={
                          <Text
                            style={styles.txt_forgot_pass}
                            children={`${R.strings().forgot_password} ?`}
                          />
                        }
                      />

                      <RNButton
                        onPress={requestLogin}
                        title={R.strings().login}
                      />
                      <View style={styles.v_register}>
                        <Text
                          style={styles.txt_question}
                          children={R.strings().you_have_not_an_account}
                        />
                        <Text
                          onPress={() => {
                            NavigationUtil.navigate(SCREEN_ROUTER_AUTH.REGISTER)
                          }}
                          style={styles.txt_register}
                          children={R.strings().register}
                        />
                      </View>
                    </>
                  }
                />
              </Card>
            </ScrollView>
          </KeyboardAvoidingView>
        </>
      }
    />
  )
}

const styles = StyleSheet.create({
  v_keyboard: {
    flex: 1,
    backgroundColor: 'white',
  },
  v_scroll: {
    backgroundColor: 'white',
    flex: 1,
  },
  img_bg: {
    width: '100%',
    height: height / 2.4,
  },
  ic_back: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: isIphoneX() ? getStatusBarHeight() + 20 : getStatusBarHeight(),
    left: 25,
  },
  root_view: {
    paddingHorizontal: 30,
    borderWidth: 0,
    justifyContent: 'center',
    // borderRadius: 1,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    marginHorizontal: 0,
    shadowRadius: 0,
    marginTop: -60,
  },
  ic_check: {
    width: 18,
    height: 18,
  },
  v_container: {
    paddingVertical: 40,
  },
  img_logo: {
    height: 45,
    width: 133,
    alignSelf: 'center',
  },
  txt_title: {
    marginVertical: 24,
    fontFamily: R.fonts.san_regular,
    fontSize: 15,
    alignSelf: 'center',
  },
  containerChk: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 0,
    marginLeft: 0,
    padding: 0,
    //  / paddingBottom: 15,
  },
  text: {
    fontSize: 14,
    fontFamily: R.fonts.san_regular,
    fontWeight: '400',
    color: colors.label,
  },
  txt_forgot_pass: {
    color: colors.colorDefault.text,
    fontSize: 14,
    fontFamily: R.fonts.san_regular,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  v_forgot_pass: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  v_register: {
    flexDirection: 'row',
    marginTop: -60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  txt_question: {
    fontFamily: R.fonts.san_regular,
    fontSize: 15,
    color: 'black',
  },
  txt_register: {
    fontFamily: R.fonts.san_regular,
    fontSize: 16,
    color: colors.primary,
    marginLeft: 5,
  },
})

const mapStateToProps = (state: any) => ({
  switch: state[APP_SLICE.SWITCH].switch,
})

const mapDispatchToProps = {
  navigateSwitch,
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

{
  /* <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
        backgroundColor: '#336',
      }}
    >
      <Text style={{ marginBottom: 100 }}>Login</Text>
      <Button
        onPress={() => {
          requestLogin()
        }}
        title="Login to continue"
      />
      <Button
        onPress={() => {
          NavigationUtil.navigate(SCREEN_ROUTER_AUTH.REGISTER)
        }}
        title="Register"
      />

      <Button
        onPress={() => {
          NavigationUtil.navigate(SCREEN_ROUTER_AUTH.FORGOT_PASSWORD)
        }}
        title="Quên mật khẩu"
      />
    </View> */
}
