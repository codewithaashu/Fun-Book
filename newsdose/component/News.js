import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page :1,
            loading:true
        }
    }
    async componentDidMount() {
        document.title =`${this.props.category==="General"?"Home":this.props.category} -NewsDose`
        this.props.setProgress(20)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`
        this.props.setProgress(50)
        let response = await fetch(url)
        this.props.setProgress(80)
        let data = await response.json()
        this.props.setProgress(100)
        this.setState({
            articles: data.articles,
            totalResults :data.totalResults,
            loading:false
        })
        this.props.setProgress(0)
    }
    fetchMoreData =async ()=>
    {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page+1}`
        let response = await fetch(url)
        let data = await response.json()
        this.setState({
            articles:this.state.articles.concat(data.articles),
            page :this.state.page+1,
            loading :false
        })
    }
/*     nextClick = async ()=>
    {
        this.setState({loading:true})
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page+1}`
        let response = await fetch(url)
        let data = await response.json()
        this.setState({
            articles: data.articles,
            page: this.state.page+1,
            loading:false
        })
    } */
/*     previousClick = async ()=>
    {
        this.setState({loading:true})
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page-1}`
        let response = await fetch(url)
        let data = await response.json()
        this.setState({
            articles: data.articles,
            page: this.state.page-1,
            loading:false
        })
    } */
    render() {
        return (
            <div style={{marginTop:"5rem"}}>
                <h1 className="text-center" style={this.props.state.color==="rgba(255,255,255,.75)"?{color:"black"}:{color:"white"}}>
                    Today's Top Headlines
                </h1>
                <div>
                <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<this.state.totalResults}
          loader={<Spinner/>}
        >

                {this.state.loading?<Spinner/>:""}
                    <div className="row">
                        {!this.state.loading&&this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}  style={{ display: "flex", justifyContent: "center" }}>
                                <NewsItem title={element.title} description={element.description} url={element.url} urlToImage={element.urlToImage} author={element.author} publishedAt={element.publishedAt} name={element.source.name} state ={this.props.state} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
                </div>
{/*                 <div className="d-flex justify-content-between mx-3">
                    <button type="button" className="btn btn-danger" onClick ={this.previousClick} disabled={this.state.page<=1}>&larr; Previous</button>
                    <button type="button" className="btn btn-danger" onClick ={this.nextClick} disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)}>Next &rarr;</button>
            </div> */}
            </div>
        )
    }
}
