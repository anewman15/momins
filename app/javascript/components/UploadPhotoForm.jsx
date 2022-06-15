import React, { useState, useRef } from 'react'
import fileHash from '../sandbox/fileHash'
import getPresignedUrl from '../sandbox/getPresignedUrl'
import storeToCloudinary from '../sandbox/storeToCloudinary'
import updateGallery from '../sandbox/updateGallery'

const UploadPhotoForm= ({ galleryId }) => {
  const [imageFile, setImageFile] = useState(null)
  const imageFileInput = useRef()
  const [uploadPhotoRequest, setUploadPhotoRequest] = useState({})


  const fileChangeHandler = event => setImageFile(event.target.files[0])

  const resetImageForm = () => {
    imageFileInput.current.value = null
  }

  const addNewPhoto = async e => {
    e.preventDefault()

    try {
      const md5Hash = await fileHash(imageFile)
      let presignedUrlParams = {}
      getPresignedUrl(imageFile, md5Hash)
        .then(response => {
          if (response.status === 200) {
            presignedUrlParams = response.data
            storeToCloudinary(presignedUrlParams, imageFile)
              .then(response => {
                if (response.status === 200) {
                  const galleryInfo = {
                    id: galleryId,
                    blobSignedId: presignedUrlParams.blob_signed_id
                  }
                  updateGallery(galleryInfo)
                    .then(response => {
                      if (response.status == 200) {
                        setUploadPhotoRequest({ success: response.data.message })
                        resetImageForm()
                      }
                    })
                }
              })
          }
        })
    } catch (error) {
      uploadPhotoRequest({error: error.message})
    }
  }

  return (
    <div className="mx-auto p-2">
      <form
        className="p-2"
        onSubmit={addNewPhoto}
      >
        <div className="d-flex flex-column">
          <div className="">
            {
              uploadPhotoRequest.success &&
              <div className="alert alert-success">
                <span>
                  { uploadPhotoRequest.success }
                </span>
              </div>
            }
            <label htmlFor="new-photo" className="form-label"></label>
            <input
              className="form-control form-control-sm"
              id="new-photo"
              ref={imageFileInput}
              type="file"
              onChange={fileChangeHandler}
            />
          </div>
          <div className="control mt-3 mb-1">
            <button type="submit" className="btn btn-primary">Upload</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UploadPhotoForm