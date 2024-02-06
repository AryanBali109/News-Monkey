import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Newsitem from './Newsitem'
import Spinner from './Spinner'

import InfiniteScroll from 'react-infinite-scroll-component';

export default class Newscomponent extends Component {

  static defaultProps = {
    category:"general",
    pagesize:10,
    country:"in"
  }
  static propTypes = {
    category: PropTypes.string,
    pagesize: PropTypes.number,
    country: PropTypes.string
  }
  convertuppercase = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  articles = [ ]
  constructor(props){
    super(props);
    console.log("constructor is called")
    this.state={
      articles: this.articles,
      page:1,
      loading:false,
      // totalResults:0
    }
    document.title=`${this.convertuppercase(this.props.category)} - News Monkey`; 
  }


// convert to uppercase function

  // refactoring newscomponent all function to same function
  async  refactoring(){
    this.props.Progress(10);
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true})
    this.props.Progress(30);
    let fetchdata = await fetch(url)
    let parsedata = await fetchdata.json()
    this.props.Progress(60);
    this.setState({
      articles: parsedata.articles,
      totalarticles:parsedata.totalResults,
      loading:false    
    })
    this.props.Progress(100);
    console.log(parsedata)
  }

//  componentDidMount(){  } is a lifecycle methods

  async componentDidMount(){
    // refactoring fetch api to use the same function
     this.refactoring()
    //
    // let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=8050f8274a434103b6f15eaad378dcb5&page=1&pagesize=${this.props.pagesize}`;
    // this.setState({loading:true})
    // let fetchdata = await fetch(url)
    // let parsedata = await fetchdata.json()
    // this.setState({
    //   articles: parsedata.articles,
    //   totalarticles:parsedata.totalResults,
    //   loading:false    
    // })
  }
   handlenextclick = async()=>{
    console.log("button clicked")
    // refactoring fetch api to use the same function
    // this.setState({
      //   page:this.state.page + 1
      // })
      //   let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=8050f8274a434103b6f15eaad378dcb5&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
      // this.setState({loading:true})
      // let fetchdata = await fetch(url)
      // let parsedata = await fetchdata.json()
      // console.log(parsedata)
      // this.setState({
    //   page:this.state.page+1,
    //   articles: parsedata.articles,
    //   loading:false
    // })
     this.setState({
      page:this.state.page+1},()=>{this.refactoring()}
      // this.refactoring()
    )
  }
  handlepreviousclick = async()=>{
    // console.log("button clicked")
    // let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=8050f8274a434103b6f15eaad378dcb5&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    // this.setState({loading:true})
    // let fetchdata = await fetch(url)
    // let parsedata = await fetchdata.json()
    // this.setState({
    //   page:this.state.page-1,
    //   articles: parsedata.articles,
    //   loading:false
    // })
    // refactoring fetch api to use the same function
    this.setState({
      page:this.state.page + 1
    }, () => { this.refactoring(); })
    //  this.refactoring()
  }

   fetchMoreData = async() =>{
    this.setState({
      page:this.state.page + 1
    })
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    // this.setState({loading:true})
    let fetchdata = await fetch(url)
    let parsedata = await fetchdata.json()
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalarticles:parsedata.totalResults,
      loading:false    
    })
  }

  render() {
    return (
      <>
      {/* <div className='container'>
        <div className="container-inside1">

        <button className='btnss1'id="rat" disabled={this.state.page === 1 } onClick={this.handlepreviousclick}>&larr; Previous</button>
        <button className='btnss1'disabled={this.state.page + 1 >Math.ceil(this.state.totalarticles/this.props.pagesize)} onClick={this.handlenextclick}>Next &rarr;</button>
        </div>
      </div> */}
      {/* {this.state.loading && <SPiNNER/>} */}
      {/* <Spinner/> */}
      {/* <div id="scrollableDiv"> */}

      {/* {this.state.loading && <Spinner/>} */}
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
          // inverse={true} //
          hasMore={this.state.articles.length !== this.state.totalarticles}
          loader={<Spinner/>}
          scrollableTarget="scrollableDiv"
          >
      <div id="bc">
        {/* This is a Newscomponent */}
        {/*  {!this.state.loading && this.state.articles.map( (element) =>{ */}
        {this.state.articles.map( (element) =>{
          // if(element.urlToImage !== null){
            
            return(
              // console.log(element)
              
              <div key={element.url}>
             <Newsitem  title={element.title === null || element.title.length ? "Hello there is no title for more go to read more":element.title.slice(0,30)} description={element.description === null ?"hello there is no description about the news for more visit read more" :element.description.slice(0,100)} imageurl={element.urlToImage === null ? "https://th.bing.com/th/id/OIP.QVBY30VqTi-tlYt_BaoGqAHaEo?rs=1&pid=ImgDetMain":element.urlToImage} newsurl={element.url} author={element.author === null?"Aryan Bali":element.author} publishedAt={element.publishedAt === null ? "12/02/2023":new Date(element.publishedAt).toUTCString()}/> 
             </div>
             )
             // }
            })} 
      </div>
      </InfiniteScroll>
         {/* <div className='container'>
        <button className='btnss1' onClick={this.handlepreviousclick}>&larr; Previous</button>
        <button className='btnss1' onClick={this.handlenextclick}>Next &rarr;</button>
      </div> */}
      {/* </div> */}
           </>
    )
  }
}
