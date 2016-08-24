import React, { Component } from 'react';
// import './Viz.css';
import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'


class Viz extends Component {
  constructor() {
    super()
  }

  componentWillReceiveProps(nextProps, nextState) {

  }

  render() {
    const {data} = this.props

    return (
      <div className="Viz">
        <BarChart data={data} />
        <LineChart data={data} />
        <PieChart data={data} />
      </div>
    )
  }
}

export default Viz;
