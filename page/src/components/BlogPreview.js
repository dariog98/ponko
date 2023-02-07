import { Link } from "react-router-dom";

function BlogPreview({data}) {
    return data ? (
        <div className="post">

            <div className="post-head flex justify-content-between align-items-center">
                <h3>{data.title}</h3>
                <div className="flex">
                    <div className="user-data flex flex-column justify-content-center align-items-end">
                        <div>{data.user.name}</div>
                        <Link to={`/blog/${data.id}`}>{data.date}</Link>
                    </div>
                    <div>
                        <img className="user-avatar" src={data.user.avatar} alt="user-avatar"/>
                    </div>
                </div>
            </div>

            <div className="post-content">
                <div>
                    {data.body}
                </div>

                {data.image ? <img className="blog-preview-img" src={data.image} alt="blog-cover"/> : null}
            </div>

            <div className="post-footer">
                <div className="flex justify-content-around">
                    <div className="liked">{data.likes}</div>
                    <div className="shared">{data.shared}</div>
                    <div className="comments">{data.comments.length}</div>
                </div>
            </div>
        </div>
    ) : null
}

export default BlogPreview