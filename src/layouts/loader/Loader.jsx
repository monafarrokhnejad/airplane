import { CircularProgress } from "@mui/material";

const Loader = () => (
  <CircularProgress
    sx={{
      position: "absolute",
      left: "calc(50% - 3.5rem)",
      top: "45%",
    }}
  />
);
export default Loader;
