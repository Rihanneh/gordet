import { Login, LoginForm } from "react-admin";
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
        </Login>
    );
};
