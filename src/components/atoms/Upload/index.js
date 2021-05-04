import React from 'react'
import { LoginBg } from '../../../assets'
import './upload.scss'

const Upload = (...rest) => <div className="upload"> <img src={LoginBg} alt="preview" /> <input className="upload" type="file" {...rest} /> </div>

export default Upload
