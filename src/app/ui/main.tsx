import { fetchRecipes } from "@/app/lib/data";
import Image from "next/image";

export default async function Main() {
  const recipes = await fetchRecipes();

  if (!recipes || recipes.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="p-20 flex flex-wrap justify-center gap-20 bg-white">
      {recipes.categories.map(
        (category: {
          idCategory: string;
          strCategory: string;
          strCategoryDescription: string;
          strCategoryThumb: string;
        }) => (
          <div
            key={category.idCategory}
            className="flex flex-col items-center gap-2"
          >
            <p>{category.strCategory}</p>
            <Image
              className="flex"
              src={category.strCategoryThumb}
              alt={category.strCategoryDescription}
              width={320}
              height={200}
            />
          </div>
        )
      )}
    </div>
  );
}
