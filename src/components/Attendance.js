import React, { Component, PropTypes } from 'react';

const propTypes = {

}

class Attendance extends Component {

  addMemberRow(member, i) {
    return (
      <tr key={i}>
        <td>{member.name}</td>
        <td>{member.id}</td>
      </tr>
    )
  }

  render() {
    return (
      <div className="">
        <h2>Attendance - {this.props.audience.length} members</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Audience Member</th>
              <th>Socket ID</th>
            </tr>
          </thead>
          <tbody>
            {this.props.audience.map(this.addMemberRow)}
          </tbody>
        </table>
      </div>
    )
  }
}

Attendance.propTypes = propTypes;

export default Attendance;
