/* import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import axios from 'axios'
const apiurl ='http://192.168.1.21:9970/sib-api/common/users/'
var tableData= []
export default class ExampleFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [],
      widthArr: [100, 100, 100, 100, 100, 100, 100, 100, 100],
      
    }
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
  componentDidMount(){

    const url = `${apiurl}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ tableHead: Object.keys(data[0]) })
   //   tableData.push(Object.values(data[0]))
     
        
       
     })
} 

  render() {
    const state = this.state;
  

      const url = `${apiurl}`;
      axios.get(url).then(response => response.data)
      .then((data) => {
       // this.setState({ tableHead: Object.keys(data[0]) })
        tableData.push(Object.values(data[0]))
       
          
         
       })
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead}  widthArr={state.widthArr} style={styles.head} textStyle={styles.text}/>
          {
            tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
}); */
/* import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import axios from 'axios'
var urlcnst = require('../../const/api')()
const apiurl =urlcnst+'sib-api/common/users/'
var tableData=[]
export default class Listuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [],
      widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200],
      tableData:[]
      
    }
  }
  componentDidMount(){
    setTimeout(() => {
      
 
      this.setState({
        tableHead: [],
        widthArr: [40, 60, 80, 150, 120, 140, 160, 180, 200],
        tableData:[]
        
      })
    const url = `${apiurl}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ tableHead: Object.keys(data[0]) })
   //   tableData.push(Object.values(data[0]))
   
console.log(data)
  
       
     })

   
    axios.get(apiurl).then(response => response.data)
    .then((data) => {
     // this.setState({ tableHead: Object.keys(data[0]) })
     data.forEach(element =>{
       this.state.tableData.push(Object.values(element))
      });  
    }, 200);
       
     }) 

     
    
    }
  render() {
    const state = this.state;
   
  /*   const tableData = [];
     for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
      console.log(tableData)
    } 
 

const element = (data, index) => (
  <TouchableOpacity onPress={() => this._alertIndex(index)}>
    <View style={styles.btn}>
      <Text style={styles.btnText}>button</Text>
    </View>
  </TouchableOpacity>
);
    
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  state.tableData.map((rowData, index) => (
                    
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40 }
}); */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  ScrollView,
  Alert
} from 'react-native';
import axios from 'axios'
var urlcnst = require('../../const/api')()+'sib-api/common/users/'



export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
     
      tableData:[]
    };
  }

  clickEventListener = (item) => {
    this.setState({userSelected: item}, () =>{
      this.setModalVisible(true);
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  componentDidMount(){


    axios.get(urlcnst).then(response => response.data)
    .then((data) => {
      console.log(data)
      data.forEach(element =>{
        this.state.tableData.push(element)
       })

     
    });

  }

remouteto(){

  this.props.navigation.navigate('list_user')
}


deletuser(iduser){
  this.remouteto()
axios.delete(urlcnst+iduser).then((response)=>{
  
alert(response.data)


})



}

  render() {
    return (
      <View style={styles.container}>
          
        <FlatList 
          style={styles.userList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.tableData}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
              <Image style={styles.image} source={{uri: "https://bootdey.com/img/Content/avatar/avatar7.png"}}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.userLogin}</Text>
                <Text style={styles.position}>{item.lastName}   {item.firstName}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.followButtonText}>show  </Text>  
                </TouchableOpacity>
                <TouchableOpacity style={styles.deletButton} onPress={()=> this.deletuser(item.id)}>
                  <Text style={styles.followButtonText}>delete  </Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}}/>

        <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => this.setModalVisible(false)}
          visible={this.state.modalVisible}>

          <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <View style={styles.popupContent}>
                <ScrollView contentContainerStyle={styles.modalInfo}>
                    <Image style={styles.image} source={{uri: "https://bootdey.com/img/Content/avatar/avatar7.png"}}/>
                    <Text style={styles.name}> email : {this.state.userSelected.email}</Text>
                    <Text style={styles.position}>firstName :{this.state.userSelected.firstName}</Text>
                    <Text style={styles.about}>lastName :{this.state.userSelected.lastName}</Text>
                    <Text style={styles.about}>idGroup :{this.state.userSelected.idGroup}</Text>
                    <Text style={styles.about}>Phone :{this.state.userSelected.phone}</Text>

                </ScrollView>
              </View>
              <View style={styles.popupButtons}>
                <TouchableOpacity onPress={() => {this.setModalVisible(false) }} style={styles.btnClose}>
                  <Text style={styles.txtClose}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#eeeeee"
  },
  header:{
    backgroundColor: "#00CED1",
    height:200
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
    flex:1,
  },
  detailContent:{
    top:80,
    height:500,
    width:Dimensions.get('screen').width - 90,
    marginHorizontal:30,
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  userList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
  },



  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal:20,
    backgroundColor:"white",
    flexBasis: '46%',
    padding: 10,
    flexDirection:'row'
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  about:{
    marginHorizontal:10
  },
 deletButton: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#FF0000",
  },

  followButton: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
 /************ modals ************/
  popup: {
    backgroundColor: 'white',
    marginTop: 80,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  popupOverlay: {
    backgroundColor: "#00000057",
    flex: 1,
    marginTop: 30
  },
  popupContent: {
    //alignItems: 'center',
    margin: 5,
    height:250,
  },
  popupHeader: {
    marginBottom: 45
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: "#eee",
    justifyContent:'center'
  },
  popupButton: {
    flex: 1,
    marginVertical: 16
  },
  btnClose:{
    height:20,
    backgroundColor:'#20b2aa',
    padding:20
  },
  modalInfo:{
    alignItems:'center',
    justifyContent:'center',
  }
}); 