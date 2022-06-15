import axios from 'axios'

const storeToCloudinary = async (presignedUrlParams, fileBinary) => {
  const { direct_upload } = presignedUrlParams;
  const data = fileBinary
  try {
    return axios.put(direct_upload.url, data, {
      headers: direct_upload.headers,
    });
  } catch (e) {
    return e;
  }
};

export default storeToCloudinary;
