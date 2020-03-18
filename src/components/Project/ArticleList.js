import React from 'react'
import ProjectSummary from './ProjectSummary'

const ArticleList = ({projects}) => {
    return (
        <div className="article-list section">
           {projects && projects.map(project => {
               return (
                   <ProjectSummary project={project} key={project.id} />
               )
            })}
        </div>
    )
}

export default ArticleList