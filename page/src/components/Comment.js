import PostBody from "./posts/PostBody"
import PostTag from "./posts/PostTag"
import PostImages from "./posts/PostImages";
import { Link } from "react-router-dom";
import { ArrowPathRoundedSquareIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline'
import { RouteAPI } from "../constants/RoutesAPI";

const Comment = ({data}) => {
    return data ? (
        <div className="comment">
            <div className="post-content flex justify-content-between gap-05">
                <div className="flex flex-column gap-05">
                    <div className="flex">
                        <div>{
                            data.user.avatar 
                            ? <img className="user-avatar" src={`${RouteAPI.Images}/${data.user.avatar.image.filename}`} alt=""/>
                            : <div className="user-avatar"><div className="temp-avatar" style={{ backgroundColor: data.user.color}}><div>{data.user.username.charAt(0)}</div></div></div>
                        }</div>
                        <div className="user-data flex flex-column justify-content-around">
                            <Link className="hover-underline" to={`/${data.user.username}`}>{data.user.username}</Link>
                            <Link className="hover-underline" to={`/${data.user.username}/posts/${data.id}`}>{new Date(data.updatedAt).toLocaleString("en-EN", {year: "numeric", month: "long", day:"numeric"})}</Link>
                        </div>
                    </div>

                    {data.content && <PostBody body={data.content}/>}

                    {data.images && <PostImages data={data.images}/>}

                    {data.tags && <div className="post-tags flex flex-row flex-wrap tags"> {data.tags.map((tag, index) => <PostTag key={index} tag={tag}/>)} </div>}
                </div>
                <div>
                    <div className="flex flex-column justify-content-around gap-05">
                        <div className="flex align-items-center gap-05">
                            <HeartIcon style={{color: "inherit", width: "1.5rem", height:"1.5rem"}}/>
                            <div>{data.likes.length}</div>
                        </div>
                        <div className="flex align-items-center gap-05">
                            <ArrowPathRoundedSquareIcon style={{color: "inherit", width: "1.5rem", height:"1.5rem"}}/>
                            <div>{data.shareds.length}</div>
                        </div>
                        <div className="flex align-items-center gap-05">
                            <ChatBubbleOvalLeftEllipsisIcon style={{color: "inherit", width: "1.5rem", height:"1.5rem"}}/>
                            <div>{data.comments.length}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null
}

export default Comment