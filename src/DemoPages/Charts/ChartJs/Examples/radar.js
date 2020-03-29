import React from 'react';
import {Radar} from 'react-chartjs-2';

const data = {
  labels: [
    "Socializing",
    "Communications",
    "Leadership",
    "Designing",
    "Coding",
    "Initiative",
    "Promptness"
  ],
  datasets: [
    {
      label: "National Average",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: "Your Score",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,99,132,1)",
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};

class RadarExample extends React.Component {

    render() {
        return (
            <div>
              <Radar data={data} />
            </div>
        )
    }
}


export default RadarExample;