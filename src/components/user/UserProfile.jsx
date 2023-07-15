import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/authContext';

const UserProfile = () => {
  const { user } = useUserAuth();
  const navigate = useNavigate();

  return (
    <div className="max-w-[600px] mx-auto my-4 p-4">
      <h1 className="text-2xl font-bold py-4">Personal Information</h1>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="py-2">User Email:</td>
            <td>{user && user.email}</td>
            <td>
              <button
                className="border border-gray-300 hover:border-black rounded-full py-1 px-4"
              >
                Change
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-2">First Name:</td>
            <td>{user && user.firstname}</td>
            <td>
              <button
                className="border border-gray-300 hover:border-black rounded-full py-1 px-4"
                
              >
                Change
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-2">Last Name:</td>
            <td>{user && user.lastname}</td>
            <td>
              <button
                className="border border-gray-300 hover:border-black rounded-full py-1 px-4"
                
              >
                Change
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-2">Gender:</td>
            <td>{user && user.selectedGender}</td>
            <td>
              <button
                className="border border-gray-300 hover:border-black rounded-full py-1 px-4"
                
              >
                Change
              </button>
            </td>
          </tr>

          <tr>
            <td className="py-2">Age:</td>
            <td>{user && user.age}</td>
            <td>
              <button
                className="border border-gray-300 hover:border-black rounded-full py-1 px-4"
              
              >
                Change
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-2">Contact Number:</td>
            <td>{user && user.phoneNumber}</td>
            <td>
              <button
                className="border border-gray-300 hover:border-black rounded-full py-1 px-4"
                
              >
                Change
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-2">Birthday:</td>
            <td>{`${user && user.selectedMonth}, ${user && user.selectedDay}, ${user && user.selectedYear}`}</td>
            <td>
              <button
                className="border border-gray-300 hover:border-black rounded-full py-1 px-4"
                
              >
                Change
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserProfile;
