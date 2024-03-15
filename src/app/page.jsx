import { MainPost } from "@/components/MainPost";
import { PopularList } from "@/components/PopularPostList";
import { PostList } from "@/components/PostList";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="xl:mx-24">
      <section className="flex">
        <MainPost/>

        <PopularList/>
      </section>
      <section className="flex">
      <PostList/>
        <div className="lg:flex hidden">
          <header>
            <h3>Categorias</h3>
            <ul>
              <li></li>
            </ul>
          </header>
        </div>
      </section>
    </main>
  );
}
