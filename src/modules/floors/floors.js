import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar ,ScrollView} from 'react-native';
import axios from 'axios';
import DropdownMenu from 'react-native-dropdown-menu';
import Addimages from '../../addimages/importimage'

export default class Floors extends Component<Props> {

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
                 baseUrl: 'http://192.168.1.21:9970/sib-api/common/Floor/sib-api/common/floor' };

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
  var data = [["Select or Create Building",]];
    var data1 = [["Select or Create Zone",]];

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

   <Text style={styles.input}>Add Floor</Text>
   <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="description"
     keyboardType="country-address"
     underlineColorAndroid='transparent'
     onChangeText={(description) => this.setState({description})}/>
   </View>
   <View style={styles.inputContainer}>
   <DropdownMenu
          style={{flex: 2}}
          bgColor={'white'}
          tintColor={'#AAAAAA'}
          activityTintColor={'red'}
          // arrowImg={}      
          // checkImage={}   
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}} 
          // maxHeight={300} 
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        ></DropdownMenu>
 </View>
 <View style={styles.inputContainer}>
   <DropdownMenu
          style={{flex: 2}}
          bgColor={'white'}
          tintColor={'#AAAAAA'}
          activityTintColor={'red'}
          // arrowImg={}      
          // checkImage={}   
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}} 
          // maxHeight={300} 
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data1}
        ></DropdownMenu>
             

         </View>
         <View style={styles.inputContainer}>
    <Addimages></Addimages>
    </View>
         <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="Name"
     keyboardType="Name"
     underlineColorAndroid='transparent'
     onChangeText={(name) => this.setState({name})}/>
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