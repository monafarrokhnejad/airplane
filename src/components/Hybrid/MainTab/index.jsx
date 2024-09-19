import { useState } from "react";
import PropTypes from "prop-types";

import { Box, Tab, Tabs } from "@mui/material";

const MainTab = ({ data }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <>
      <Tabs value={value} onChange={handleChange} aria-label="logs-detail">
        {data?.map((item) => (
          <Tab key={item.id} id={item.id} label={item.label} aria-controls={item.id} />
        ))}
      </Tabs>
      {data?.map((item) => (
        <div key={item.id} id={item.id} hidden={value !== item.id} aria-labelledby={item.id} role="tabpanel">
          {value === item.id && <Box mt={2}>{item.body}</Box>}
        </div>
      ))}
    </>
  );
};
export default MainTab;

MainTab.propTypes = {
  data: PropTypes.array,
};
