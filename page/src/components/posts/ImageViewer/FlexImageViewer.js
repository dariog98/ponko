function FlexImageViewer({images}) {
    // {images.map(image => <a style={{width: "50%"}} href={image}><img className="post-simple-img" src={image} alt="post-img"/></a>)}
    // {images.map(image => <img className="post-simple-img" style={{width: `${100/image.size}%`}} src={image.url} alt="post-img"/>)}
    return (
        <div className="flex flex-wrap">
            {images.map(image => <img className="post-simple-img" style={{width: `${100/image.size}%`}} src={image.url} alt="post-img"/>)}
        </div>
    )
}

export default FlexImageViewer