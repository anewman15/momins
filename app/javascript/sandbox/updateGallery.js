import axios from 'axios'

const updateGallery = async (galleryInfo) => {
  const data = {
    gallery: {
      photo: galleryInfo.blobSignedId
    }
  }
  console.log('Hi')
  try {
    return axios.put(`/galleries/${galleryInfo.id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  } catch (e) {
    return e;
  }
}

export default updateGallery
