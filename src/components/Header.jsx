



import React from 'react';

function Header(props) {
 let user = props.user;
 let onLogout = props.onLogout;
  return (
    <header>
    <div>
     This is the Header
    </div>

    <div>
      {user.name}({user.id}) &nbsp; &nbsp;
      <a onClick={onLogout} className="btn-logout" href="#">Logout</a>
    </div>
    <hr />
  </header>
  )
}

export default Header
