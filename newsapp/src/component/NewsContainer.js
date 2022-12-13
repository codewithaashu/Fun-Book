import React, { Component } from 'react'
// import Button from './Button'
import NewsItem from './NewsItem'
// import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsContainer extends Component {
    /*     articles = [
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "COVID-19 Live Updates: Second Wave Is Subsidising, But It Is Not Fair To Say Worst Is Over, VK Paul Warns Ahead of Diwali - TheHealthSite",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMieGh0dHBzOi8vd3d3LnRoZWhlYWx0aHNpdGUuY29tL25ld3MvY29yb25hdmlydXMtaW4taW5kaWEtY292aWQtMTktY2FzZXMtdmFjY2luZS1saXZlLW5ld3MtdXBkYXRlcy0xOC1vY3RvYmVyLTIwMjEtODQyOTI5L9IBfGh0dHBzOi8vd3d3LnRoZWhlYWx0aHNpdGUuY29tL25ld3MvY29yb25hdmlydXMtaW4taW5kaWEtY292aWQtMTktY2FzZXMtdmFjY2luZS1saXZlLW5ld3MtdXBkYXRlcy0xOC1vY3RvYmVyLTIwMjEtODQyOTI5L2FtcC8?oc=5",
              "urlToImage": null,
              "publishedAt": "2021-10-18T04:37:12Z",
              "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Livemint"
                },
                "author": "Madhumita Sen Choudhury",
                "title": "Market LIVE: Sensex gains 400 points; Nifty around 18,500; banks, metal lead - Mint",
                "description": "Share Market LIVE Updates: Indian indices opened strong on Monday shrugging off the weakness in Asian stocks which fell as China's weak economic data triggered recovery concerns",
              "url": "https://www.livemint.com/market/stock-market-news/share-market-live-updates-sensex-nifty-bse-nse-stock-market-today-18-10-2020-11634520472085.html",
              "urlToImage": "https://images.livemint.com/img/2021/10/18/600x338/20200821048L_1602131270308_1602131288099_1634520947397.jpg",
              "publishedAt": "2021-10-18T04:30:26Z",
              "content": "Indian markets were going strong, with Sensex jumping over 500 points to hit a record high of 61,863.09. Nifty was hovering around 18,500 points. Asian markets struggled Monday as inflation concerns … [+6674 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "News18"
                },
                "author": "Tech Desk",
                "title": "Apple 'Unleashed' Event: M1X MacBook Pro, AirPods 3 & Some Last-Minute Rumours, Here's What To Expect - News18",
                "description": "The Apple event is said to start at 10:30PM IST tonight. The event will be livestreamed on Apple's website and official YouTube channel.",
                "url": "https://www.news18.com/news/tech/apple-event-m1x-macbook-pro-airpods-3-some-last-minute-rumours-what-to-expect-4334045.html",
                "urlToImage": "https://images.news18.com/ibnlive/uploads/2021/09/macbook-pro-m1x-render-163256185716x9.jpg",
                "publishedAt": "2021-10-18T04:11:56Z",
                "content": "Apple is today hosting its ‘Unleashed’ event where the company will launch the M1X-powered MacBook Pro models. Apple is also said to launch the next-generation of AirPods, the AirPods 3 during the ev… [+3620 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "AFP",
                "title": "From Amazon driver to T20 World Cup star: Scots hail T20 giant slayer Chris Greaves - Times of India",
                "description": "Cricket News: Scotland skipper Kyle Coetzer on Sunday hailed Chris Greaves for his sacrifices that included delivering parcels for Amazon before he starred in the t",
                "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-mens-t20-world-cup/chris-greaves-from-amazon-driver-to-t20-world-cup-star/articleshow/87099383.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-87099410,width-1070,height-580,imgsize-40940,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "publishedAt": "2021-10-18T04:09:00Z",
                "content": "Scotland stun Bangladesh by 6 runs in T20 World Cup first roundScotland stunned fancied Bangladesh by six runs after Chris Greaves' magnificent all-round display for a dream start in the ICC T20 Worl… [+163 chars]"
            }
        ] */
    constructor() {
        super() //because it is derived class
        this.state = { //initial state 
            articles: [],
            page: 1,
            loading :false,
            totalResults :0
            // let totalPages;
            //data fetch hone se pehle state
        }
    }
    updateNews = async()=>{
        this.props.setProgress(10)
        this.setState({
            loading:true
        })
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`)
        this.props.setProgress(30)
        let data = await response.json()
        this.props.setProgress(60)
        this.setState({ //setState
            articles: data.articles,
            totalResults: data.totalResults,
            loading:false
        })
        this.props.setProgress(100)
    }
    async componentDidMount() {
        /*         this.setState({
            loading:true
        })
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`)
        let data = await response.json()
        this.setState({ //setState
            articles: data.articles,
            totalResults: data.totalResults,
            loading:false
        }) */
        this.updateNews()
        // totalPages = Math.floor(data.totalResults/16)
        document.title = `${this.props.category === 'General' ? "Home" : this.props.category}-NewsDose`
    }
    /*     prevBtnFunc = async ()=>{
        //data fetch krne se pehle loading hoga aur data jb fetch ho jayegi tb loading ni hoga. 
        this.setState({
            loading:true
        })
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`)
        let data = await response.json()
        this.setState({ //setState
            articles: data.articles,
            page: this.state.page - 1,
            loading :false
        })
        //previous btn se articles aur page chnge hoga.
        // console.log(totalPages)
    } */
    /*     nextBtnFunc = async () => {
        this.setState({
            loading:true
        })
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`)
        let data = await response.json()
        this.setState({
            articles: data.articles,
            page: this.state.page + 1,
            loading:false
        })
    } */
    fetchMoreData = async () => {  
        this.setState({page: this.state.page + 1})
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`)
        let data = await response.json()
        this.setState({
            articles: this.state.articles.concat(data.articles),
            totalResults: data.totalResults
        })
      };
    render() {
        //this.state.loading&& -true jb ho to tb hi aage bdho
        return (
            <div className="cotainer my-3 mx-5">
                <h1 className="text-center">
                    {`${this.props.category === 'General' ? "Today's Top Headlines" : `${this.props.category} - Top Headlines`}`}
                </h1>
                <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
        //   loader={<Spinner/>}
        >
             <div className="row">
                    {!this.state.loading&&this.state.articles.map(function (element) {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} name={element.source.name} publishedAt={element.publishedAt} author={element.author} />
                        </div>
                    })}
                </div>
        </InfiniteScroll>
{/*                 <br />
                {this.state.loading==true?<Spinner/>:""}
                <br />
                <div className="row">
                    {this.state.loading ==false?this.state.articles.map(function (element) {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} name={element.source.name} publishedAt={element.publishedAt} author={element.author} />
                        </div>
                    }):""}
                </div> */}
                {/*                 <div className="row">
                    <div className="col-md-3">
                        <NewsItem title={this.state.articles[1].title} description={this.state.articles[1].description} urlToImage ={this.state.articles[1].urlToImage} url={this.state.articles[1].url}/>
                    </div>
                </div> */}
                {/* <Button/> */}
{/*                 <div className="d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevBtnFunc}>&larr; Previous</button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResults /this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextBtnFunc}>Next &rarr;</button>
                </div> */}
            </div>
        )
    }
}
//jb hume baar kisi ko change krna hota hn to hum state ka use krte hn .
//map ek function hn jiska use object ko iterate krne ke liye kiya jaata hn. ye forEach loop jaisa similar hota hn.
//yha pe map function ek element ko return krta hn jiski apni ek unique key hogi.
//jsx me js use krne ke liye curly braces use kiya jaata hn.