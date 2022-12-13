import React, { Component } from 'react'
//jsx me inline css use ni krte hn . agr use krna chahte ho to usko object i.e containaing key value pair in js.
export default class NewsItem extends Component {
    render() {
        let { title, description, urlToImage, url, name, publishedAt,author} = this.props
        return (
            <div className="card my-3 mx-1" style={{ width: "18rem" }}>
                    <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{marginLeft:-70}}>
                        {`${name}`}
                        <span className="visually-hidden">unread messages</span>
                    </div>
                <img src={urlToImage == null ? "https://media.istockphoto.com/vectors/newspaper-vector-icon-illustration-vector-id1286196644?b=1&k=20&m=1286196644&s=170667a&w=0&h=qyrayzzpUsMX4H4H1sWaj_G08pHjgsX9GuLI3u5XIdI=" : urlToImage} className="card-img-top" alt="Human" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">{`By ${author?author:"Unknown"} on ${String(new Date(publishedAt)).slice(0, 25)}`}</small></p>
                    <a href={url} target="blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}
