import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updateUserProfile } from '../actions/userActions';
import MessageBox from '../components/MessageBox';
function ProfileScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  if (!userSignin.userInfo) {
    props.history.push('/signin');
  }
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [sellerLogo, setSellerLogo] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerDescription, setSellerDescription] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);

  const { user, error } = userDetails;

  const submitHandler = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      alert('Password and confirm password does not match.');
    } else {
      dispatch(
        updateUserProfile({
         
          email,
          name,
          password,
        })
      );
    }
  };
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;
  useEffect(() => {
  }, [user, success, dispatch, userSignin.userInfo._id]);
  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    bodyFormData.append('image1', file);
    bodyFormData.append('image2', file);
    bodyFormData.append('image3', file);
    setUploading(true);
    axios
      .post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setSellerLogo(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>User Profile</h1>
        </div>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {success && (
          <MessageBox variant="success">Profile Saved Successfully.</MessageBox>
        )}
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
          <>
            <h2>Seller</h2>
            <div>
              <label htmlFor="sellerName">Seller Name</label>
              <input
                id="sellerName"
                type="text"
                placeholder="Enter Seller Name"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="image">Image Url</label>
              <input
                id="image"
                type="text"
                placeholder="Enter logo url"
                value={sellerLogo}
                onChange={(e) => setSellerLogo(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="image-file">Image File</label>

              <input
                type="file"
                id="image-file"
                label="Choose Logo"
                onChange={uploadFileHandler}
              />
              {uploading}
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                placeholder="Enter Description"
                value={sellerDescription}
                onChange={(e) => setSellerDescription(e.target.value)}
              />
            </div>
          </>
        <div>
          <label />
          <button className="primary" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileScreen;
