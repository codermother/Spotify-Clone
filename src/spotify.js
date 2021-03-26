// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

/* click login page  */
export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "9702342b758a4fa0a6b7a00ea4e553ce";

// redirect to spotify login page
// redirect to home page once authorized

const redirectUri = "http://localhost:3000/";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      //#accessToken=mysupersecretkey&name=ozge
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
