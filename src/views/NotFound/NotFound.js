import { Container, Typography } from "@mui/material";
import React from "react";


function NotFound() {
    return(
        <Container>
            <Typography variant='h3' >
                Error 404
            </Typography>
            <Typography variant='h6' >
                Pagina no encontrada
            </Typography>
        </Container>
    )
}

export default NotFound;