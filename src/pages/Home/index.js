import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [ page, setPage ] = useState(1);
  const [ perPage, setPerPage ] = useState(6);

  const { blogPosts } = useSelector(state => state.HomeReducer)
  
  useEffect(() =>
  fetch("http://localhost:4000/v1/blog/posts?page=" + page + "&perPage=" + perPage )
  .then((response) => response.json())
  .then((result) => dispatch({type : 'UPDATE_BLOG_POST', payload : result.data}))
  .catch((error) => console.log(error))
  );

  return (
    <div className="home-wrapper">
      <div className="create-wrapper">
        <Button
          title="Create Blog"
          onClick={() => history.push("/create-blog")} />
        <Gap height={20} />
      </div>
      <div className="content-wrapper">
        {blogPosts.map((blogPost) => (
          <BlogItem
          key = {blogPost._id}
            title={blogPost.title}
            content={blogPost.content}
            image={"http://localhost:4000/" + blogPost.image}
            timestamp={blogPost.createdAt}
            author={blogPost.author.name}
          />
        ))}
      </div>
      <div className="pagination">
        <Button title="previous" onClick={() => setPage(page-1)} />
        <Gap width={50} />
        <p>1/3</p>
        <Gap width={50} />
        <Button title="next" onClick={() => setPage(page+1)} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
