import React from 'react'
import { Tabs} from 'antd' 
import SearchMovie from './SearchMovie';
import TopTenRating from './TopTenRating';
import TopTenReview from './TopTenReview';
import MyMoviePage from './MyMoviePage';
import ResilientActors from './FunFactsPage';
import Recomendation from './Recommendation'

const { TabPane } = Tabs;

class UserMainPage extends React.Component {
    render () {
        return (
            <Tabs defaultActiveKey="1" destroyInactiveTabPane={true}>
                <TabPane tab="Search Movie" key="1">
                    <SearchMovie/>
                </TabPane>
                <TabPane tab="My Movie" key="2">
                    <MyMoviePage />
                </TabPane>
                <TabPane tab="High Rating Movies" key="3">
                    <TopTenRating />
                </TabPane>
                <TabPane tab="Hot Movies" key="4">
                    <TopTenReview />
                </TabPane>
                <TabPane tab="Fun Facts!" key="5">
                    Who are the most resilient Actors?
                    <ResilientActors />
                </TabPane>
                <TabPane tab="Recommendations" key="6">
                    <Recomendation />
                </TabPane>
          </Tabs>
        )
    }
}

export default UserMainPage