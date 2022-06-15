import React, { useState, useRef } from 'react';
// import { PropTypes } from 'prop-types';
// import saveCurrentUser from '../../redux/actions/user';
// import fileHash from '../../utils/fileHash';
// import getPresignedUrl from '../../sandbox/getPresignedUrl';
// import storeToCloudinary from '../../sandbox/storeToCloudinary';
// import updateProfileImage from '../../sandbox/updateProfileImage';

const UploadPhotoForm= ({ currentUser, saveCurrentUser }) => {
  const [imageFile, setImageFile] = useState(null);
  // const imageFileInput = useRef();
  // const [profileImageUrl, setProfileImageUrl] = useState('');


  const fileChangeHandler = event => setImageFile(event.target.files[0]);

  // const resetImageForm = () => {
  //   imageFileInput.current.value = '';
  //   setImageFile(null);
  // };

  // const handleProfileImageUpload = async e => {
  //   e.preventDefault();

  //   const md5Hash = await fileHash(imageFile);

  //   let presignedUrlParams = {};
  //   getPresignedUrl(userInfo.fileBinary, md5Hash)
  //     .then(response => {
  //       if (response.status === 200) {
  //         return response.json();
  //       }
  //     })
  //     .then(data => {
  //       presignedUrlParams = data;
  //       storeToCloudinary(presignedUrlParams, userInfo.fileBinary)
  //         .then(response => {
  //           if (response.status === 200) {
  //             updateProfileImage(userInfo, presignedUrlParams.blob_signed_id)
  //               .then(response => response.json())
  //               .then(data => {
  //                 if (data.status === 'success') {
  //                   setProfileImageUrl(data.profile_image_url);
  //                   updatedCurrentUser.profile_image_url = data.profile_image_url;
  //                   saveCurrentUser(updatedCurrentUser);
  //                   resetImageForm();
  //                 }
  //               })
  //           }
  //         })
  //     })
  // }

  console.log(imageFile)

  return (
    <div className="mx-auto p-2">
      <form
        className="p-2"
        // onSubmit={handleProfileImageUpload}
      >
        <div className="d-flex flex-column">
          <div className="">
            <label htmlFor="new-photo" className="form-label"></label>
            <input className="form-control form-control-sm"
              id="new-photo"
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