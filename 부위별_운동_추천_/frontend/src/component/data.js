import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState(null);
  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 users 를 초기화하고

        setUsers(null);

        const response = await axios.get(
          'http://127.0.0.1:8000/no_data_json/'
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
      }

    };

    fetchUsers();
  }, []);

  if (!users) return null;
  return (
    <ul>
      {users.map(user => (
        <li key={user.no}>
          {user.no}
        </li>
      ))}
    </ul>
  );
}

export default Users;