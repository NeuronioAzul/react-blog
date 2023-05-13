import React from 'react'
import Banner from 'components/Banner'
import postsJson from 'json/posts.json'
import Post from 'components/Post'
import styles from './Inicio.module.css'

export default function Inicio() {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        {
          postsJson.map(
            (post) => {
              return (
                <Post post={post} key={post.id}/>
              )
            }
          )
        }
      </ul>
    </main>
  )
}
