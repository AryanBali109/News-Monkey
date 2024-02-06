import React, { Component } from 'react'

export default class Newsitem extends Component {


  render() {
    // using this.props
    let {title,description,imageurl,newsurl,author,publishedAt} = this.props;
    // const hello = (newsurl)=>{
    //   // alert("BUTTON IS CLICKED")
    //   Window.Location.href=newsurl
    // }
    return (
      <div className="box">
      <div className="box2">
        <div >
        <img id="images123" src={imageurl} alt ="Error"/>
        </div>
        <div className='box1'>
        <h5 className='hd1'>{title}...</h5>
        <p className='hd1' id="f1">{description}...</p>       
        <p className='hd1' id="f1">By {author} on {publishedAt}</p>       
        <button className='btnss'/* onClick={hello(newsurl)}*/>
           <a id='btnss'  href={newsurl}>Read more</a>
        </button>
        </div>
       
      </div>
     
      </div>
    )
  }
}
