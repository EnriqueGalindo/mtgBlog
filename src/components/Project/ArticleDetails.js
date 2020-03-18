import React from 'react'

function ArticleDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section article-details">
            <div className="card z-depth-0">
                <div className="card content">
                    <span className="card-title">Project Title {id} </span>
                    <p>Lorem</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>author</div>
                    <div>date</div>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetails

