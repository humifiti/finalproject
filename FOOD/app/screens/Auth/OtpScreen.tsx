import React, { Component, useRef, useState, memo } from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ScreenWrapper from '@app/components/Screen/ScreenWrapper'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import R from '@app/assets/R'
import { colors } from '@app/theme'
import RNTextInput from '@app/components/RNTextInput'
import RNButton from '@app/components/RNButton'
import isEqual from 'react-fast-compare'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { SCREEN_ROUTER_AUTH } from '@app/constant/Constant'
const OtpScreenComponent = () => {
  const [phone, setPhone] = useState('')
  const phoneRef = useRef<RNTextInput>(null)
  const phoneInputRef = useRef<TextInput>(null)
  return (
    <ScreenWrapper
      back
      unsafe
      color="black"
      backgroundHeader="white"
      forceInset={['left']}
      titleHeader={'OTP'}
      children={
        <KeyboardAvoidingView
          enabled
          behavior="height"
          style={styles.v_keyboard}
        >
          <ScrollView
            keyboardShouldPersistTaps={'always'}
            style={styles.v_scroll}
          >
            <Text style={styles.v_note} children={R.strings().note_otp} />
            <Text style={styles.v_email} children={'ducthinhhp99@gmail.com'} />
            <OTPInputView
              style={styles.v_otp}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              pinCount={4}
            />
            <View style={styles.v_countDown}>
              <Text
                style={styles.txt_countDown}
                children={R.strings().expire}
              />
              <Text
                style={[styles.txt_countDown, { color: colors.primary }]}
                children={'03:12'}
              />
            </View>
            <RNButton
              style={styles.v_button}
              onPress={() => {
                NavigationUtil.navigate(SCREEN_ROUTER_AUTH.CHANGE_PASSWORD)
              }}
              title={R.strings().confirm}
            />
            <TouchableOpacity>
              <Text
                style={styles.txt_sendOtp}
                children={R.strings().send_back_otp}
              />
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      }
    />
  )
}

const styles = StyleSheet.create({
  v_keyboard: {
    flex: 1,
  },
  v_scroll: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 33,
  },
  v_note: {
    textAlign: 'center',
    fontFamily: R.fonts.san_regular,
    fontSize: 16,
    color: colors.colorDefault.text,
    marginHorizontal: 25,
    marginBottom: 16,
  },
  v_email: {
    textAlign: 'center',
    fontFamily: R.fonts.san_regular,
    fontSize: 16,
    color: colors.primary,
    marginHorizontal: 25,
    marginBottom: 24,
  },
  txt_countDown: {
    fontFamily: R.fonts.san_regular,
    fontSize: 16,
    color: colors.colorDefault.text,
  },
  v_textInput: {
    marginBottom: 40,
  },
  v_otp: {
    width: '80%',
    height: 60,
    marginBottom: 60,
    alignSelf: 'center',
  },
  underlineStyleBase: {
    width: 40,
    height: 65,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: 'black',
  },
  underlineStyleHighLighted: {
    borderColor: colors.label,
    color: colors.label,
  },
  v_countDown: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt_sendOtp: {
    textAlign: 'center',
    fontFamily: R.fonts.san_semi_bold,
    fontSize: 16,
    color: colors.primary,
    marginBottom: 24,
  },
  v_button: {
    marginBottom: 30,
  },
})
const OtpScreen = memo(OtpScreenComponent, isEqual)
const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OtpScreen)
