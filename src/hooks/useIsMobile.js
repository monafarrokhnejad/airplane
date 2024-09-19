import useMediaQuery from "@mui/material/useMediaQuery";

export const useIsMobile = () => {
  const matches = useMediaQuery("(max-width:768px)");
  return matches;
};
