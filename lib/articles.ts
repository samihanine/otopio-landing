import { Article } from "@/types";
import glob from "fast-glob";
import path from "path";

export async function getAllArticles() {
  return [] as Article[];
}

export async function getAllCategories() {
  let articles = await getAllArticles();
  let repeatingCategories = articles.map((article) => article.category);

  const categoryCount = new Map();

  repeatingCategories.forEach((category) => {
    if (categoryCount.has(category)) {
      categoryCount.set(category, categoryCount.get(category) + 1);
    } else {
      categoryCount.set(category, 1); // Map to capture Count of elements
    }
  });

  const uniqueCategories = Array.from(new Set(repeatingCategories));

  const categories = uniqueCategories.sort((category1, category2) => {
    let freq1 = categoryCount.get(category1);
    let freq2 = categoryCount.get(category2);

    return freq2 - freq1;
  });

  return categories;
}

export async function getArticlesInCategory(category: string) {
  const articles = await getAllArticles();
  return articles.filter((article) => {
    return article.category === category;
  });
}
