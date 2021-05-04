import React from 'react'
import { useHistory } from 'react-router'
import { Button, Gap } from '../../atoms'
import './blogItem.scss'

const BlogItem = props => {
    const {title, content, author, timestamp, image, key} = props
    const history = useHistory()
    return (
        <div className="blog-item" key={key}>
            <img src={image} alt="post" />
            <div>
            <h2>{title}</h2>
            <h3>{author} - {timestamp}</h3>
            <p>{content}</p>
            <Gap height={10} />
            <Button title="View Detail" onClick={()=> history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem
