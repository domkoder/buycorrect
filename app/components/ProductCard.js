import { View, Text, StyleSheet, Image, Dimensions } from "react-native"

const windowWidth = Dimensions.get('window').width;
const numColumns = 2;

const cardWidth = (windowWidth - (numColumns + 1) * 8) / numColumns;
export const ProductCard = ({ imageSource, title, price }) => {


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
    image: {},
    body: {},
    title: {},
    price: {},
    card: {
        width: 178,
        marginBottom: 12,
        marginEnd: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        overflow: 'hidden'
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
        color: '#090A0A'
      },
      price: {
        fontSize: 12,
        color: '#6B4EFF',
      },
})
