import { NextPage } from "next";
import * as React from "react";
import fetch from "isomorphic-unfetch";

interface Props {
  stars: number;
  buildTime: string;
}

const SsrIndexPage: NextPage<Props> = (props) => {
  const { stars, buildTime } = props;
  return (
    <div>
      <p>SSRだよー！!!毎回スターの数（更新されれば）とビルド時間はビルド後から変わらないよー！</p>
      <p>Next.JSのスター数：{stars}</p>
      <p>ビルド時間：{buildTime}</p>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  const stars = json.stargazers_count;
  // ビルド時刻の取得
  const buildTime = new Date().toString();

  return {
    props: {
      stars,
      buildTime,
    },
  };
}

export default SsrIndexPage;
