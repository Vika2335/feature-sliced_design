import { useLoaderData } from "@remix-run/react";

import type { loader, LoaderData } from "../api/loader";
import { ArticlePreview } from "./ArticlePreview";
import { Tabs } from "./Tabs";
import { PopularTags } from "./PopularTags";
import { Pagination } from "./Pagination";
import { Article } from "shared/api";

export function FeedPage() {
  const { articles } = useLoaderData<LoaderData>();

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <Tabs />

            {articles?.articles.length ? (
              articles.articles.map((article: Article) => (
                <ArticlePreview key={article.slug} article={article} />
              ))
            ) : (
              <p>No articles available.</p>
            )}

            <Pagination />
          </div>

          <div className="col-md-3">
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  );
}
