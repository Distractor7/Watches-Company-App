import logo from "./ralph.png";

function logOut() {
  alert("You have logged out. Thanks for shopping with us.");
}

function UserProfile() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={logo}
        style={{ width: 350, height: 350, borderRadius: "50%", margin: 100 }}
      />
      <div style={{ marginLeft: 10 }}>
        <h3 className="userName">Jordan Bendon</h3>
        <div className="userInfoDiv">
          <p className="userInfo">
            <strong>BIO: </strong> I like watches. Especially blue ones. Nothing
            under $50 000 though.
          </p>
          <p className="userInfo">
            <strong>EMAIL : </strong>jbendon97@gmail.com
          </p>
          <p className="userInfo">
            <strong>Member Number: </strong>28231
          </p>
          <p className="userInfo">
            <strong>Date of Birth: 27/06/1997</strong>
          </p>
          <p className="userInfo">
            <strong>Nationality:</strong> South African
          </p>
          <button onClick={logOut} className="button">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
