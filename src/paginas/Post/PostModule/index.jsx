import PostCard from 'components/PostCard'
import styles from './PostModule.module.css'

export default function PostModule({ posts }) {
    return (
        <div className={styles.postsRecomendados}>
            <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
            <ul className={styles.posts}>
                {
                    posts.map(
                        (post) => {
                            return (
                                <PostCard key={post.id} post={post} />
                            )
                        }
                    )
                }
            </ul>

        </div>
    )
}
