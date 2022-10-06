import { AppBar, Button, TextField, Typography, Container, Toolbar, Link, Paper } from "@mui/material"
import { Box } from "@mui/system";
import { useEffect, useState } from "react";


import { Link as RouterLink } from 'react-router-dom'

const FormularioPrato = () => {

    const [nomePrato, setNomePrato] = useState('');

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

    }

    return (
        <>


            <Box>
                <Container maxWidth="lg" sx={{ mt: 1 }}>
                    <Paper sx={{ p: 2 }}>

                        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
                            <Typography component="h1" variant="h6">Formulário de Pratos</Typography>
                            <Box component="form" sx={{ width: '100%' }} onSubmit={aoSubmeterForm}>
                                <TextField value={nomePrato} onChange={evento => setNomePrato(evento.target.value)} label="Nome do Prato" variant="standard" fullWidth required />
                                <Button sx={{ marginTop: 1 }} type="submit" variant="outlined" fullWidth>Salvar</Button>
                            </Box>
                        </Box>

                    </Paper>
                </Container>
            </Box>


        </>
    )
}

export default FormularioPrato