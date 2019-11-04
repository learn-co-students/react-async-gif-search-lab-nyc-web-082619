import React from 'react'


const GifList = props => {
    console.log(this.props);
    return (
      <div>
          {props.gifs.map(gif => <img src={gif} alt="gif"/>)}
      </div>
    )
  }

export default GifList