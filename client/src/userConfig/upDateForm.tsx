import { useState } from "react";
import { useAuthContext } from "../contexts/userContext";
import { User } from "@/services/userTypes";
import useUpdate from "@/hooks/upDate";

const UpdateForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [profileDp, setProfileDp] = useState(null as File | null);
  const { loading, error, update } = useUpdate();
  const { state } = useAuthContext();

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user: User = { name, username, email, password };
    update(user);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "username":
        setUsername(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      // case "profileDp":
      //   if (e.target.files && e.target.files.length > 0) {
      //     setProfileDp(e.target.files[0]);
      //   }
      //   break;
    }
  }

  return (
    <div>
      {state.username && <p>{state.username}</p>}
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={handleInput}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleInput}
        />
        {/* <input
          type="file"
          name="profileDp"
          onChange={handleInput}
        /> */}
        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update"}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default UpdateForm