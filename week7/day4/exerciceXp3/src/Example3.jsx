import React, { Component } from 'react';
import data from './data.json';

class Example3 extends Component {
  render() {
    const experiences = data?.Experiences || [];

    return (
      <div>
        <h2>Example3 Component</h2>
        {experiences.map((exp, index) => (
          <div key={index}>
            <h3>{exp.companyName}</h3>
            <img src={exp.logo} alt={exp.companyName} width="100" />
            <a href={exp.url} target="_blank" rel="noopener noreferrer">{exp.url}</a>
            {exp.roles.map((role, i) => (
              <div key={i}>
                <h4>{role.title}</h4>
                <p>{role.description}</p>
                <p>{role.startDate} — {role.endDate}</p>
                <p>{role.location}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
