import React, { Component } from 'react'
import ArticleList from './ArticleList'

class Home extends Component {
    render(){
        return(
            <div className="home container">
                <div className="row">
                    <div className="col s12 m6">
                        <ArticleList />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home