import React from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis'
import "../node_modules/react-vis/main.css"

class LineChart extends React.Component {
  render() {

    return (
      <XYPlot
        width={300}
        height={300}>
        <HorizontalGridLines />
        <LineSeries
        strokeWidth="5px"
        data={[
          {x: 1, y: 10},
          {x: 2, y: 5},
          {x: 3, y: 15}
        ]}/>
        <XAxis />
        <YAxis />
      </XYPlot>
    )
  }
}

export default LineChart
