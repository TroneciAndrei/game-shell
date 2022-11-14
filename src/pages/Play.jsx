import React from "react";

import { AuthorizedLayout, Layout } from "../layouts";

export const Play = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <AuthorizedLayout></AuthorizedLayout>
      </div>
    </Layout>
  );
};
