import Head from "next/head";
import axios from "axios";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import * as React from "react";
import { Blogs } from "../../models/Blogs";

interface Props {
  blogs: Blogs[];
}

const BlogHome: NextPage<Props> = (props: Props) => {
  const { blogs } = props;

  return (
    <>
      <Head>
        <title>blogs</title>
      </Head>

      <h1 className="title">ブログトップ</h1>
      <Link href="/">
        <a className="link">ホームへ</a>
      </Link>
      <div>
        {blogs.map((blog, index) => (
          <div key={index}>
            <h2>{blog.title}</h2>
            <p>{blog.label}</p>
            <Link href="/blogs/[id]" as={blog.id ? `/blogs/${blog.id}` : undefined}>
              <a>詳細へ</a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({
  preview,
  previewData,
}): Promise<{
  props: Props;
}> => {
  const key = { headers: { "X-API-KEY": process.env.API_KEY } };
  const res = await axios.get((process.env.END_POINT as string) + "blogs/?limit=9999", key);
  const data: Array<Blogs> = await res.data.contents;
  // プレビュー時は draft のコンテンツを追加
  if (preview) {
    const previewDataId = previewData.id as string;

    const draftUrl =
      (process.env.END_POINT as string) + "blogs/" + previewDataId + `?draftKey=${previewData.draftKey as string}`;
    const draftRes = await axios.get(draftUrl, key);
    data.unshift(await draftRes.data);
  }
  return {
    props: {
      blogs: data,
    },
  };
};
export default BlogHome;
