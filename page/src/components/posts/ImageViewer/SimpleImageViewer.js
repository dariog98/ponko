function SimpleImageViewer({images}) {
    return (
        <div className="flex flex-wrap">
            {images.map(image => <img className="post-simple-img" src={image.url} alt="post-img"/>)}
        </div>
    )
}

export default SimpleImageViewer