import { NextApiHandler } from "next";
import axios from "axios";

const preview: NextApiHandler = async (req, res) => {
  // クエリの確認
  if (req.query.secret !== process.env.SECRET_KEY || !req.query.id || !req.query.draftKey) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return res.status(401).json({ message: `Invalid query, ${process.env.SECRET_KEY}` });
  }

  // 下書きのデータを取得
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const url =
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    process.env.END_POINT + "/blogs/" + req.query.id + `?draftKey=${req.query.draftKey as string}`;

  const post = await axios.get(url, key);
  console.log(post);

  // エラー処理
  if (!post) {
    return res.status(401).json({ message: "Invalid draft key" });
  }

  // プレビューデータを格納
  res.setPreviewData({
    draftKey: req.query.draftKey,
    id: req.query.id,
  });

  // 詳細ページへリダイレクト
  res.writeHead(307, { Location: `/blogs/${req.query.id as string}` });

  res.end("Preview mode enabled");
};

export default preview;
