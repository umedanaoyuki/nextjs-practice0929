import path from "path";
import fs from "fs";
import matter from "matter";

const postsDirectory = path.join(process.cwd(), "post");

// mdファイルのデータを取り出す
export const getPostData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); // ファイル名(id)

    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    // idとデータを返す
    return {
      id,
      ...matterResult
    }
  });
};
