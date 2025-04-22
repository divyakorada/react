import React from 'react'
import { HigherOrder } from './Hoc'

function Posts({ x }) {
  return (
    <div>
        <h5>Hello from Posts</h5>
        {x?.slice(0, 10).map((post) => {
          return <p>{post.title}</p>
        })}
    </div>
  )
}

const PostsComp = HigherOrder("Posts", Posts, "posts")

export default PostsComp
