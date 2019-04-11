import React, { Component } from 'react';

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
        console.log(cats)

        console.log(this.state)
    }
    render() {
        return (

            <div>
                <ul>
                    {this.state.cats.map(cat => (
                        <li key={cat.id} ><img src={cat.url} alt="koteł" /> </li>
                    ))}
                </ul>
            </div>

        );
    }
}

export default Cats;