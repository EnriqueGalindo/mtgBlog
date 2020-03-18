import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="article-list section">
            <div className="cards z-depth-0 article-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">project.title</span>
                    <p>Posted by MonoWhiteBorder</p>
                    <p className="grey-text">date/time</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary