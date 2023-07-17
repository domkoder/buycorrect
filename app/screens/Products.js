import { 
    View, 
    Text, 
    TextInput, 
    SafeAreaView, 
    StyleSheet, 
    ScrollView, 
    FlatList,
    Dimensions, 
    TouchableOpacity} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { ProductCard } from '../components/ProductCard'

const PillFilter = ({ tag}) => {
    return (
            <View style={{ 
                paddingHorizontal: 16, 
                paddingVertical: 8, 
                backgroundColor: '#E7E7FF',
                marginRight: 8,
                borderRadius: 32,
                fontSize: 12}}>
                <Text>{tag}</Text>
            </View>
    )
}

export default function Products({ navigation }) {

    const windowWidth = Dimensions.get('window').width;
    const numColumns = 2;
    const cardWidth = (windowWidth - (numColumns + 1) * 8) / numColumns;

    let tags = ["All", "Electronics", "Books", "Home", "Fashion"];

    const products = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
          image:require('../assets/product_1.png'),
          price: 9000
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
          image:require('../assets/product_2.png'),
          price: 9000
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
          image:require('../assets/product_1.png'),
          price: 9000
        },
        {
            id: '3ac38afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
            image:require('../assets/product_2.png'),
            price: 9000
        },
        {
            id: '18694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
            image:require('../assets/product_1.png'),
            price: 9000
        },
        {
            id: '3ac38xfc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
            image:require('../assets/product_2.png'),
            price: 9000
        },
        {
            id: '18694a0z-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
            image:require('../assets/product_1.png'),
            price: 9000
        },

      ];

  return (
    // <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput style={styles.search} placeholder='Search' />
                <MaterialCommunityIcons name='tune-variant' size={36} />
            </View>

            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.pill}>
                        {tags.map(data => (
                            <PillFilter key={data} tag={data} />
                        ))}
                    </View>
                </ScrollView>
            </View>

            <View style={{ paddingHorizontal: 23, alignItems: 'center' }}>
 
                <FlatList 
                    data={products}
                    numColumns={numColumns}
                    horizontal={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { data: item })}>
                          <ProductCard title={item.title} price={item.price} imageSource={item.image} />
                        </TouchableOpacity>
                      )}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.flatListContainer}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    scroll />
            </View>
        </View>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        
    },
    flatListContainer: {
        justifyContent: 'space-between',
        paddingBottom: 230,
        // paddingHorizontal: 8,
        // paddingTop: 8,
      },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 9,
        paddingHorizontal: 23

    },
    search: {
        borderRadius: 8,
        backgroundColor: '#E7E7FF',
        fontSize: 16,
        height: 36,
        width: 325,
    },

    pill: {
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 23
    }
})
