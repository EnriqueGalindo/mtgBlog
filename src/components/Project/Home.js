import React, { Component } from 'react'
import ArticleList from './ArticleList'
import {conect} from 'react-redux'

class Home extends Component {
    render(){
        return(
            <div className="home container">
                <div className="row">
                    <div className="col s12 m6">
                        <ArticleList project={this.props}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return(
        projects: state.project.projects,
    )
}

export default connect(mapStateToProps)(Home)