import axios from 'axios'

const getPresignedUrl = (file, fileHash) => {
  const data = JSON.stringify({
    file: {
      filename: file.name,
      byte_size: file.size,
      checksum: fileHash,
      content_type: file.type,
      metadata: {
        message: 'Profile image',
      },
    },
  })

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  try {
    return axios.post('/presigned_url', data, { headers: headers } );
  } catch (e) {
    return e;
  }
};

export default getPresignedUrl;
