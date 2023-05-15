import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import PostModelo from "components/PostModelo"
import PaginaPadrao from "components/PaginaPadrao"
import NaoEncontrado from "paginas/NaoEncontrado"
import posts from 'json/posts.json'
import './Post.css'
import PostCard from "components/PostCard"
import PostModule from "./PostModule"

export default function Post() {
    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NaoEncontrado />
    }
    
    const postsRecomendados = posts.filter((postx)=>postx.id !== Number(post.id))

    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>
            </PostModelo>
            <PostModule />
        </PaginaPadrao>
    )
}
