import { Typography, Box, TextField, Button } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import { FormEvent } from "react";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();
  async function onSubmit(event: FormEvent) {
    event.preventDefault();

    const token = (document.querySelector("#token") as HTMLInputElement).value;

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/login`, { token });
      router.push("/orders");
    } catch (e) {
      console.error(e);
      alert("Login deu zebra!!");
    }
  }

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
        <TextField
          id="token"
          margin="normal"
          required
          fullWidth
          label="Token da conta"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;

//proteger as páginas orders e orders/:id

//sessao

// load balancer | várias instancias

// session stateless
