import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import AddNewPhotoButton from './AddNewPhotoButton'
import AddNewPhotoModal from './AddNewPhotoModal'
import GalleryItemModal from './GalleryItemModal'

const Home = () => {
  const [galleryRequest, setGalleryRequest] = useState({})
  const [galleryData, setGalleryData] = useState({})
  const photoRef = useRef()

  const showModal = e => {
    const photoUrl = e.target.src
    const modalImage = document.getElementById('modal-image')
    console.log(e.target)
    console.log(modalImage)
    modalImage.src = photoUrl
  }
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
              setGalleryData({
                ...data.gallery,
              })
              setGalleryRequest({success: "Gallery fetched successfully!"})
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

  return (
    <div className="position-relative vh-100">
      <div className="content">
        {
          galleryRequest.loading &&
          (
            <div className="d-flex justify-content-center align-items-center m-5 p-5">
              <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )
        }
        {
          galleryData?.id && (
            <div className="">
              <h1 className="my-2 py-2">{galleryData.name}</h1>
              <h3 className="py-2">{galleryData.description}</h3>
              <div className="d-flex flex-wrap flex-shrink-0 flex-grow-1">
                {
                  galleryData.photos.map(photo =>
                    <div
                      key={photo.url}
                      style={{
                        width: '20rem',
                        height: '12rem',
                        border: '1px solid white'
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#gallery-item-modal"
                      onClick={showModal}
                    >
                      <img src={photo.url} style={{width: '100%'}} />
                    </div>
                  )
                }
              </div>
            </div>
          )
        }
      </div>
      <AddNewPhotoModal galleryId={galleryData?.id} />
      <GalleryItemModal />
      <AddNewPhotoButton />
    </div>
  )
}

export default Home