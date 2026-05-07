import { Login, LoginForm } from "react-admin";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import logoDark from "../../assets/logo_sm.png";
import logoLight from "../../assets/logo_sm_white.png";

export const AdminLoginPage = () => {
    const theme = useTheme();
    const logo = theme.palette.mode === "dark" ? logoLight : logoDark;

    return (
        <Login sx={{ '& .RaLogin-avatar': { display: 'none' } }}>
            <div style={{ display: "flex", justifyContent: "center", padding: "24px 0 8px" }}>
                <img src={logo} alt="Gordet" style={{ height: 72 }} />
            </div>
            <LoginForm />
            <Box textAlign="center" pb={2}>
                <Link to="/admin/forgot-password" style={{ fontSize: 13 }}>
                    Mot de passe oublié ?
                </Link>
            </Box>
        </Login>
    );
};
