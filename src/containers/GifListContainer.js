import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
        gifUrls: [],
        searchTerm: ""
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g')
          .then(response => response.json())
          .then(response => {
            //   debugger
              return response.data.map(datum => datum.images.original.url)
          })
          .then(response => this.setState({gifUrls: response}))
      }


      setSearchTerm = (search) => {
        this.setState({searchTerm: search})
        console.log(this.state.searchTerm)
      }

      filteredGifs = () => {
        return this.state.gifUrls.filter(gif => {
            return gif.toLowerCase().includes(this.state.searchTerm)
          })
      }


    render () {
        console.log(this.state)
        return (
            <div>
               <GifSearch setSearchTerm={this.setSearchTerm}/>
               <GifList gifs={this.filteredGifs()}/> 
            </div>
        )
    }



} //end of gif list container class