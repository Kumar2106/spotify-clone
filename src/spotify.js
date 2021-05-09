export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-188e8.web.app/";

const clientId = "085d8075aec449d3b48a4a6565e0bc08";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
