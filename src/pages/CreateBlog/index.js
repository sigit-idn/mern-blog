import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components'
import './create-blog.scss'

const CreateBlog = () => {
    const [postData, setPostData] = useState({title : "", content: "", image:""})
    const submitPost = () => ""
    const history=useHistory()
    return (
        <div className="create-blog">
            <h1>Create New Blog Post</h1>
            <Link style={{display : 'block'}} title="Kembali" onClick={() => history.push('/')} />
            <Input label="Post Title" onChange={event => setPostData({...postData, title : event.target.value})} />
            <p>Upload Image</p>
            <Upload onChange={event => console.log(event.target)} />
            <TextArea onChange={event => setPostData({...postData, content : event.target.value})} />
            <Gap height={20} />
            <div className="button-action">
            <Button title="Save" onClick={() => console.log(postData)} />
            <Gap height={50} />
            </div>
        </div>
    )
}

export default CreateBlog
