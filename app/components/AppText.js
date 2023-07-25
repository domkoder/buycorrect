import {StyleSheet, Text} from 'react-native'
import {
  useFonts,
  Inter_500Medium,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import colors from '../config/colors'

const AppText = ({
  children,
  size = 'regular',
  weight = '500',
  style: customStyles = {},
}) => {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Text style={[styles[size], styles[`inter${weight}`], customStyles]}>
      {children}
    </Text>
  )
}

export default AppText

const styles = StyleSheet.create({
  text: {
    fontStyle: 'normal',
    fontWeight: 500,
    color: colors.inkDarkest,
  },

  large: {
    fontSize: 18,
    lineHeight: 24,
  },

  regular: {
    fontSize: 16,
    lineHeight: 24,
  },

  small: {
    fontSize: 14,
    lineHeight: 20,
  },

  tiny: {
    fontSize: 12,
    lineHeight: 16,
  },

  inter700: {
    fontFamily: 'Inter_700Bold',
    fontWeight: 700,
  },

  inter500: {
    fontFamily: 'Inter_500Medium',
    fontWeight: 500,
  },

  inter400: {
    fontFamily: 'Inter_400Regular',
    fontWeight: 400,
  },
})
