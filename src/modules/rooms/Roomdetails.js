/* import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  Image,
  Alert
} from 'react-native';
import axios from 'axios'
export default class Roomdetails extends Component {

  constructor(props) {
    super(props);
    state = {
      roomwithdetails:{}

    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  componentDidMount(){

   var urll ="http://192.168.1.187:9880/sib-api/booking/bookings/with-details/by-room/"+this.props.route.params.roomid
   //console.log(urll)
    axios.get(urll).then(response => response.data)
    .then((data) => {
     // this.setState({ tableHead: Object.keys(data[0]) })
   //   tableData.push(Object.values(data[0]))
   this.setState({roomwithdetails : data})
//console.log(data)
  
       
     })
    }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles.bgImage}
          resizeMode="cover"
        >
          <View style={styles.section}>
           
            <Image source={{uri: ''}}
         style={{width: 400, height: 200}} />
           
          
            
          </View>
          
          <View style={styles.section}>
            <Text color="#19e7f7" size={15}>
                  
                </Text>
  
            <Text size={30} bold white style={styles.title}>
              
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
                    ? 'unitil 13'
                    : 'until 13:00'}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#FF4DFF",
  },
  signUpText: {
    color: 'white',
  }
});
  */

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
import { HorizontalTimeline } from 'react-native-horizontal-timeline';
var consturl = require('../../const/bookapi')() + 'sib-api/booking/bookings/by-room/'
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
export default class Roomdetails extends Component {

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
    axios.get(consturl + this.props.route.params.roomid.room.room.id + '/between-dates?startDate=2020-08-30T08:16:14.132Z&endDate=2020-10-18T08:16:14.132Z').then(response => response.data)
      .then((data) => {
     
        datacc = data.reduce((accumulator, currentValue) => ({...accumulator,[formatDate(Object.keys(currentValue)[0])]: { marked: Object.values(currentValue)[0].topic  , info : Object.values(currentValue)[0].topic}}) ,{}) 


console.log( "this data log", data.reduce((accumulator, currentValue) => ({...accumulator,[formatDate(Object.keys(currentValue)[0])]: { marked: Object.values(currentValue)[0].topic  , info : Object.values(currentValue)[0].topic}}) ,{}));

      //    console.log(formatDate(Object.keys(data[i])[0]))

        




      })
      
  }



  openroombooking = room => {
    this.props.navigation.navigate('Bookingsadd', {
      room
    })
  };
  render() {
    var room = this.props.route.params.roomid.room
    console.log(datacc)
    axios.get(consturl + this.props.route.params.roomid.room.room.id + '/between-dates?startDate=2020-08-30T08:16:14.132Z&endDate=2020-10-18T08:16:14.132Z').then(response => response.data)
    .then((data) => {
   
      datacc = data.reduce((accumulator, currentValue) => ({...accumulator,[formatDate(Object.keys(currentValue)[0])]: { marked: Object.values(currentValue)[0].topic  , info : Object.values(currentValue)[0].topic}}) ,{}) 

 return data.reduce((accumulator, currentValue) => ({...accumulator,[formatDate(Object.keys(currentValue)[0])]: { marked: Object.values(currentValue)[0].topic  , info : Object.values(currentValue)[0].topic}}) ,{});




    })
   
    
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
              Room:  {room.room.name}
            </Text>

            <Text size={30} bold white style={styles.title}>
              floor  {room.floor.name}
            </Text>
            <Text size={30} bold white style={styles.title}>
              building {room.building.name}
            </Text>

          </View>


          <View style={[styles.section, styles.sectionLarge]}>


          </View>

          <HorizontalTimeline data={  {"14": {"info": "testa", "marked": "testa"}, "22": {"info": "here meeting", "marked": "here meeting"}, "4": {"info": "test", "marked": "test"}, "8": {"info": "example", "marked": "example"}}  } date={new Date().toISOString()} />

          <Button onPress={() => this.openroombooking(room)}
          >
            <Text color="#00000" hCenter bold white size={30} style={styles.description}>
              {' '}
             Add Booking
            </Text>
          </Button>

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
