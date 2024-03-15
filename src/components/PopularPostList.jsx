import { PopularPost } from "./PopularPost"

const PopularList = () => {
    return (
        <section className="hidden m-3 lg:flex lg:flex-col lg:w-1/3 ">
            <header className="p-3 bg-green-300 rounded-lg mb-3">
                <h3>Posts Populares</h3>
            </header>
            <ul>
                <li><PopularPost/></li>
                <li><PopularPost/></li>
                <li><PopularPost/></li>
            </ul>
        </section>
    )
}

export {PopularList}