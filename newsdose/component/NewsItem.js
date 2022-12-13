import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        // [title,description,url,urlToImage,author,publishedAt] = this.props
        return (
            <div >
                <div className="card my-4" style={{ width: "18rem" }}>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{translate:(-60)}}>
                            {this.props.name}
                        </span>
                    <img src={this.props.urlToImage ? this.props.urlToImage : "https://images.hindustantimes.com/img/2021/09/09/1600x900/BREAKING_NEWS_1631230366821_1631230369778.jpg"} className="card-img-top" alt="Human" width="18rem" />
                    <div className="card-body" style={this.props.state.color==="rgba(255,255,255,.75)"?{color:"black",backgroundColor:"white"}:{color:"white",backgroundColor:"#042743"}}>
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <p className="card-text"><small className="text-muted">{`By ${this.props.author ? this.props.author : "Unknown"} on ${this.props.publishedAt}`}</small></p>
                        <a href={this.props.url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>

                    </div>
                </div>
            </div>
        )
    }
}
