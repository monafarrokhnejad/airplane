import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";

const Profile = ({ isOpenModal, toggleModal, userInfo }) => {
  return (
    <Modal
      keepMounted
      open={isOpenModal}
      onClose={toggleModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        width={{ xs: "100%", sm: 350 }}
        sx={{ transform: "translate(-50%, -50%)" }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Avatar src={userInfo?.image} alt={userInfo?.userNAme} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Id:
                </TableCell>
                <TableCell align="right"> {userInfo?.id}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  user Name:
                </TableCell>
                <TableCell align="right"> {userInfo?.userName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Active:
                </TableCell>
                <TableCell align="right"> {userInfo?.isActive ? "yes" : "No"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Admin:
                </TableCell>
                <TableCell align="right"> {userInfo?.isAdmin ? "yes" : "No"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
};

export default Profile;

Profile.propTypes = {
  isOpenModal: PropTypes.bool,
  toggleModal: PropTypes.func,
  userInfo: PropTypes.object,
};
