import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Layout } from "../layouts";
import { add, addNumber } from "../store/actions";

export const Play = () => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="container mx-auto px-4">
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
      </div>

      <div className="mt-11">
        <button
          type="button"
          onClick={() => {
            dispatch(addNumber(5));
          }}
        >
          Add 5
        </button>
      </div>
    </Layout>
  );
};
