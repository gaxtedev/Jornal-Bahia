import React, { useEffect, useState } from "react";
import { usePostContext } from "../../Providers/post/PostContext";
import { IPost } from "../../types/PostTypes";

export const PostCategories = () => {
  const { AllPosts } = usePostContext();
  const [uniqueCategoryPosts, setUniqueCategoryPosts] = useState<IPost[]>([]);

  useEffect(() => {
    if (AllPosts) {
      const filteredPosts = filterUniquePosts(AllPosts);
      const shuffledPosts = shuffleArray(filteredPosts);
      const limitedPosts = shuffledPosts.slice(0, 5);
      setUniqueCategoryPosts(limitedPosts);
    }
  }, [AllPosts]);

  const filterUniquePosts = (posts: IPost[]): IPost[] => {
    const uniqueCategoriesMap: { [categoryId: string]: IPost } = {};
    posts.forEach((post) => {
      if (post.categories && post.categories.length > 0) {
        const categoryId = post.categories[0].id;
        if (!uniqueCategoriesMap[categoryId]) {
          uniqueCategoriesMap[categoryId] = post;
        }
      }
    });
    return Object.values(uniqueCategoriesMap);
  };

  const shuffleArray = (array: any[]): any[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  if (!AllPosts) return null;

  return (
    <div className="flex-col">
      {uniqueCategoryPosts.map((post, index) => (
        <li key={post.id} className="flex flex-col mb-4">
          <div className="flex flex-col mb-2">
            {index === 0 && (
              <img className="max-w-[348px] max-h-[188px]" src={post.photoUrls} alt={post.title} />
            )}
            <h2>{post.title}</h2>
            <span>
              {new Date(post.createdAt).toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            {index !== 0 && <strong>{post.categories[0].name}</strong>}
          </div>
        </li>
      ))}
    </div>
  );
};
