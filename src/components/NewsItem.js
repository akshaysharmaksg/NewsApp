import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    return (
      <div className="my-3">
        <div className="card position-relative">
          <img src={imageUrl} className="card-img-top" alt="news" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span
              className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-success"
              style={{ zIndex: '1' }}
            >
              {source}
            </span>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                by {author ? author : "Unknown"} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-sm btn-dark" target="_blank" rel="noreferrer">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
