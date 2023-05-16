import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import PostModelo from "components/PostModelo"
import PaginaPadrao from "components/PaginaPadrao"
import NaoEncontrado from "paginas/NaoEncontrado"
import posts from 'json/posts.json'
import './Post.css'
import PostModule from "./PostModule"

export default function Post() {
    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NaoEncontrado />
    }

    const recomendarPosts = () => {
        const postsRecomendados = []

        while (postsRecomendados.length < 4) {
            let x = Math.floor(Math.random() * (8 - 1 + 1)) + 1
            
            let daVez = posts.find((postx) => {
                return x === postx.id
                    && postx.id !== Number(post.id)
                    && !postsRecomendados.some((item) => item.id === x);
            });
    
            if (daVez) {
                postsRecomendados.push(daVez);
            }
        }
        return postsRecomendados
    }

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
            <PostModule posts={recomendarPosts()} />
        </PaginaPadrao>
    )
}
