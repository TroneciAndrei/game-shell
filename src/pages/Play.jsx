import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AuthorizedLayout, Layout } from "../layouts";
import { add } from "../store/actions";

export const Play = () => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <AuthorizedLayout>
          <h1>Play</h1>

          <Link to="/" title="Home">
            Home
          </Link>

          <button
            type="button"
            onClick={() => {
              dispatch(add());
            }}
          >
            +
          </button>
        </AuthorizedLayout>
      </div>
    </Layout>
  );
};
