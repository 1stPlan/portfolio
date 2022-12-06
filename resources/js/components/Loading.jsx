import React from "react";
import ReactLoading from "react-loading";

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Loading = () => {
return (
    <section className="loading" css={css` margin-top: 30%; `}>
      <ReactLoading
        type="spin"
        color="#ebc634"
        height="100px"
        width="100px"
        className="mx-auto"
      />
      <p className="text-center mt-3">読み込み中</p>
  </section>
)
}

export default Loading;