import data from "@/app/data/posts.json";
import Post from "@/app/post";

export default function Home() {
  return (
    <div>
      <h1 className="display-4 ms-3">
        Blog Title
      </h1>
      {data.map((post, index) => (
        <Post key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
}
