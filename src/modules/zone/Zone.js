
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar,ScrollView} from 'react-native';
import axios from 'axios';
import Addimages from '../../addimages/importimage'
import {  RadioGroup, Dropdown } from '../../components';
var urlcnst = require('../../const/api')()+'sib-api/common/zones'
var urlbull =require('../../const/api')()+'sib-api/common/buildings/'
var urltypezone =require('../../const/api')()+'sib-api/common/zones/types'
var Typebuildingid=[];
var Typebuildingname=[]
var selectbuildingid =[]
var selectbuildingname = []
export default class Zone extends Component<Props> {

  constructor(props) {
    super(props);
     //this.login= this.login.bind(this);
     this.registerCall = this.registerCall.bind(this);
     var {height, width} = Dimensions.get('window');
     this.state = {screenHeight: height, screenWidth: width,
                  description: '',
                  idZoneType:0,
                  name : '',
                  idBuilding:'',
                  status: '',
                  wholeResult: '',
                   };
 
    }
 
 onClickListener = (viewId) => {
         // Alert.alert(this.state.description+" "+this.state.name+" "+this.state.password , "View_id "+viewId);
       
               this.registerCall();
        
   
  }
 
  registerCall(){
  
   let body= {"description": this.state.description, "idZoneType":this.state.idZoneType, "name": this.state.name , "idBuilding":this.state.idBuilding}
  console.log(body)
    axios.post(urlcnst,body )
   .then(function (response) {
     alert("the ZONE was successfully created with id " + response.data.id +"and name "+response.data.name);
     console.log("this.reponse")
   })
   .catch(function (error) {
     alert("result:"+error)
   }); 
   



  /*  axios.post(url , body ) .then(function (response) {
         
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
    // handle success
     selectbuildingname.length =0;
     selectbuildingid.length=0;
    for(var i=0;i<response.data.length; i++){
     
      selectbuildingid.push(response.data[i].id)
      selectbuildingname.push(response.data[i].name)

    }
  })

  axios.get(urltypezone)
  .then(function (response) {     
    Typebuildingid.length=0;
    Typebuildingname.length=0;   
    for(var i=0;i<response.data.length; i++){     
      Typebuildingid.push(response.data[i].id);
      Typebuildingname.push(response.data[i].name);
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
 
    <Text style={styles.input}>Add Zone</Text>
    <View style={styles.inputContainer}>
    <Addimages></Addimages>
    </View>
    <View style={styles.inputContainer}>
     <TextInput style={styles.inputs}
      placeholder="name"
      keyboardname="name-address"
      underlineColorAndroid='transparent'
      onChangeText={(name) => this.setState({name})}/>
    </View>
   
    <View style={styles.inputContainer}>
    <TextInput style={styles.inputs}
     placeholder="description"
     keyboardname="name-address"
     underlineColorAndroid='transparent'
     onChangeText={(description) => this.setState({description})}/>
    </View>
    <View style={styles.inputContainer}>
    <Dropdown
          style={{ width: 350, alignSelf: 'center' }}
          placeholder={'select Zone Type'}     
          onSelect={(Value) => {this.state.idZoneType =Typebuildingid[Value]  ;
        
        
          }}
          items={Typebuildingname}

          
        
        ></Dropdown>
      </View>
 
   
    
    <View style={styles.inputContainer}>
    <Dropdown
    placeholder={'select Building'}
          style={{ width: 350, alignSelf: 'center' }}
          onSelect={(Value) => {this.state.idBuilding =selectbuildingid[Value]  }}
          items={selectbuildingname}
        
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