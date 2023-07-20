import {View, Text, StyleSheet, Image} from 'react-native'
import colors from '../config/colors'

export const ProductCard = ({imageSource, title, price}) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.cardBody}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 178,
    marginBottom: 12,
    marginEnd: 8,
    borderRadius: 8,
    backgroundColor: colors.white,
    shadowColor: colors.inkDarkest,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    padding: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: 'semibold',
    // marginBottom: 8,
    color: colors.inkDarkest,
  },
  price: {
    fontSize: 12,
    color: colors.primaryBase,
  },
})
