import React, { Component, PropTypes } from 'react';

import { BarChart } from 'react-d3';


const propTypes = {
  status: PropTypes.string.isRequired,
  results: PropTypes.object.isRequired,
  currentQuestion: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired
}

class Board extends Component {

  barGraphData(results) {
    return Object.keys(results).map((choice) => {
      return {
        label: choice,
        value: results[choice]
      }
    });
  }

  render() {
    return (
      <div className="board">
        {
          this.props.status === 'connected' ?

            this.props.currentQuestion ?
              <div>
                <h3>{this.props.currentQuestion.q}</h3>
                <p>{JSON.stringify(this.props.results)}</p>

                <BarChart
                  data={this.barGraphData(this.props.results)}
                  title={this.props.currentQuestion.q}
                  height={window.innerHeight * 0.6}
                  width={window.innerWidth * 0.9}
                />
              </div> :

              <div>
                <h3>Awaiting a Question...</h3>
              </div>

            : null
        }
      </div>
    )
  }
}

Board.propTypes = propTypes;

export default Board;
