import { Box, Divider } from "@mui/material";
import { IoMdHelpCircle } from "react-icons/io";
import { MdReportProblem } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { useAuthInfo } from "../../../Context/authContext/useAuthInfo";
import Cookies from "universal-cookie";
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebaseConfig";

const menuIconsForProfile = [
  { menuIcon: <IoMdHelpCircle />, menuName: "Help" },
  { menuIcon: <MdReportProblem />, menuName: "Report a problem" },
];

export default function ProfileTooltip() {
    const { setAuthInfo } = useAuthInfo();
    const cookies = new Cookies();
    const handleLogOut = async () => {
        setAuthInfo('')
        cookies.remove('authInfo')
        await signOut(auth);
    }
  return (
    <Box fontSize={"1rem"}>
      {menuIconsForProfile.map((menu) => (
        <Box
          key={menu.menuName}
          sx={{ display: "flex", gap: "1rem", cursor: "pointer" }}
        >
          <Box>{menu.menuIcon}</Box>
          <Box>{menu.menuName}</Box>
        </Box>
      ))}
      <Divider />
      <Box sx={{ display: "flex", gap: "1rem", cursor: "pointer" }} onClick={handleLogOut}>
        <HiOutlineLogout /> Log out
      </Box>
    </Box>
  );
}
