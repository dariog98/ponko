import FlexImageViewer from "./ImageViewer/FlexImageViewer"
//import SimpleImageViewer from "./ImageViewer/SimpleImageViewer"

function PostImages({data}) {
    /*
    const getViewer = (imagesData) => {
        if (imagesData.data) {
            switch (imagesData.type) {
                case 1:
                    return <FlexImageViewer images={imagesData.data}/>
                default:
                    return <SimpleImageViewer images={imagesData.data}/>
            }
        } else {
            return null
        }
    }
    
    return (
        <div>{getViewer(data)}</div>
    )
    */

    return (
        <FlexImageViewer images={data}/>
    )
}

export default PostImages