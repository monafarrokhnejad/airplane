// third-party
import { merge } from "lodash";

// project import
import Badge from "./Badge";
import Button from "./Button";
import Card from "./Card";
import CardContent from "./CardContent";
import Checkbox from "./Checkbox";
import Chip from "./Chip";
import DataGrid from "./DataGrid";
import Dialog from "./Dialog";
import Divider from "./Divider";
import Icon from "./Icon";
import IconButton from "./IconButton";
import InputLabel from "./InputLabel";
import Link from "./Link";
import LinearProgress from "./LinearProgress";
import ListItemIcon from "./ListItemIcon";
import OutlinedInput from "./OutlinedInput";
import Pagination from "./Pagination";
import Tab from "./Tab";
import Tabs from "./Tabs";
import TableCell from "./TableCell";
import Typography from "./Typography";

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme) {
  return merge(
    Badge(theme),
    Button(theme),
    Card(theme),
    CardContent(),
    Checkbox(theme),
    Chip(theme),
    DataGrid(theme),
    Dialog(theme),
    Divider(theme),
    Icon(theme),
    IconButton(theme),
    InputLabel(theme),
    Link(),
    LinearProgress(),
    ListItemIcon(),
    OutlinedInput(theme),
    Pagination(theme),
    Tab(theme),
    Tabs(theme),
    TableCell(theme),
    Typography()
  );
}
