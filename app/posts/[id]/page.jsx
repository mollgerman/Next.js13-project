import React from 'react'

const Post = ({ params }) => {
  const { id } = params.id

  return (
    <h2>This is the post n° {id}</h2>
  )
}

export default Post
