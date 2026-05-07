import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, TextField, Button, Box, Alert } from "@mui/material";

const apiUrl = import.meta.env.VITE_API_URL;

export const AdminForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await fetch(`${apiUrl}/auth/forgot-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });
        setSubmitted(true);
        setLoading(false);
    };

    return (
        <Box display="flex" flexDirection="column" minHeight="100vh" alignItems="center" justifyContent="center"
            sx={{ background: "radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)" }}>
            <Card sx={{ minWidth: 300, maxWidth: 400, width: "100%" }}>
                <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" mb={2}>Mot de passe oublié</Typography>
                    {submitted ? (
                        <Alert severity="success">
                            Si cet email existe, un lien de réinitialisation vous a été envoyé.
                        </Alert>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                fullWidth
                                size="small"
                                sx={{ mb: 2 }}
                            />
                            <Button type="submit" variant="contained" fullWidth disabled={loading}>
                                {loading ? "Envoi..." : "Envoyer le lien"}
                            </Button>
                        </form>
                    )}
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
