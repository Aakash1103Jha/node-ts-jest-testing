import("dotenv/config");
import("regenerator-runtime");

import app from "./app";
import RootRoute from "./routes/root.route";

app.use("/", RootRoute);

const PORT = process.env.PORT || 4000;

const connection = app.listen(PORT, () => console.info(`Server running on port ${PORT}`));

export default connection;
