window.onload = function() {
init();
maths();
}
function init(){
 console.log('init fired');
}

function maths(){
	var x, y;
	x = 10
	y = 5
	console.log(x + y)
}
<script>
window.onSpotifyWebPlaybackSDKReady = () => {
  // You can now initialize Spotify.Player and use the SDK
};
</script>

const play = ({
  spotify_uri,
  playerInstance: {
    _options: {
      getOAuthToken,
      id
    }
  }
}) => {
  getOAuthToken(access_token => {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
      method: 'PUT',
      body: JSON.stringify({ uris: [spotify_uri] }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    });
  });
};

play({
  playerInstance: new Spotify.Player({ name: "..." }),
  spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
});