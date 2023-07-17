import { useEffect, useState } from "react";
import { useUserAuth } from '../context/authContext';

export default function UserImage() {
  const { user, uploadImage, updateUser } = useUserAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(() => {
    const storedPhotoURL = localStorage.getItem(`${user?.uid}-photoURL`); // Use user's uid as a unique identifier
    return storedPhotoURL || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
  });

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  async function handleClick() {
    setLoading(true);
    const newPhotoURL = await uploadImage(photo);
    if (newPhotoURL) {
      setPhotoURL(newPhotoURL);
      updateUser({ photoURL: newPhotoURL }); // Update the user's data with the new photoURL
      localStorage.setItem(`${user?.uid}-photoURL`, newPhotoURL); // Store the photoURL in localStorage with user's uid as a unique identifier
    }
    setLoading(false);
  }

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
      localStorage.setItem(`${user.uid}-photoURL`, user.photoURL); // Store the photoURL in localStorage with user's uid as a unique identifier
    }
  }, [user]);

  return (
    <div className="fields">
      <input type="file" onChange={handleChange} />
      <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
      <img src={photoURL} alt="Avatar" className="avatar" />
    </div>
  );
}
