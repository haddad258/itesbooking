import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar ,ScrollView} from 'react-native';
import axios from 'axios';
import {  RadioGroup, Dropdown } from '../../components';

import DropdownMenu from 'react-native-dropdown-menu';
import Addimages from '../../addimages/importimage'
var urlconst = require('../../const/api')() +'/sib-api/common/rooms'
var urlbull =require('../../const/api')()+'sib-api/common/buildings/'
var urlbzone =require('../../const/api')()+ 'sib-api/common/zones/by-building/'
var urlbfloors =require('../../const/api')()+'/sib-api/common/floors/by-zone/'
var urlroomtype = require('../../const/api')()+'/sib-api/common/rooms/types' 
var typeroomid=[]
var typeroomname=[]
var selectbuildingid =[]
var selectbuildingname = []
var selectzoneid =[]
var selectzonename =[]
var selectfloorsid=[]
var selectfloors=[]

//haddad


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
                 idRoomType: 0,
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
     /*    if(this.state.idBuilding || this.state.idBuilding != " "){
          if(this.state.idFloor){            
         if(this.state.idZone){
          if(this.state.idType){
            if(this.state.description){ */
              this.registerCall();

         /*   }else{
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
  }    */
  
 }

 registerCall(){

  //let body= {"idBuilding": this.state.idBuilding, "idFloor":this.state.idFloor, "idZone": this.state.idZone,"idType": this.state.idType , "description":this.state.description,"name":this.state.name ,"postalCode":this.state.postalCode,"state":this.state.state,"type":this.state.type}
  let body = {
   
    
    "description": this.state.description,
    
    "idBuilding": this.state.idBuilding,
    "idFloor": this.state.idFloor,
    "idType": this.state.idType,
    "idZone": this.state.idType,
    "idRoomType":this.state.idRoomType,
   
  
    "name": this.state.name
  }
  console.log(body)
  axios.post(urlconst,body )
  .then(function (response) {
    Alert.alert("the room was successfully created "  );
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
  axios.get(urlbull)
  .then(function (response) {   
    selectbuildingid.length=0
    selectbuildingname.length=0 
    for(var i=0;i<response.data.length; i++){     
      selectbuildingid.push(response.data[i].id);
      selectbuildingname.push(response.data[i].name);
    }
  })

  axios.get(urlroomtype)
  .then(function (response) {     
    typeroomid.length=0;
    typeroomname.length=0;   
    for(var i=0;i<response.data.length; i++){     
      typeroomid.push(response.data[i].id);
      typeroomname.push(response.data[i].name);
    }
  })

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

   <Text style={styles.input}>Add Room</Text>
  
  
 

  
         
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
     placeholder="description"
     keyboardType="idZone-idBuilding"
     underlineColorAndroid='transparent'
     onChangeText={(description) => this.setState({description})}/>
   </View>
   <View style={styles.inputContainer}>
   <Dropdown
          style={{ width: 350, alignSelf: 'center' }}
          placeholder={'select typeroom'}     
          onSelect={(Value) => {this.state.idRoomType =typeroomid[Value]  ;
         
          
          }}
          items={typeroomname}

          
        
        ></Dropdown>
   </View>
   <View style={styles.inputContainer}>
    <Dropdown
          style={{ width: 350, alignSelf: 'center' }}
          placeholder={'select Building'}     
          onSelect={(Value) => {this.state.idBuilding =selectbuildingid[Value]  ;
          
            axios.get(urlbzone+selectbuildingid[Value])
            .then(function (response) {
              // handle success
              selectzoneid.length=0
              selectzonename.length=0
              for(var i=0;i<response.data.length; i++){
               
                selectzoneid.push(response.data[i].id)
                selectzonename.push(response.data[i].name)
          
              }
            })
          
          }}
          items={selectbuildingname}

          
        
        ></Dropdown>
      </View> 
      <View style={styles.inputContainer}>
    <Dropdown
     placeholder={'select zone'}
          style={{ width: 350, alignSelf: 'center' }}
          onSelect={(Value) => {this.state.idZone =selectzoneid[Value] ;
            console.log(urlbfloors+selectzoneid[Value])
            axios.get(urlbfloors+selectzoneid[Value])
            .then(function (response) {
              // handle success
              selectfloorsid.length=0;
              selectfloors.length=0
              for(var i=0;i<response.data.length; i++){
               
                selectfloorsid.push(response.data[i].id)
                selectfloors.push(response.data[i].name)
          
              }
            })
          
          }}
          items={selectzonename}
        
        ></Dropdown>
      </View> 
      <View style={styles.inputContainer}>
    <Dropdown
     placeholder={'select floor'}
          style={{ width: 350, alignSelf: 'center' }}
          onSelect={(Value) => {this.state.idFloor =selectfloorsid[Value]  }}
          items={selectfloors}
        
        ></Dropdown>
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