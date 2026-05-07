import { AppBar, Layout } from "react-admin";
import { Box, IconButton, Tooltip } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import logo from "../../assets/logo_sm.png";

const AdminAppBar = () => (
    <AppBar>
        <a href="/" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Gordet" style={{ height: 36, marginRight: 16, display: "block" }} />
        </a>
        <Box flex={1} />
        <Tooltip title="Voir le site">
            <IconButton href="/" target="_blank" rel="noopener noreferrer" color="inherit">
                <OpenInNewIcon />
            </IconButton>
        </Tooltip>
    </AppBar>
);

export const AdminLayout = (props) => <Layout {...props} appBar={AdminAppBar} />;
