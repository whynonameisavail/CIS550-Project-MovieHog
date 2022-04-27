import React from 'react'
import { Button, Table, Input} from 'antd' 
import { getResilientActors, getCoActors} from '../fetcher'
import ShowMovieDetails from './ShowMovieDetails'


class ResilientActors extends React.Component{
    state = {
        data: [],
        dataActor:[],
        rsesv: "",
        actor: ""
    }
    
    ActorsColumns = [
        {
            title: 'Actor Name',
            dataIndex: 'cast_name',
            key: 'cast_name'
            // render: text => <a>{text}</a>
        }
    ]

    CoActorsColumns = [
        {
            title: 'Actor Name',
            dataIndex: 'cast_name',
            key: 'cast_name'
            // render: text => <a>{text}</a>
        },        
        {
            title: 'Movie Name',
            dataIndex: 'title',
            key: 'title'
            // render: text => <a>{text}</a>
        },
        // {
        //     // title: 'Show Details',
        //     key: 'Show',
        //     dataIndex: 'show',
        //     render: (text, record) => (
        //         <div>
        //             <ShowMovieDetails record={record}/>
        //         </div>
    
        //     )
        // }
    ]

    actorNameOnChange = (value) => {
        this.setState({
            actor: value.target.value
        })
        console.log('actor: ', this.state.actor)
    }

    resilientActors = async () => {
        try {
            const {
                resv,
            } = this.state
            const result = await getResilientActors(resv)
            console.log('result: ', result)
            this.setState({
                data: result.results
            })
            console.log('state data: ', this.state.data)
        } catch (e) {
            console.log('error in resilient Actors: ', e)
        }
    }

    actorConnection = async () => {
        try {
            const {
                actor,
            } = this.state
            const result = await getCoActors(actor)
            console.log('result: ', result)
            this.setState({
                dataActor: result.results
            })
            console.log('state data: ', this.state.data)
        } catch (e) {
            console.log('error in resilient Actors: ', e)
        }
    }

    componentDidMount(){  
    }

    render() {
        return (
            <div>
                <div class="flex mt-3">
                        <div class="mr-10">
                            <Button
                              onClick={this.resilientActors}   
                            >
                                Let's check!
                            </Button>
                        </div>
                    
                </div>
                <div class="w-2/3">
                <div class="mt-5">
                <Table columns={this.ActorsColumns} dataSource={this.state.data} />
                </div>
                </div>

                <div class="mt-5">
                    Find Actors' friends. Enter an actor name
                </div>
                <div class="w-36">
                <Input
                    placeholder='Enter a name'
                    value={this.state.actor}
                    onChange={this.actorNameOnChange}
                ></Input>
                </div>
                <div class="flex mt-3">
                        <div class="mr-10">
                            <Button
                              onClick={this.actorConnection}   
                            >
                                Let's check!
                            </Button>
                        </div>
                    
                </div>
                <div class="w-2/3">
                <div class="mt-5">
                <Table columns={this.CoActorsColumns} dataSource={this.state.dataActor} />
                </div>
                </div>
            </div> 
        )
    }
}

export default ResilientActors