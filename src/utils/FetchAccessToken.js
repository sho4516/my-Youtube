// const getAccessToken = async () => {
//   const response = await fetch("https://oauth2.googleapis.com/token", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: new URLSearchParams({
//       client_id: import.meta.env.VITE_CLIENT_ID,
//       client_secret: import.meta.env.VITE_CLIENT_SECRET,
//       refresh_token: import.meta.env.VITE_REFRESH_TOKEN,
//       grant_type: "refresh_token",
//     }),
//   });

//   const data = await response.json();
//   return data.access_token;
// };

const getAccessToken = async () => {
  try {
    const response = await fetch(
      "https://us-central1-my-89c15.cloudfunctions.net/getAccessToken",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
};

export default getAccessToken;
