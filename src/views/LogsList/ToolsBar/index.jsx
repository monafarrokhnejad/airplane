import Filters from "c/Infrastructures/Filters";
import LogsFilter from "./LogsFilter";
import { useIsMobile } from "~/hooks/useIsMobile";
import LogsSearch from "./LogsSearch";
import SearchBox from "c/Infrastructures/LogsList/SearchBox";

const ToolsBar = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? <SearchBox component={<LogsSearch />} /> : <LogsSearch />}
      <Filters component={<LogsFilter />} />
    </>
  );
};

export default ToolsBar;
