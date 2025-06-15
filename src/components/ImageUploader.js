
import React, { useState } from 'react';
import { storage } from '../firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const handleUpload = () => {
    if (!image) return;
    const imageRef = ref(storage, 'images/${image.name}');
    uploadBytes(imageRef, image).then(snapshot => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setUrl(downloadURL);
        console.log("Uploaded file URL:", downloadURL);
      });
    });
  };

  return (
    <div>
      <input type="file" onChange={e => setImage(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      {url && <img src={url} alt="Uploaded" width="200" />}
    </div>
  );
};

export default ImageUploader;