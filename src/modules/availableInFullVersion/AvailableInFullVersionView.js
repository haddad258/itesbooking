
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar,ScrollView} from 'react-native';
import axios from 'axios';
import Time from './Time'


export default class AvailableInFullVersionScreen extends Component<Props> {

  constructor(props) {
    super(props);
     //this.login= this.login.bind(this);
     this.registerCall = this.registerCall.bind(this);
     var {height, width} = Dimensions.get('window');
     this.state = {screenHeight: height, screenWidth: width,
                  firstName: '',
                  lastName:'',
                  email : '',
                  password: '',
                  phone:'',
                  status: '',
                  wholeResult: '',
                  dateS:'',
                  dateE:'',
                  Userlogin:'',
                  
                  baseUrl: 'http://192.168.43.236:9970/sib-api/common/user' };
 
    }
 
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
  handeldateS(date){
    
    this.setState({dateS: date +".422Z"});
    
  }
  handeldateE(date){

    this.setState({dateE: date +".422Z"});
  }
  registerCall(){
   var that = this;
   var url = that.state.baseUrl;
    ////console.log("url:"+url);
   //let body= {"firstName": this.state.firstName, "lastName":this.state.lastName, "email": this.state.email,"password": this.state.password , "phone":this.state.phone,}
   let body ={
    "idRoom": this.props.route.params.article,
    "startDateTime": this.state.dateS,
    "endDateTime": this.state.dateE,
    "userLogin": this.state.UserLogin,
    "password":this.state.password

  }
 //console.log(body)
  axios.post('http://192.168.1.187:9880/sib-api/booking/bookings/',body )
   .then(function (response) {
     alert("the floor was successfully created with id " + response.data);
    // //console.log("this.reponse")
   })
   .catch(function (error) {
     alert("result:"+error)
   }); 
   
  /*  //console.log(body)
   axios.post(url , body ) .then(function (response) {
         
           return response.json();
         }).then(function (result) {  
            // //console.log(result);
            if(!result.error){
             that.setState({ status: result.error,
                             wholeResult: result,
                          });
             Alert.alert("User register successfully \n userId: "+that.state.wholeResult.user.uid);
             //console.log(that.state.wholeResult.user.uid);
         }else{
          Alert.alert(result.error_msg);
          //console.log(result);
    }
 }).catch(function (error) {
    //console.log("-------- error ------- "+error);
    alert("result:"+error)
  });*/
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
 
   <Text style={styles.input}>Reserve {this.props.route.params.article}</Text>
    <Text>Start Date Booking </Text>
    <Time brand={this.handeldateS.bind(this)}></Time>
    <Text>End Date Booking </Text>
    <Time brand={this.handeldateE.bind(this)}></Time>
   
    <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="UserLogin"
     keyboardType="email-address"
     underlineColorAndroid='transparent'
     onChangeText={(UserLogin) => this.setState({UserLogin})}/>
    </View>
   
 
  
 
    <View style={styles.inputContainer}>
 
      <TextInput style={styles.inputs}
       placeholder="Password"
       secureTextEntry={true}
       underlineColorAndroid='transparent'
       onChangeText={(password) => this.setState({password})}/>
    </View>
 
    <TouchableOpacity style={styles.submitButtonText} onPress={() => this.onClickListener('sign_up')}>
      <Text style={styles.signUpText}>Sign up</Text>
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
 })