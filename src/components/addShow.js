import React, { Component } from 'react';
import adapters from '../adapters'

export default class AddShowForm extends Component {
    state = {
        genreList: [],
        selected_genre: 1,
        nameOfShowOrMovie: '',
        cover: null,
        coverURL: null
    }

    componentDidMount() {
        adapters.getGenres()
        .then(data => this.setState({ genreList: data}))
    }


    genreDropDown = (genres) => {
        return genres.map((genre) => {
            return <option key={genre.id} value={genre.id}>{genre.genre_name}</option>
        })
    }

    handleNameInput = (e) => {
        this.setState({
            nameOfShowOrMovie: e.target.value
        })
    }

    handleGenreSelection = (e) => {
        this.setState({
            selected_genre: e.target.value
        })
    }

    handleFile = (e) => {
        const file = e.target.files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            this.setState({
                cover: file,
                coverURL: fileReader.result
            })
        }
        if (file) {
            fileReader.readAsDataURL(file)
        }
    }

    submitForm = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('show[title]', this.state.nameOfShowOrMovie)
        formData.append('show[user_id]', 1)
        formData.append('show[genre_id]', this.state.selected_genre)
        formData.append('show[cover]', this.state.cover)
        adapters.addShow(formData)
    }



    render () {
        const preview = this.state.coverURL ? <img className="preview-img" alt="preview-img" src={this.state.coverURL}/> : null
        return (
            <div className="form-container">
                <form onSubmit={this.submitForm} className="form">
                <h1>Add Show or Movie</h1>
                    <p>Enter Show/Movie Name: <input onChange={this.handleNameInput} value={this.state.nameOfShowOrMovie}/></p>
                    <p>Select Genre: <select onChange={this.handleGenreSelection} value={this.state.selected_genre}>
                        {this.genreDropDown(this.state.genreList)}
                    </select>
                    </p>
                    <p>Upload Cover Art: <input onChange={this.handleFile} type="file"/></p>
                    {preview}
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}