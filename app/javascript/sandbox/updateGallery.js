import axios from 'axios'

const updateGallery = async (galleryInfo) => {
  const data = {
    gallery: {
      photo: galleryInfo.blobSignedId
    }
  }
  
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
