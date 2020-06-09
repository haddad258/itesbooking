import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar ,ScrollView} from 'react-native';
import axios from 'axios';
import DropdownMenu from 'react-native-dropdown-menu';
import Addimages from '../../addimages/importimage'

export default class Rooms extends Component<Props> {

constructor(props) {
   super(props);
    //this.login= this.login.bind(this);
    this.registerCall = this.registerCall.bind(this);
    var {height, width} = Dimensions.get('window');
    this.state = {screenHeight: height, screenWidth: width,
                 idBuilding: '',
                 idFloor:'',
                 idZone : '',
                 description:'',
                 idType: '',
                 name:'',
                 state:'',
                 postalCode:'',
                 type:'',                 
                 status: '',
                 wholeResult: '',
                baseUrl: 'http://192.168.1.21:9970/sib-api/common/rooms' 
              };

   }

onClickListener = (viewId) => {
        // Alert.alert(this.state.idBuilding+" "+this.state.idZone+" "+this.state.idType , "View_id "+viewId);
        if(this.state.idBuilding || this.state.idBuilding != " "){
          if(this.state.idFloor){            
         if(this.state.idZone){
          if(this.state.idType){
            if(this.state.description){
              this.registerCall();

           }else{
          Alert.alert("Please enter idZone");
         }
         }else{
        Alert.alert("Please enter idZone");
        }
      }else{
    Alert.alert("Please enter idFloor");
      }
   }else{
    Alert.alert("Please enter idFloor");
   }
  }else{
    Alert.alert("Please enter description");
  }   
  
 }

 registerCall(){
  var that = this;
  var url = that.state.baseUrl;
   console.log("url:"+url);
  //let body= {"idBuilding": this.state.idBuilding, "idFloor":this.state.idFloor, "idZone": this.state.idZone,"idType": this.state.idType , "description":this.state.description,"name":this.state.name ,"postalCode":this.state.postalCode,"state":this.state.state,"type":this.state.type}
  let body = {
   
    "deleted": true,
    "description": this.state.description,
    
    "idBuilding": this.state.idBuilding,
    "idFloor": this.state.idFloor,
    "idType": this.state.idType,
    "idZone": this.state.idType,
   
  
    "name": this.state.name
  }
  console.log(body)
  axios.post(url,body )
  .then(function (response) {
    alert("the room was successfully created with userLogin  "  );
    console.log(response.data)
  })
  .catch(function (error) {
    alert("result:"+error)
  });
/*   axios.post(url , body ) .then(function (response) {
        
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
 }); */
}

render() {
  var data = [["Select or Create Building",]];
    var data1 = [["Select or Create Zone",]];
    var data2 = [["Select or Create Floor",]];

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

   <Text style={styles.input}>Add Rooms</Text>
  
  
 

  
         
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

   <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="idBuilding"
     keyboardType="idZone-idBuilding"
     underlineColorAndroid='transparent'
     onChangeText={(idBuilding) => this.setState({idBuilding})}/>
   </View>
   <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="idFloor"
     keyboardType="idZone-idBuilding"
     underlineColorAndroid='transparent'
     onChangeText={(idFloor) => this.setState({idFloor})}/>
   </View>
   <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="idZone"
     keyboardType="idZone-idBuilding"
     underlineColorAndroid='transparent'
     onChangeText={(idZone) => this.setState({idZone})}/>
   </View>
   <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="idType"
     keyboardType="idZone-idBuilding"
     underlineColorAndroid='transparent'
     onChangeText={(idType) => this.setState({idType})}/>
   </View>








   <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="description"
     keyboardType="idZone-idBuilding"
     underlineColorAndroid='transparent'
     onChangeText={(description) => this.setState({description})}/>
   </View>

   <TouchableOpacity style={styles.submitButtonText} onPress={() => this.onClickListener('sign_up')}>
     <Text style={styles.signUpText}>Add</Text>
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