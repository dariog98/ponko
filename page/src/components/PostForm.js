import { useRef, useState } from 'react'
import { useUserContext } from '../providers/UserProvider';
import ImagePreviewViewer from './posts/ImageViewer/ImagePreviewViewer';
import postServices from '../services/posts';

function PostForm({ handlePosts }) {
    const user = useUserContext()
    const hiddenFileInput = useRef(null)
  
    const [content, setContent] = useState("")
    const [images, setImages] = useState([])
    const [tags, setTags] = useState([])

    const handleDelete = (elementIndex) => {
        const newImages = images.filter((image, index) => index !== elementIndex)
        setImages(newImages)
    }

    const handleContentChange = (event) => {
        setContent(event.target.value)
    }

    /*
    const handleDragEnter = (event) => {
        event.preventDefault()
    }

    const handleDragOver = (event) => {
        event.preventDefault()
    }

    const handleDrop = (event) => {
        event.preventDefault()

        const files = event.dataTransfer.files
        
        console.log(files)

        if (files && files.length) {
            const file = files[0]

            const fileReader = new FileReader()
            fileReader.onload = () => {
                const source = fileReader.result
                if (!images.includes(source)) {
                    setImages([...images, source])
                }
            }
            fileReader.readAsDataURL(file)
        }
    }

    */

    const handleAddImageClick = () => {
        hiddenFileInput.current.click()
    }

    const handleInputFile = (event) => {
        const files = event.target.files
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/webp']

        if (files && files.length) {
            const file = files[0]

            if (validImageTypes.includes(file['type'])) {
                const fileReader = new FileReader()
                fileReader.onload = () => {
                    const source = fileReader.result
                    if (!images.includes(source)) {
                        setImages([...images, source])
                    }
                }
                fileReader.readAsDataURL(file)
            }
        }
    }

    const handleSend = async () => {
        const post = {
            content,
            images,
            tags,
            userId: user.id
        }
        try {
            const response = await postServices.createPost(post, user.token)
            if (response.ok) {
                const post = await response.json()
                handlePosts(post)
                setContent("")
                setImages([])
                setTags([])
            } else {
              console.log(response)
            }
        } catch (error) {
            console.log('fetchPost: ' + error.message)
        }
    }

    return (
        <div className="post">
            <div className="post-content">
                <textarea className="post-textarea" rows="5" value={content} placeholder="Write you text here..." onChange={handleContentChange}/>

                {images.map((image, index) => <ImagePreviewViewer key={index} image={image} onDelete={() => handleDelete(index)}/>)}

                {/* 
                <div className="image-drag" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}>
                    <div>Drag and drop an image</div>
                </div>

                <input className="post-add-image" type="file" accept="image/png, image/jpeg" onChange={handleInputFile}/>
                */}

                <div className="flex justify-content-between align-items-center">
                    <div>
                        <button className="post-add-image" onClick={handleAddImageClick}>Add an Image</button>
                        <input className="hidden" type="file" ref={hiddenFileInput} accept="image/gif, image/jpeg, image/png, image/webp" onChange={handleInputFile}/>
                    </div>
                    <button className="post-send" onClick={handleSend}>SEND</button>
                </div>

            </div>
                
        </div>
    )
}

export default PostForm
