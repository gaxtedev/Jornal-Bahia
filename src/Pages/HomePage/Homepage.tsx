import { Header } from "../../Components/Header/Header";
import { LatestNews } from "../../Components/LatestNews/LatesteNews";
import { MostRead } from "../../Components/MostRead/MostRead";
import { PostCategories } from "../../Components/PostCategories/PostCatories";
import { PostsMain } from "../../Components/PostsMain/PostsMain";
import { Publicities } from "../../Components/Publicities/publicities";
import { PublicityBanner } from "../../Components/PublicityBanner/PublicityBanner";

export const Homepage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <PublicityBanner />
        <PostsMain />
        <section className="flex flex-col-reverse mt-[57px] lg:flex-row lg:justify-between">
          <MostRead />
          <PostCategories />
        </section>
        <section className="flex flex-col-reverse lg:flex-row lg:justify-between lg:relative">
          <LatestNews />
          <Publicities />
        </section>
      </main>
    </>
  );
};
