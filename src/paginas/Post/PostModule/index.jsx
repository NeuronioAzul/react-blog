import styles from './PostModule.module.css'

export default function PostModule() {
    return (
        <div className={styles.postsRecomendados}>
            <h2>Outros posts que você pode gostar:</h2>
            {
                postsRecomendados.map(
                    (post) => {
                        return (
                            <PostCard key={post.id} post={post} />
                        )
                    }
                )
            }
        </div>
    )
}
