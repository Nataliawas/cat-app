import React, { Component } from 'react';
import './Cats.css'
class Cats extends Component {

    state = {
        cats: []
    }

    componentDidMount() {
        const cats = []
        const headers = {
            'x-api-key': 'd72fadf6-1108-44d5-a47c-3bfb279b1acc'
        }
        fetch('https://api.thecatapi.com/v1/images/search?limit=12', { headers })
            .then(response => response.json())
            .then(data => {
                data.forEach(catFromApi => {
                    const cat = {
                        id: catFromApi.id,
                        url: catFromApi.url
                    }

                    cats.push(cat)

                });
                this.setState({ cats })
            });

    }
    render() {
        return (

            <div className="cat-container">
                <div className="title">RANDOM CATS</div>
                {this.state.cats.map(cat => (
                    <div className="cat" key={cat.id} ><img src={cat.url} alt="koteł" /> </div>
                ))}

            </div>

        );
    }
}

export default Cats;