import "./App.css";
import photo from "./profil.jpg";
import Profile from "./profile/Profile";

function App() {
  const profile = {
    fullName: "SAIDI Ibtihel",
    bio: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    profession: "Student",
    pic: photo,
  };
  const handleName = (fullName) => alert(`full name: ${fullName}`);
  return (
    <div className="App">
      <Profile
        fullName={profile.fullName}
        bio={profile.bio}
        profession={profile.profession}
        handleName ={ handleName}
      >
        <img src={profile.pic} alt="" srcset="" />
      </Profile>
    </div>
  );
}

export default App;
