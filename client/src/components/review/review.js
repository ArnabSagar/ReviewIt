import React from 'react'


const Review = () => {
    return (
      <div className="review-component">
        <h1>Review Component</h1>
        <div className="review-wrapper">
          <div className="review-title">
            {/* <h1>{this.state.title}</h1> */}
          </div>

          <div className="review-main">
            <h2>Movie Name</h2>
            <h2>Rating</h2>
            <h2>Description</h2>
          </div>
        </div>
      </div>
    );
}

export default Review
