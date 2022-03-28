import { Card, CardActions, Button, CardContent } from '@mui/material'
import React from 'react'

const MyCitas = () => {
    return (
        <main>
            <h2>Mis citas</h2>
            <section>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <h3>Nombre</h3>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Ver cita</Button>
                        <Button size="small">Eliminar cita</Button>
                    </CardActions>
                </Card>
            </section>

        </main>
    )
}

export default MyCitas