function ImagePreviewViewer({image, onDelete}) {
    return (
        <div>
            <button className="image-preview-delete" onClick={onDelete}></button>
            <img className="post-simple-img" src={image} alt="img-preview"/>
        </div>
    )
}

export default ImagePreviewViewer