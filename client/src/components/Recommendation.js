import React from 'react'
import { Table, message} from 'antd'
import { getRecommendation, getMovieInfoByMovieID } from '../fetcher'
import ShowMovieDetails from './ShowMovieDetails'

class Recommendation extends React.Component {
    state = {
        username: 'john',
        data: []
    }

    myMovieColumns = [
        {
            title: 'Title',
            dataIndex: 'name',
            key: 'name'
            // render: text => <a>{text}</a>
        },
        {
            title: 'Director',
            dataIndex: 'director',
            key: 'director'
            // render: text => <a>{text}</a>
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country'
            // render: text => <a>{text}</a>
        },
        {
            title: 'Release_date',
            dataIndex: 'rel_date',
            key: 'rel_date'
            // render: text => <a>{text}</a>
        },
        {
            title: 'Runtime',
            dataIndex: 'runtime',
            key: 'runtime'
            // render: text => <a>{text}</a>
        },
        {
            // title: 'Show Details',
            key: 'Show',
            dataIndex: 'show',
            render: (text, record) => (
                <div>
                    <ShowMovieDetails record={record}/>
                </div>
    
            )
        }
    ]

    async componentDidMount() {
        await this.getUserRecommendations()
    }


    getUserRecommendations = async () => {
        try {
            console.log('username: ', window.localStorage.getItem('username'))
            const result = await getRecommendation(window.localStorage.getItem('username'))
            console.log('result:', result)
            let movie_ids = []
            if (result && result.results){
                movie_ids = result.results.map(each => each.movie_id)
            }
            console.log('movie ids', movie_ids)
            
            const movies = []
            if (movie_ids.length > 0){
                for (var i = 0; i < movie_ids.length; i++){
                    const movie_info = await this.getMovieInfoByID(movie_ids[i]);
                    console.log('222222', movie_info)
                    movies.push(
                        {
                            ...movie_info, 
                            movie_id: movie_ids[i]
                        })
                }
            }
            console.log('111111', movies)

            console.log('update table data')
            this.setState({
                data: movies
            })
            console.log('111111', this.state.data)
            

        } catch (e) { 
            console.log('error in getting movies', e)
        }
    }

    getMovieInfoByID = async (movie_id) => {
        const result = await getMovieInfoByMovieID(movie_id)
        return result.results[0]
    }

    render() {
        return (
            <Table columns={this.myMovieColumns} dataSource={this.state.data} />
        )
    }
}

export default Recommendation