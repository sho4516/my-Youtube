const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const fetch = require("node-fetch");
const cors = require("cors")({ origin: true }); // Allow CORS

// Define the secrets
const clientId = defineSecret("VITE_CLIENT_ID");
const clientSecret = defineSecret("VITE_CLIENT_SECRET");
const refreshToken = defineSecret("VITE_REFRESH_TOKEN");

// Create the onRequest function
exports.getAccessToken = onRequest(
  { secrets: [clientId, clientSecret, refreshToken] }, // Attach secrets
  async (req, res) => {
    cors(req, res, async () => {
      // Wrap in CORS function
      if (req.method !== "POST") {
        return res.status(405).send("Method Not Allowed");
      }

      try {
        // Request new access token
        const response = await fetch("https://oauth2.googleapis.com/token", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            client_id: clientId.value(),
            client_secret: clientSecret.value(),
            refresh_token: refreshToken.value(),
            grant_type: "refresh_token",
          }),
        });

        const data = await response.json();

        if (data.error) {
          return res.status(400).json({ error: data.error });
        }

        res.status(200).json({ access_token: data.access_token });
      } catch (error) {
        console.error("Error fetching access token:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  }
);
