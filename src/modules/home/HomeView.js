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
import { HorizontalTimeline } from 'react-native-horizontal-timeline';
const data = [
  { name: "Wake up", dataType: "user-data", date: "2012-09-28T07:00:00", isSelected: false, isNotPermitted: false, r: 7, cy: 50, cx: 0, activity: { name: "Example Activity A", startTime: "2012-09-28T06:50:00", endTime: "2012-09-28T11:45:00" }  },
  { name: "Breakfast", dataType: "user-data", date: "2012-09-28T07:30:00", isSelected: false, isNotPermitted: false, r: 7, cy: 50, cx: 0, activity: { name: "Example Activity A", startTime: "2012-09-28T06:50:00", endTime: "2012-09-28T11:45:00" } },
  { name: "Leave kids at school", dataType: "user-data", date: "2012-09-28T07:45:00", isSelected: false, isNotPermitted: false, r: 7, cy: 50, cx: 0, activity: { name: "Example Activity A", startTime: "2012-09-28T06:50:00", endTime: "2012-09-28T11:45:00" } },
  { name: "Check email", dataType: "user-data", date: "2012-09-28T08:00:00", isSelected: false, isNotPermitted: false, r: 7, cy: 50, cx: 0, activity: { name: "Example Activity A", startTime: "2012-09-28T06:50:00", endTime: "2012-09-28T11:45:00" } },
  { name: "Lunch", dataType: "user-data", date: "2012-09-28T11:30:00", isSelected: false, isNotPermitted: false, r: 7, cy: 50, cx: 0, activity: { name: "Example Activity A", startTime: "2012-09-28T06:50:00", endTime: "2012-09-28T11:45:00" } },
  { name: "Send report", dataType: "user-data", date: "2012-09-28T13:15:00", isSelected: false, isNotPermitted: true, r: 7, cy: 50, cx: 0, activity: null },
  { name: "Pick kids", dataType: "user-data", date: "2012-09-28T17:16:00", isSelected: false, isNotPermitted: true, r: 7, cy: 50, cx: 0, activity: null },
  { name: "Dinner", dataType: "user-data", date: "2012-09-28T18:13:00", isSelected: false, isNotPermitted: false, r: 7, cy: 50, cx: 0, activity: { name: "Example Activity B", startTime: "2012-09-28T17:45:00", endTime: "2012-09-28T20:30:00" } },
  { name: "Watch a movie", dataType: "user-data", date: "2012-09-28T20:16:00", isSelected: false, isNotPermitted: false, r: 7, cy: 50, cx: 0, activity: { name: "Example Activity B", startTime: "2012-09-28T17:45:00", endTime: "2012-09-28T20:30:00" } },
  { name: "Go to sleep", dataType: "user-data", date: "2012-09-28T22:00:00", isSelected: false, isNotPermitted: true, r: 7, cy: 50, cx: 0, activity: null },
  { name: "Example system event A", dataType: "system-data", date: "2012-09-28T14:30:20", isSelected: false, isNotPermitted: true, y: 42, cx: 0 },
  { name: "Example system event B", dataType: "system-data", date: "2012-09-28T17:45:00", isSelected: false, isNotPermitted: true, y: 42, cx: 0 },
  { name: "Example system event C", dataType: "system-data", date: "2012-09-28T19:00:15", isSelected: false, isNotPermitted: false, y: 42, cx: 0 },
  { name: "Example system event D", dataType: "system-data", date: "2012-09-28T22:20:00", isSelected: false, isNotPermitted: false, y: 42, cx: 0 }
]
export default function HomeScreen({ isExtended, setIsExtended,route }) {
  // const rnsUrl = 'https://reactnativestarter.com';
  // const handleClick = () => {
  //   Linking.canOpenURL(rnsUrl).then(supported => {
  //     if (supported) {
  //       Linking.openURL(rnsUrl);
  //     } else {
  //       //console.log(`Don't know how to open URI: ${rnsUrl}`);
  //     }
  //   });
  // };

//console.log(route.params)

if(!route.params){
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View style={styles.section}>
         
          <Image source={{uri: 'https://i.ibb.co/87bRmTF/salle3.jpg'}}
       style={{width: 400, height: 200}} />
         
        
          
        </View>
        
        <View style={styles.section}>
          <Text color="#19e7f7" size={15}>
          <Text size={30} bold white style={styles.title}>
            paramtres -- change default Home page 
            
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
         
          <Image source={{uri: 'https://i.ibb.co/GxZZqWz/salle2.jpg'}}
       style={{width: 400, height: 200}} />
         
        
          
        </View>
        
        <View style={styles.section}>
          <Text color="#19e7f7" size={15}>
                
              </Text>

          <Text size={30} bold white style={styles.title}>
           {route.params.room.room.room.name }
          </Text>
          <Text size={30} bold white style={styles.title}>
           {route.params.room.room.floor.name }
          </Text>

         

           
             
                 
            
            
         
          
        </View>
        
        <View style={[styles.section, styles.sectionLarge]}>
          <Text color="#19e7f7" hCenter size={15} style={styles.description}>
            {' '}
            Place specially adapted for holding work meetings, offices, general meetings, advice  ,
       
                   {   route.params.room.room.room.description } 
 
   </Text>
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text white bold size={50} style={styles.price}>
                {isExtended ? 'Libre' : 'Libre'}
              </Text>
            </View>
            <HorizontalTimeline data={ddataata} date={new Date().toISOString()} />

            <TouchableOpacity
              style={styles.priceLink}
              onPress={() =>
                isExtended ? setIsExtended(false) : setIsExtended(true)
              }
            >
             {/*  <Text white size={14}>
                {isExtended
                  ? new Date(route.params.room.bookings.startDateTime).toJSON().replace('T',' ').substring(0,19)
                  : new Date(route.params.room.bookings.endDateTime).toJSON().replace('T',' ').substring(0,19)}
              </Text> */}
              
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
