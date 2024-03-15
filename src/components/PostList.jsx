const { MainPost } = require("./MainPost")
const { Post } = require("./Post")

const PostList = () => {
    return (
        <section className="lg:w-2/3">
            <header className=" m-3 p-1 bg-green-300 rounded">
                <div className="mx-1 flex justify-between">
                <h3>Postagens recentes</h3>
                <h6>Veja mais</h6>
                </div>
            </header>
            <ul className="flex flex-col md:grid md:grid-cols-2">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </ul>
        </section>
    )
}

export {
    PostList
}