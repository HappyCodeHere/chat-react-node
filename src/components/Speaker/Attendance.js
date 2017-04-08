import React, { Component, PropTypes } from 'react';


const propTypes = {
  audience: PropTypes.array.isRequired
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
      <div className="attendance">
        <h2>Attendance &ndash; {this.props.audience.length} members</h2>
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
