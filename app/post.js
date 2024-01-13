export default function Post(props) {
    return (
        <div className="m-3 mb-0 border border-primary" key={props.index}>
            <h2 className="m-1">{props.title}</h2>
            <p className="m-1">{props.content}</p>
        </div>
    );
}