/* import React, { Component } from 'react';
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
import axios from 'axios'
var roomhome
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

  axios.get("http://197.27.92.203:9880/sib-api/booking/bookings/with-details/by-room/"+route.params.room)
  .then((response)=>{
     console.log(response.data)
    roomhome = response.data;
  }) 
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
          
          </Text>
          <Text size={30} bold white style={styles.title}>
         { roomhome.room.id}
          </Text>

         

           
             
                 
            
            
         
          
        </View>
        
        <View style={[styles.section, styles.sectionLarge]}>
          <Text color="#19e7f7" hCenter size={15} style={styles.description}>
            {' '}
            Place specially adapted for holding work meetings, offices, general meetings, advice  ,
       
                   
 
   </Text>
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text white bold size={50} style={styles.price}>
                {isExtended ? 'Libre' : 'Libre'}
              </Text>
            </View>
            

            <TouchableOpacity
              style={styles.priceLink}
              onPress={() =>
                isExtended ? setIsExtended(false) : setIsExtended(true)
              }
            >
            
              
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
}); */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
import axios from 'axios'
import moment from "moment";
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { Button } from 'react-native-ui-lib';
import Timeline from 'react-native-timeline-flatlist'
import { HorizontalTimeline } from 'react-native-horizontal-timeline';
var consturl = require('../../const/bookapi')() + 'sib-api/booking/bookings/with-details/by-room/';

var datatabletimline  = [
  {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
  {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
  {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
  {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
  {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
]
function formatDate(momentToFormat) {
  if (moment(momentToFormat).format("YYYY-MM-DD [at] HH:mm:ss") === "Invalid date") {
    return "Invalid or empty date "
  } else {
    if(moment(momentToFormat).format("DD")[0]==0){
      return moment(momentToFormat).format("D")
    }
else{
return moment(momentToFormat).format("DD")
}
     
  }
}
var datacc ={};
export default class Roomdetails extends Component <Props> {

  //http://localhost:9880/sib-api/booking/bookings/with-details/by-room/9
  constructor(props) {
    super(props);
    this.state = {

      //datacalen: {"1": { marked: true, info: "reserved by admin" } , "15": { marked: true, info: "reserved by admin" }, "4": { marked: true, info: "reserved by admin" } ,"7": { marked: true, info: "reserved by admin" }  },
      datacalen:{}
    }
  }



  componentDidMount() {
    //console.log(urlcnst)   4/between-dates?startDate=2020-08-30T08:16:14.132Z&endDate=2020-10-18T08:16:14.132Z
    /* axios.get(consturl+ this.props.route.params.room ).then(response => response.data)
      .then((data) => {
     console.log(data)
      //  datacc = data.reduce((accumulator, currentValue) => ({...accumulator,[formatDate(Object.keys(currentValue)[0])]: { marked: Object.values(currentValue)[0].topic  , info : Object.values(currentValue)[0].topic}}) ,{}) 


//console.log( "this data log", data.reduce((accumulator, currentValue) => ({...accumulator,[formatDate(Object.keys(currentValue)[0])]: { marked: Object.values(currentValue)[0].topic  , info : Object.values(currentValue)[0].topic}}) ,{}));

      //    console.log(formatDate(Object.keys(data[i])[0]))

        




      }) */
      
  }



  openroombooking = room => {
    this.props.navigation.navigate('Bookingsadd', {
      room
    })
  };
  render() {
   // var room = this.props.route.params.roomid.room
   console.log(this.props)
   /*  axios.get(consturl + this.props.route.params.roomid.room.room.id + '/between-dates?startDate=2020-08-30T08:16:14.132Z&endDate=2020-10-18T08:16:14.132Z').then(response => response.data)
    .then((data) => {
   
      datacc = data.reduce((accumulator, currentValue) => ({...accumulator,[formatDate(Object.keys(currentValue)[0])]: { marked: Object.values(currentValue)[0].topic  , info : Object.values(currentValue)[0].topic}}) ,{}) 

 return data.reduce((accumulator, currentValue) => ({...accumulator,[formatDate(Object.keys(currentValue)[0])]: { marked: Object.values(currentValue)[0].topic  , info : Object.values(currentValue)[0].topic}}) ,{});




    }) */
   
    
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles.bgImage}
          resizeMode="cover"
        >
          <View style={styles.section}>

            <Image source={{ uri: 'https://i.ibb.co/GxZZqWz/salle2.jpg' }}
              style={{ width: 600, height: 220 }} />



          </View>

          <View style={styles.section}>


            {/* <Text size={30} hCenter bold white style={styles.title}>
          Room:  {room.room.name}
          </Text> */}
          </View>
          <View style={styles.section}>


            {/* <Text size={30} hCenter bold white style={styles.title}>
         Room:  {room.room.name}
         </Text> */}
          </View>

          <View style={styles.section}>
            <Text size={30} hCenter bold white style={styles.title}>
              Room:  {/* {room.room.name} */}
            </Text>

            <Text size={30} bold white style={styles.title}>
              floor  {/* {room.floor.name} */}
            </Text>
            <Text size={30} bold white style={styles.title}>
              building {/* {room.building.name} */}
            </Text>

          </View>


          <View style={[styles.section, styles.sectionLarge]}>


          </View>

          <HorizontalTimeline data={  {"14": {"info": "testa", "marked": "testa"}, "22": {"info": "here meeting", "marked": "here meeting"}, "4": {"info": "test", "marked": "test"}, "8": {"info": "example", "marked": "example"}}  } date={new Date().toISOString()} />

         {/*  <Button onPress={() => this.openroombooking(room)}
          >
            <Text color="#00000" hCenter bold white size={30} style={styles.description}>
              {' '}
             Add Booking
            </Text>
          </Button> */}

            <Timeline
          data={datatabletimline}
          circleSize={20}
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
        />

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
