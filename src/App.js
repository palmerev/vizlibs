import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Viz from './Viz'

const API_ROOT = `http://54.213.83.132/hackoregon/http/`

const getExample = () =>
  axios.get(`http://54.213.83.132/hackoregon/http/all_oregon_sum/_/`)

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    getExample().then(data => {
      console.log("data: ", data)
      this.setState({data: data})
    })
  }


  render() {
    console.log("state.data", this.state.data)
    return (
      <Viz data={this.state.data}/>
    )
  }
}

export default App;
