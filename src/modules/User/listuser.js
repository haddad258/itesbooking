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
import React, { Component } from 'react';
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
 */

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
});