import React from 'react'
import ChartistGraph from 'react-chartist'

class BarChart extends React.Component {

  render() {
    const {data} = this.props
    
    var options = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };

    var type = 'Bar'

    return (
      <div>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    )
  }
}

export default BarChart
