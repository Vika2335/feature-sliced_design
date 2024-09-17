import { Form, useLoaderData } from "@remix-run/react";
import { ExistingSearchParams } from "remix-utils/existing-search-params";

import type { LoaderData } from "../api/loader";

export function PopularTags() {
  const { tags } = useLoaderData<LoaderData>();

  return (
    <div className="sidebar">
      <p>Popular Tags</p>

      <Form>
        <ExistingSearchParams exclude={["tag", "page", "source"]} />
        <div className="tag-list">
          {Array.isArray(tags) && tags.length > 0 ? (
            tags.map((tag) => (
              <button
                key={tag}
                name="tag"
                value={tag}
                className="tag-pill tag-default"
              >
                {tag}
              </button>
            ))
          ) : (
            <p>No tags available</p>
          )}
        </div>
      </Form>
    </div>
  );
}
