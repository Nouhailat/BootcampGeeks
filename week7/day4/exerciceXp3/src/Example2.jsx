import React, { Component } from 'react';
import data from './data.json';

class Example2 extends Component {
  render() {
    const skills = data?.skills || [];

    return (
      <div>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example2;
