import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Upload from './components/Upload'
//import ImageShow from './components/ImageShow';
import Dropdown from './components/Dropdown';
import Route from './components/Route';
import Header from './components/Header';

import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";

const options = [
  {
    "name": "Opaque",
    "config path": "/home/data/refined/deep-microscopy/output/curriculum/output/config.py",
    "model path": "/home/data/refined/deep-microscopy/output/curriculum/output/latest.pth"
  },
  {
    "name": "White",
    "config path":"",
    "model path": ""
  },
  {
    "name": "Hyphae",
    "config path":"",
    "model path": ""
  }
];


export default () => {

  const [showDropdown,setShowDropdown] = useState(true);
  const [selected,setSelected] = useState(options[0]);

  // Code for loading our model
  // useEffect

  // How can I use an async statement here?

  return (
    <div className="custom-margin">
      <Header />
      <Route path="/detector">
        <Upload />
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}/>
      </Route>


    </div>
  );
};
