// src/Example1.jsx
import React, { Component } from 'react';
import data from './data.json';

class Example1 extends Component {
  render() {
    const socialMedias = data?.SocialMedias || [];

    return (
      <div>
        <h2>Example1 Component</h2>
        <ul>
          {socialMedias.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
