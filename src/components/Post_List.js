import React from 'react';
import PostListItem from './Post_List_Item';

const PostList = (props) => {

  const listOfPosts = props.listOfPosts.map((post) => {
    return <PostListItem singlePost={post} key={post.title.rendered} onSinglePostSelect={props.onSinglePostSelect}/>
  })

  return (
    <div className="col s12 m5">
      <div className="collection">
        {listOfPosts}
      </div>
    </div>
  );

}
export default PostList;
