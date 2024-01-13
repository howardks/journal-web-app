import data from "@/app/data/posts.json";

export default function Home() {
  return (
    <div>
      <h1 className="display-4 ms-3">
        Blog Title
      </h1>
      {data.map((post, index) => (
        <div className="m-3 mb-0 border border-primary" key={index}>
          <h2 className="m-1">{post.title}</h2>
          <p className="m-1">{post.content}</p>
        </div>
      ))}
    </div>
  );
}
