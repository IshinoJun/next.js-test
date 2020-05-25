import { NextPage } from "next";
import * as React from "react";
import fetch from "isomorphic-unfetch";

interface Props {
  stars: number;
  buildTime: string;
}

const SsrIndexPage: NextPage<Props> = (props) => {
  return (
    <div>
      <p>SSRだよー！!!毎回スターの数（更新されれば）とビルド時間が変わるはずだよー！</p>
      <p>Next.JSのスター数：{props.stars}</p>
      <p>ビルド時間：{props.buildTime}</p>
    </div>
  );
};

SsrIndexPage.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  const buildTime = new Date().toString();
  const props: Props = { stars: json.stargazers_count, buildTime };
  return props;
};

export default SsrIndexPage;
