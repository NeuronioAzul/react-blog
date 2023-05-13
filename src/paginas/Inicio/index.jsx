import React from 'react'
import postsJson from 'json/posts.json'
import Post from 'components/Post'
import styles from './Inicio.module.css'

export default function Inicio() {
  return (
    <ul className={styles.posts}>
      {
        postsJson.map(
          (post) => {
            return (
              <Post post={post} key={post.id} />
            )
          }
        )
      }
    </ul>
  )
}
