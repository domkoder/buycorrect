import React, { useState, useRef } from 'react';
import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    Dimensions, 
    ScrollView, 
    TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons'

import purpleBlob from '../assets/purpleblob.png'
import whiteBlob from '../assets/whiteblob.png'

const { width } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {

    const [currentPage, setCurrentPage] = useState(0);
    const scrollViewRef = useRef(null);

    const onboardingData = [
        {
          title: 'Welcome to buycorrect!',
          description: 'The ultimate marketplace designed exclusively for students like you.',
          image: require('../assets/onboarding1.png'),
        },
        {
          title: 'Browse and Discover',
          description: 'Explore our extensive marketplace categories and discover a treasure trove of student essentials.',
          image: require('../assets/onboarding2.png'),
        },
        {
          title: 'Get Started',
          description: 'Ready to embark on your journey? Join thousands of students today and unlock a world of opportunities.',
          image: require('../assets/onboarding3.png'),
        },
      ];
    
      const handleNext = () => {
        if (currentPage < onboardingData.length - 1) {
          scrollViewRef.current.scrollTo({ x: width * (currentPage + 1), animated: true });
          setCurrentPage(currentPage + 1);
        } else {
          navigation.navigate('Login');
        }
      };
    
      const handleSkip = () => {
        navigation.navigate('Login');
      };
    
      const handleScroll = (event) => {
        const { contentOffset } = event.nativeEvent;
        const pageIndex = Math.round(contentOffset.x / width);
        setCurrentPage(pageIndex);
      };

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {onboardingData.map((item, index) => (
                    <View key={index} style={(index%2 !== 0 ? styles.oddSlide : styles.slide)}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={[styles.title, { color: index%2 !== 0 ? 'black' : 'white'}]}>{item.title}</Text>
                        <Text style={[styles.description, { color: index%2 !== 0 ? 'black' : 'white'}]}>{item.description}</Text>
                        
                        {/* skip button */}
                        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                            <Text style={(index%2 !== 0 ? styles.oddSkipButtonText : styles.skipButtonText)}>Skip</Text>
                        </TouchableOpacity>
                        
                        {/* scroll indicator */}
                        <View style={styles.indicatorContainer}>
                            {onboardingData.map((_, index) => (
                            <View
                                key={index}
                                style={[styles.indicator, index === currentPage ? styles.activeIndicator : null]}
                            />
                            ))}
                        </View>


                        <View style={styles.blob}>
                            <Image source={index%2 !== 0 ? purpleBlob : whiteBlob} />
                        </View>

                        {/* next button */}
                        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                        {/* style={styles.nextButtonText} color={`${index%2!==0 ? "white":'#583AEE'}`} */}
                            <AntDesign name='arrowright' style={[styles.nextButtonText, { color: index % 2 !== 0 ? 'white' : '#583AEE', fontSize: 26 }]} />
                            {/* <Text style={styles.nextButtonText}>{currentPage === onboardingData.length - 1 ? 'Login' : 'Next'}</Text> */}
                        </TouchableOpacity>
                        
                    </View>
                ))}


            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      oddSlide: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
      },
      slide: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#583AEE',
      },
      image: {
        width: 350,
        height: 322,
        marginBottom: 30,
      },
      title: {
        fontSize: 24,
        fontWeight: 'medium',
        marginBottom: 10,
      },
      description: {
        fontSize: 14,
        textAlign: 'center',
        color: 'white'
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
      },
      skipButton: {
        padding: 10,
        position: 'absolute',
        top: 60,
        right: 20
      },
      oddSkipButtonText: {
        fontSize: 16,
        color: 'black',
      },
      skipButtonText: {
        fontSize: 16,
        color: '#fff',
      },
      nextButton: {
        position: 'absolute',
        bottom: 90,
        right: 50
      },
      nextButtonText: {
        fontSize: 16,
        color: '#fff',
      },
      indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 90,
        left: 20,
      },
      indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#888',
        marginHorizontal: 4,
      },
      activeIndicator: {
        backgroundColor: '#fff',
      },
      blob: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        zIndex: -2
      },
})

export default WelcomeScreen;
