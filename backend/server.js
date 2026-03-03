require("dotenv").config();

// when running locally we start the same express app
const app = require("./api");
const path = require("path");

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
