import React from "react";
import SpotifyUserProfile from "./SpotifyUserProfile";
import MyPlaylist from "./MyPlaylist";

const Api = ({ category, data }) => {
  const { access_token, token_type, expires_in, refresh_token, scope } = data; // data 를 구조파괴 할당
  const authorization = `${token_type} ${access_token}`;
  // 이 authorization 을 컴포넌트마다 props로 전달
  switch (category) {
    case "main":
      break;
    case "profile":
      return <SpotifyUserProfile authorization={authorization} />;
    case "playlist":
      return <MyPlaylist authorization={authorization} />;
    case "ex1":
      break;
    case "ex2":
      break;
    case "ex3":
      break;
    case "ex4":
      break;
    case "ex5":
      break;
    case "ex6":
      break;
  }
  return <div></div>;
};

export default Api;
