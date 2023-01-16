import { useState, useEffect } from 'react';

const GetImg = () => {
    const [img, setImg] = useState('')
    const [loadImg, setLoad] = useState(true)

    useEffect(() => {
        const storage = getStorage()
        const imgRef = ref(storage, "autos/alaskan.png");
        getDownloadURL(imgRef)
        .then(e => setImg(e))
        .catch(e => console.log(e))
        .finally(() => setLoad(false))
    }, [])

    return [ img, loadImg ]
}

export default GetImg;