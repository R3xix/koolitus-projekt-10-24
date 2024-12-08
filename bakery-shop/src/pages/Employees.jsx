import { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import validator from "validator";

function Employees() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => setUsers(json.data));
  }, []);

  const idRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();

  const addEmployee = () => {
    const newId = idRef.current.value;
    const newFirstName = firstNameRef.current.value;
    const newLastName = lastNameRef.current.value;
    const newEmail = emailRef.current.value;
    const newAvatar = avatarRef.current.value;

    if (!validator.isNumeric(newId)) {
      setError("ID must be a number!");
      return;
    }
    if (!validator.isAlpha(newFirstName, "en-US")) {
      setError("First name must be alphabetic!");
      return;
    }
    if (!validator.isAlpha(newLastName, "en-US")) {
      setError("Last name must be alphabetic!");
      return;
    }
    if (!validator.isEmail(newEmail)) {
      setError("Email must be valid!");
      return;
    }
    if (newAvatar === "") {
      setError("Avatar field must be filled!");
      return;
    }

    
    setError("");
    setUsers([
      ...users,
      {
        id: newId,
        first_name: newFirstName, 
        last_name: newLastName,
        email: newEmail,
        avatar: newAvatar,
      },
    ]);

    // Tühjendame väljad
    idRef.current.value = "";
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    avatarRef.current.value = "";
  };

  const deleteEmployee = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="container">
      <h2 className="mb-4">Employees</h2>

      <Table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <img style={{ width: "100px" }} src={user.avatar} alt="Avatar" />
              </td>
              <td>
                <Button
                  onClick={() => deleteEmployee(index)}
                  type="button"
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}

          <tr className="input-row">
            <td>
              <input ref={idRef} type="number" placeholder="ID" className="form-control" />
            </td>
            <td>
              <input
                ref={firstNameRef}
                type="text"
                placeholder="First Name"
                className="form-control"
              />
            </td>
            <td>
              <input
                ref={lastNameRef}
                type="text"
                placeholder="Last Name"
                className="form-control"
              />
            </td>
            <td>
              <input
                ref={emailRef}
                type="email"
                placeholder="Email"
                className="form-control"
              />
            </td>
            <td>
              <input
                ref={avatarRef}
                type="url"
                placeholder="Avatar URL"
                className="form-control"
              />
            </td>
            <td>
              <Button onClick={addEmployee} type="submit" variant="success">
                Add
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {error && <div >{error}</div>}
    </div>
  );
}

export default Employees;
