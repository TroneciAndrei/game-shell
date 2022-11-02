import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../layouts";

export const Play = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1>Play</h1>
      </div>

      <Link to="/" title="Home">
        Home
      </Link>
    </Layout>
  );
};
