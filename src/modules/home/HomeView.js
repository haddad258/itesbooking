import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { Button } from 'react-native-ui-lib';
var dateex ;
export default function HomeScreen({ isExtended, setIsExtended,route }) {
  // const rnsUrl = 'https://reactnativestarter.com';
  // const handleClick = () => {
  //   Linking.canOpenURL(rnsUrl).then(supported => {
  //     if (supported) {
  //       Linking.openURL(rnsUrl);
  //     } else {
  //       console.log(`Don't know how to open URI: ${rnsUrl}`);
  //     }
  //   });
  // };

console.log(route.params)

if(!route.params){
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View style={styles.section}>
         
          <Image source={{uri: 'https://i.ibb.co/vV7yp07/salle.jpg'}}
       style={{width: 400, height: 200}} />
         
        
          
        </View>
        
        <View style={styles.section}>
          <Text color="#19e7f7" size={15}>
          <Text size={30} bold white style={styles.title}>
            paramtres -- change default Home page 
            {  new Date().getMinutes()}
          </Text>
              </Text>

          <Text size={30} bold white style={styles.title}>
         
          </Text>
        </View>
        
     
            <TouchableOpacity
              style={styles.priceLink}
              onPress={() =>
                isExtended ? setIsExtended(false) : setIsExtended(true)
              }
            >
             
              
            </TouchableOpacity>
         
       
        
      </ImageBackground>
    </View>
  );


}else{
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View style={styles.section}>
         
          <Image source={{uri: 'https://i.ibb.co/vV7yp07/salle.jpg'}}
       style={{width: 400, height: 200}} />
         
        
          
        </View>
        
        <View style={styles.section}>
          <Text color="#19e7f7" size={15}>
                
              </Text>

          <Text size={30} bold white style={styles.title}>
           {route.params.room.room.room.name }
          </Text>

          <Text size={30} bold white style={styles.title}>
           {new Date(route.params.room.bookings.startDateTime).toJSON().replace('T',' ').substring(0,19) }

         
          </Text>
        </View>
        
        <View style={[styles.section, styles.sectionLarge]}>
          <Text color="#19e7f7" hCenter size={15} style={styles.description}>
            {' '}
            Place specially adapted for holding work meetings, offices, general meetings, advice
          </Text>
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text white bold size={50} style={styles.price}>
                {isExtended ? 'Libre' : 'reserved'}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.priceLink}
              onPress={() =>
                isExtended ? setIsExtended(false) : setIsExtended(true)
              }
            >
              <Text white size={14}>
                {isExtended
                  ? new Date(route.params.room.bookings.startDateTime).toJSON().replace('T',' ').substring(0,19)
                  : new Date(route.params.room.bookings.endDateTime).toJSON().replace('T',' ').substring(0,19)}
              </Text>
              
            </TouchableOpacity>
          </View>
        </View>
        
      </ImageBackground>
    </View>
  );
}






  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
   
    
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
