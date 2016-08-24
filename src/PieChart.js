import React from 'react'
import {RadialChart} from 'react-vis'

class PieChart extends React.Component {
  render() {

    return (
      <RadialChart
      data={[
        {angle: 25},
        {angle: 75},
        {angle: 45}
      ]}
      width={300}
      height={300} />
    )
  }
}

export default PieChart
