import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar ,ScrollView} from 'react-native';
import axios from 'axios';

import {  RadioGroup, Dropdown } from '../../components';

import Addimages from '../../addimages/importimage'
var urlcnst = require('../../const/api')() +'sib-api/common/floors'
var urlbull =require('../../const/api')()+'sib-api/common/buildings/'
var urlbzone =require('../../const/api')()+ 'sib-api/common/zones/by-building/'
var urltypefloorsna =require('../../const/api')()+'/sib-api/common/floors/types'

var typefloorsid= ["TypeF1", "TypeF2","TypeF3","TypeF4","TypeF5"];
  

var selectbuildingid =[]
var selectbuildingname = []
var selectzoneid =[]
var selectzonename =[]
export default class Floors extends Component<Props> {

constructor(props) {
   super(props);
    //this.login= this.login.bind(this);
    this.registerCall = this.registerCall.bind(this);
    var {height, width} = Dimensions.get('window');
    this.state = {screenHeight: height, screenWidth: width,
                 idBuilding: '',
                 idFloorType:0,
                 idZone : '',
                 description:'',
                 gpsLocation: '',
                 name:'',
                 state:'',
                 postalCode:'',
                 type:'',                
                 status: '',
                 wholeResult: '',
                };

   }

onClickListener = (viewId) => {
        // Alert.alert(this.state.idBuilding+" "+this.state.idZone+" "+this.state.gpsLocation , "View_id "+viewId);
        if(this.state.description || this.state.description != " "){
          if(this.state.description){            
         if(this.state.description){
          if(this.state.description){
            if(this.state.description){
              this.registerCall();
           }else{
          Alert.alert("Please enter idZone");
         }
         }else{
        Alert.alert("Please enter idZone");
        }
      }else{
    Alert.alert("Please enter idType");
      }
   }else{
    Alert.alert("Please enter idType");
   }
  }else{
    Alert.alert("Please enter description");
  }   
  
 }

 registerCall(){
  
  
  
  let body= { "images": [ "string"],"idBuilding": this.state.idBuilding, "type":this.state.idFloorType, "idZone": this.state.idZone, "description":this.state.description,"name":this.state.name }
  axios.post(urlcnst,body )
   .then(function (response) {
     alert("the floor was successfully created with id " + response.data.name);
     //console.log("this.reponse")
   })
   .catch(function (error) {
     alert("result:"+error)
   }); 
   
  
/*   axios.post(urlcnst , body ) .then(function (response) {
        
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
  
  axios.get(urlbull)
  .then(function (response) { 
    selectbuildingid.length=0;
    selectbuildingname.length=0;   
    for(var i=0;i<response.data.length; i++){     
      selectbuildingid.push(response.data[i].id);
      selectbuildingname.push(response.data[i].name);
    }
  })
/*   axios.get(urltypefloors)
  .then(function (response) { 
    typefloorsid.length=0;
    typefloorsnames.length=0;   
    for(var i=0;i<response.data.length; i++){     
      typefloorsid.push(response.data[i].id);
      typefloorsnames.push(response.data[i].name);
    }
  }) */

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
     keyboardType="description"
     underlineColorAndroid='transparent'
     onChangeText={(description) => this.setState({description})}/>
   </View>
  
   <View style={styles.inputContainer}>
    <Dropdown
          style={{ width: 350, alignSelf: 'center' }}
          placeholder={'select type floors'}     
          onSelect={(Value) => {this.state.idFloorType =typefloorsid[Value]  ;
          
          
          
          
          }}
          items={typefloorsid}

          
        
        ></Dropdown>
      </View>
 
      
    <View style={styles.inputContainer}>
    <Dropdown
          style={{ width: 350, alignSelf: 'center' }}
          placeholder={'select Building'}     
          onSelect={(Value) => {this.state.idBuilding =selectbuildingid[Value]  ;
          
            axios.get(urlbzone+selectbuildingid[Value])
            .then(function (response) {
              selectzoneid.length=0;
              selectzonename.length=0;
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
          onSelect={(Value) => {this.state.idZone =selectzoneid[Value]  }}
          items={selectzonename}
        
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