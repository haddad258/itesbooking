
   
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar,ScrollView} from 'react-native';
import axios from 'axios';

var savebooking = require('../../const/bookapi')()+'sib-api/booking/bookings'
var k;
export default class Loginuser extends Component<Props> {

  constructor(props) {
    super(props);
     //this.login= this.login.bind(this);
     this.registerCall = this.registerCall.bind(this);
     var {height, width} = Dimensions.get('window');
     this.state = {screenHeight: height, screenWidth: width,
                  
                  password: '',
                  
                  loginuser:'',
                  
                  };
 
    }


    showuserinformation = userinfo => {
        this.props.navigation.navigate('Profile',{
          userinfo
        })
      };
      
      
 
 onClickListener = (viewId) => {
         // Alert.alert(this.state.firstName+" "+this.state.email+" "+this.state.password , "View_id "+viewId);
      
         this.registerCall(); 
        
        /*    if(this.state.Userlogin){
             if(this.state.password){
              
            }else{
           Alert.alert("Please enter Userlogin & password");
          }
          }else{
         Alert.alert("Please enter Userlogin & password");
         } */
      
  
  
   
  }

  registerCall(){
 let body= this.state
  

 } 
 
 render() {

   return (
     
 
      <ImageBackground
        source={require('../../assets/images/background.png')}
        imageStyle={{resizeMode: 'stretch'}}
        style={{width: '100%', height: '100%'}}>
   <ScrollView>

     
     <StatusBar
        backgroundColor="#0B7600"
        barStyle="light-content"/>
 
    <View style={styles.container}>
 
   <Text style={styles.input}>Login</Text>
 
   
    <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="UserLogin"
     keyboardType="email-address"
     underlineColorAndroid='transparent'
     onChangeText={(loginuser) => this.setState({loginuser})}/>
    </View>
   
 
  
 
    <View style={styles.inputContainer}>
 
      <TextInput style={styles.inputs}
       placeholder="Password"
       secureTextEntry={true}
       underlineColorAndroid='transparent'
       onChangeText={(password) => this.setState({password})}/>
    </View>
 
    <TouchableOpacity style={styles.submitButtonText} onPress={() => this.showuserinformation(this.state)}>
      <Text style={styles.signUpText}>Login user</Text>
    </TouchableOpacity>
 
   </View>
   </ScrollView>
   </ImageBackground>
   
   );
  }
 }
 
 const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
   input: {
    margin: 15,
    fontSize: 40,
     marginBottom : 40,
     color : 'black'
   },
   
   submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 60,
  },
  submitButtonText:{
    color: '#FFFFFF',
    backgroundColor: '#3462FD',
    width:350,
    height:45,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signUpText:{
    color: '#FFFFFF',
    alignItems: 'center'
  },
  inputContainer: {
    borderBottomColor: '#05C203',
    backgroundColor: '#FFFFFF',
    borderRadius:5,
    borderBottomWidth: 1,
    width:350,
    height:60,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
  },
  inputs:{
    height:45,
    fontSize:20,
    borderBottomColor: '#FFFFFF',
    flex:3,
   },
 })