import { Blogs } from "../../models/Blogs";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import ErrorPage from "next/error";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import axios from "axios";

interface Props {
  blog: Blogs;
  errors?: string;
}

const BlogDetail: NextPage<Props> = (props) => {
  return (
    <>
      {props.blog ? (
        <>
          <Head>
            <title>ブログ詳細</title>
          </Head>
          <h1 className="title">ブログ詳細</h1>
          <Link href="/blogs/">
            <a className="link">ブログトップへ</a>
          </Link>
          <div className="item">
            <h2 className="item__title">{props.blog.title}</h2>
            <p className="item__label">{props.blog.label}</p>
            <p className="item__description">{props.blog.description}</p>
          </div>
        </>
      ) : (
        <ErrorPage statusCode={404} />
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  const res = await axios.get(process.env.END_POINT + "blogs/?limit=9999", key);
  const data: Array<Blogs> = await res.data.contents;
  const paths = data.map((item) => ({
    params: { id: item?.id?.toString() ?? "0" },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params, preview, previewData }) => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  let data: Blogs | null = null;

  if (typeof params?.id === "string" && typeof process.env.END_POINT === "string") {
    let url = process.env.END_POINT + "blogs/" + params?.id;

    console.log(preview);
    // 下書きは draftKey を含む必要があるのでプレビューの時は追加
    if (preview) {
      url += `?draftKey=${previewData.draftKey as string}`;
    }
    const res = await axios.get(url, key);
    //ほんとはこれだめ
    data = (await res.data) as Blogs;
  }

  return {
    props: { blog: data },
  };
};

export default BlogDetail;
