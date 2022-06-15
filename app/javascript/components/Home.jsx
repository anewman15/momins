import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddNewPhotoButton from './AddNewPhotoButton'
import AddNewPhotoModal from './AddNewPhotoModal'

const Home = () => {
  const [galleryRequest, setGalleryRequest] = useState({
  })

  useEffect( () => {

    const getGalleryInfo = () => {
      try {
        setGalleryRequest({
          loading: true,
        })
        axios.get('/galleries')
          .then(response => {
            if (response.status == 200) {
              const data = response.data
              setGalleryRequest({
                galleryData: data,
              })
            }
          })
      } catch (error) {
        setGalleryRequest({
          error: error.message,
        })
      }
    }

    getGalleryInfo()
  }, [])

  console.log(galleryRequest.galleryData?.gallery.photos)
  return (
    <div className="position-relative vh-100">
      <div className="">
        {
          galleryRequest.loading && <span>Loading...</span>
        }
      </div>
      <AddNewPhotoModal />
      <AddNewPhotoButton />
    </div>
  )
}

export default Home