import {Image, StyleSheet, View} from 'react-native'
import {Feather} from '@expo/vector-icons'

import colors from '../config/colors'

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Feather name="trash" color="white" size={25} />
      </View>
      <View style={styles.deleteIcon}>
        <Feather name="x" color="white" size={30} />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 60,
    left: 20,
    padding: 10,
  },
  container: {
    backgroundColor: colors.inkDarkest,
    flex: 1,
  },
  deleteIcon: {
    position: 'absolute',
    top: 60,
    right: 20,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default ViewImageScreen
