import React from 'react'
import postsJson from 'json/posts.json'
import PostCard from 'components/PostCard'
import styles from './Inicio.module.css'

export default function Inicio() {
  return (
    <ul className={styles.posts}>
      {
        postsJson.map(
          (post) => {
            return (
              <PostCard post={post} key={post.id} />
            )
          }
        )
      }
    </ul>
  )
}
