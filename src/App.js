import React from 'react';
import logo from './logo.svg';
import _ from 'lodash';
import './App.css';

import Header from './header/header';
import ShowData from './showData/showData';
import ListData from './listData/listdata';
import ColumnName from './columnName/columnName'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pageNumber : 1,
      allData:[],
      selectedId:'',
      selectedName:'',
      selectedAge:'',
      selectedEmail:'',
      surname:'',
      idOrder: 0,
      nameOrder: 0,
      ageOrder: 0,
      emailOrder: 0,
      startData: 0,
      endData: 99,
      paginationValue:100
    };

    this.selectedProfile = this.selectedProfile.bind(this);
    this.changeOrder = this.changeOrder.bind(this)
    this.previousData = this.previousData.bind(this)
    this.nextData = this.nextData.bind(this)
    this.setPagination = this.setPagination.bind(this)
    }

    componentDidMount() {
      fetch("https://jsonstorage.net/api/items/b34a70da-1e0e-47b4-806d-e162b61f401c")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              allData: result.items
            })
          },

          (error) => {
            console.log('error', error)
          }
        )
    }

    setPagination(value) {
      this.setState({
        paginationValue: value,
        startData: 0,
        endData: value - 1
      })
    }


    previousData() {
      const {
        startData,
        endData,
        pageNumber,
        paginationValue
      } = this.state

      if(startData > 0 ) {
        this.setState({
          startData: startData - paginationValue,
          endData: endData - paginationValue,
          pageNumber: pageNumber - 1
        })
      }
    }

    nextData() {
      const {
        startData,
        endData,
        pageNumber,
        paginationValue,
        allData
      } = this.state

      if(endData < allData.length - 1) {
        this.setState({
          startData: startData + paginationValue,
          endData: endData + paginationValue,
          pageNumber: pageNumber + 1
        })
      }
    }

    changeOrder(dataValue) {

      const {
        allData
      } = this.state

      if(dataValue === 'id') {
        if(this.state.idOrder == 0){
          this.setState({
            allData: _.orderBy(allData, ['index'],['asc']),
            idOrder: 1
          })
        } else {
          this.setState({
            allData: _.orderBy(allData, ['index'],['desc']),
            idOrder: 0
          })
        }
      }
      else if(dataValue === 'name') {
        if(this.state.nameOrder == 0){
          this.setState({
            allData: _.orderBy(allData, ['fullname'],['asc']),
            nameOrder: 1
          })
        } else {
          this.setState({
            allData: _.orderBy(allData, ['fullname'],['desc']),
            nameOrder: 0
          })
        }
      } else if(dataValue === 'email') {
        if(this.state.emailOrder == 0){
          this.setState({
            allData: _.orderBy(allData, ['email'],['asc']),
            emailOrder: 1
          })
        } else {
          this.setState({
            allData: _.orderBy(allData, ['email'],['desc']),
            emailOrder: 0
          })
        }
      } else if(dataValue === 'age') {
        if(this.state.ageOrder == 0){
          this.setState({
            allData: _.orderBy(allData, ['age'],['asc']),
            ageOrder: 1
          })
        } else {
          this.setState({
            allData: _.orderBy(allData, ['age'],['desc']),
            ageOrder: 0
          })
        }
      }
    }

    selectedProfile(data) {
      this.setState({
        selectedId: data.index,
        selectedName: data.fullname,
        selectedAge: data.age,
        selectedEmail: data.email,
        surname: data.surname
      })
    }

  render() {
    var currentData = []
    
    for(let i = this.state.startData; i <= this.state.endData; i++) {
      currentData.push(this.state.allData[i])
    }

    console.log('cujdshfhhdhfd', this.state.allData)

    return (
      <div className="App">
        <div className='header-file'>
          <Header setPagination={this.setPagination} paginationValue={this.state.paginationValue}/>
        </div>

        <div className='body-files'>
          <div className='list-of-data'>
            <ColumnName changeOrder={this.changeOrder}/>
            <div className='all-data' >
              {
                this.state.allData.length != 0 ? currentData.map((data) => <div onClick={() => this.selectedProfile(data)}><ListData data={data} selectedId={this.state.selectedId} /></div> ) : null
              }
            </div>
            <div className='pagination-button'>
              <div className='left-button' onClick={()=>{this.previousData()}}><i className="fa fa-chevron-circle-left"></i></div>
              <div className='page-number'>{this.state.pageNumber}</div>
              <div className='right-button' onClick={()=>{this.nextData()}}><i className="fa fa-chevron-circle-right"></i></div>
            </div>
          </div>

          <div className='selected-data'>
            <ShowData 
              id={this.state.selectedId}
              name={this.state.selectedName}
              age={this.state.selectedAge}
              email={this.state.selectedEmail}
              surname={this.state.surname}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default App;
