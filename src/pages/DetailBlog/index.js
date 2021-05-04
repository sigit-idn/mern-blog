import React from "react";
import { useHistory } from "react-router";
import { RegisterBg } from "../../assets";
import { Link } from "../../components";
import './detail-blog.scss'

const DetailBlog = () => {
    const history = useHistory()
  return (
    <div className="detail-blog-wrapper">
        <img src={RegisterBg} alt="thumbnail" />
        <h2>Title</h2>
        <h3>Author - Timestamp</h3>
        <p>Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog </p>
        <Link title="Kembali ke home" onClick={() => history.push('/')} />
    </div>
  );
};

export default DetailBlog;
