export default function Home(props) {
  return (
    <div className="text-center mt-4">
      <h1 className="display-4 ms-3">
        Welcome to Web Journal!
      </h1>
      <div>
        <button type="button" class="btn btn-outline-primary me-2" onClick={props.signup}>Sign-up</button>
        <button type="button" class="btn btn-primary" onClick={props.login}>Login</button>
      </div>
    </div>
  );
}
