import React, { Component, useState } from "react";
import '../styles/App.css';
import './Heading.js';
import'./InputQuery';
import './SubHeading';
import './SubmitButton';
const App = () => {
  return (
    <div id="main">
      <Heading/>
      <InputQuery/>
      <SubHeading/>
      <SubmitButton/>
    </div>
  )
}


