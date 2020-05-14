
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar ,ScrollView} from 'react-native';
import axios from 'axios';
import Addimages from '../../addimages/importimage'


export default class Buildings extends Component<Props> {

constructor(props) {
   super(props);
    //this.login= this.login.bind(this);
    this.registerCall = this.registerCall.bind(this);
    var {height, width} = Dimensions.get('window');
    this.state = {screenHeight: height, screenWidth: width,
                 address: '',
                 city:'',
                 country : '',
                 description:'',
                 gpsLocation: '',
                 name:'',
                 state:'',
                 postalCode:'',
                 type:'',                
                 status: '',
                 wholeResult: '',
                 baseUrl: 'http://192.168.1.21:9970/sib-api/common/Building/sib-api/common/building' };

   }

onClickListener = (viewId) => {
        // Alert.alert(this.state.address+" "+this.state.country+" "+this.state.gpsLocation , "View_id "+viewId);
        if(this.state.address || this.state.address != " "){
          if(this.state.city){            
         if(this.state.country){
          if(this.state.gpsLocation){
            if(this.state.description){
              this.registerCall();
           }else{
          Alert.alert("Please enter country");
         }
         }else{
        Alert.alert("Please enter country");
        }
      }else{
    Alert.alert("Please enter city");
      }
   }else{
    Alert.alert("Please enter city");
   }
  }else{
    Alert.alert("Please enter description");
  }   
  
 }

 registerCall(){
  var that = this;
  var url = that.state.baseUrl;
   console.log("url:"+url);
  let body= {"address": this.state.address, "city":this.state.city, "country": this.state.country,"gpsLocation": this.state.gpsLocation , "description":this.state.description,"name":this.state.name ,"postalCode":this.state.postalCode,"state":this.state.state,"type":this.state.type}
  console.log(body)
  
  axios.post(url , body ) .then(function (response) {
        
          return response.json();
        }).then(function (result) {  
           // console.log(result);
           if(!result.error){
            that.setState({ status: result.error,
                            wholeResult: result,
                         });
            Alert.alert("User register successfully \n userId: "+that.state.wholeResult.user.uid);
            console.log(that.state.wholeResult.user.uid);
        }else{
         Alert.alert(result.error_msg);
         console.log(result);
   }
}).catch(function (error) {
   console.log("-------- error ------- "+error);
   alert("result:"+error)
 });
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

   <Text style={styles.input}>Add Building</Text>

   <View style={styles.inputContainer}>
   <TextInput style={styles.inputs}
    placeholder="address"
    keyboardType="country-address"
    underlineColorAndroid='transparent'
    onChangeText={(address) => this.setState({address})}/>
   </View>
   <View style={styles.inputContainer}>
   <TextInput style={styles.inputs}
    placeholder="city"
    keyboardType="country-address"
    underlineColorAndroid='transparent'
    onChangeText={(city) => this.setState({city})}/>
   </View>

   <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="country"
     keyboardType="country-address"
     underlineColorAndroid='transparent'
     onChangeText={(country) => this.setState({country})}/>
   </View>
   <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="description"
     keyboardType="country-address"
     underlineColorAndroid='transparent'
     onChangeText={(description) => this.setState({description})}/>
   </View>
   
   <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="gpsLocation"
     keyboardType="country-address"
     underlineColorAndroid='transparent'
     onChangeText={(gpsLocation) => this.setState({gpsLocation})}/>
   </View>
   <View style={styles.inputContainer}>
    <Addimages></Addimages>
    </View>
   <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="type"
     keyboardType="type"
     underlineColorAndroid='transparent'
     onChangeText={(type) => this.setState({type})}/>
   </View>
   <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="name"
     keyboardType="name"
     underlineColorAndroid='transparent'
     onChangeText={(name) => this.setState({name})}/>
   </View>
   <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="postalCode"
     keyboardType="postalCode"
     underlineColorAndroid='transparent'
     onChangeText={(postalCode) => this.setState({postalCode})}/>
   </View>
   <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="state"
     keyboardType="state"
     underlineColorAndroid='transparent'
     onChangeText={(state) => this.setState({state})}/>
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
 signUpTextt:{
  color: 'red',
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