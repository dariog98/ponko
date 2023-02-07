import { Link } from "react-router-dom"

function PostTag({tag}) {
    return (
        <Link className="tag" to="#">{tag}</Link>
    )
}

export default PostTag