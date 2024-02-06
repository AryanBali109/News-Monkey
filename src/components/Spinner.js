import React, { Component } from 'react'
import Iphonespinner from "./Iphonespinner.gif"
export default class Spinner extends Component {
  render() {
    return (
      <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
        <img style={{backgroundColor:"red"}} src={Iphonespinner} alt="error" />
      </div>
    )
  }
}
