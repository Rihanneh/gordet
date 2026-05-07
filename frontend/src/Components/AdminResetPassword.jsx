import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Card, CardContent, Typography, TextField, Button, Box, Alert } from "@mui/material";

const apiUrl = import.meta.env.VITE_API_URL;

export const AdminResetPassword = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password.length < 8) {
            setError("Le mot de passe doit contenir au moins 8 caractères.");
            return;
        }
        if (password !== confirm) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }
        setError("");
        setLoading(true);
        const res = await fetch(`${apiUrl}/auth/reset-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, password }),
        });
        setLoading(false);
        if (res.ok) {
            navigate("/admin/login");
        } else {
            const data = await res.json();
            setError(data.message || "Lien invalide ou expiré.");
        }
    };

    if (!token) {
        return (
            <Box display="flex" minHeight="100vh" alignItems="center" justifyContent="center">
                <Alert severity="error">Lien invalide.</Alert>
            </Box>
        );
    }

    return (
        <Box display="flex" flexDirection="column" minHeight="100vh" alignItems="center" justifyContent="center"
            sx={{ background: "radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)" }}>
            <Card sx={{ minWidth: 300, maxWidth: 400, width: "100%" }}>
                <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" mb={2}>Nouveau mot de passe</Typography>
                    {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Nouveau mot de passe"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            fullWidth
                            size="small"
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Confirmer le mot de passe"
                            type="password"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            required
                            fullWidth
                            size="small"
                            sx={{ mb: 2 }}
                        />
                        <Button type="submit" variant="contained" fullWidth disabled={loading}>
                            {loading ? "Mise à jour..." : "Réinitialiser"}
                        </Button>
                    </form>
                    <Box mt={2} textAlign="center">
                        <Link to="/admin/login" style={{ fontSize: 14 }}>
                            Retour à la connexion
                        </Link>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};
