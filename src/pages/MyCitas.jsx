import { Card, CardActions, Button, CardContent, Container, Grid, CardHeader, Avatar, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { nanoid } from 'nanoid';
import React from 'react'

const MyCitas = () => {
	const datos = JSON.parse(localStorage.getItem('CITAS'))
	const mostrar = () =>{
		console.log(datos.length)

	}
	return (
		<main>
			<section>
				<Container>
					<Grid container
						margin="3rem 2rem"
						gap="2rem">
						{
							datos.map(dato => {
								return (
									<Card sx={{ minWidth: 275, maxWidth: 345 }} key={nanoid()}>
										<CardHeader
											avatar={
												<Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
													J
												</Avatar>
											}
											title={`Doctor: ${dato.doctor}`}
											subheader={dato.date}
										/>
										<CardContent>
											<h4>{dato.petName}</h4>
											<Typography variant="body2" color="text.secondary">
												<b>Sintomas: </b>
												{dato.symptom}
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small">Ver cita</Button>
											<Button size="small">Eliminar cita</Button>
										</CardActions>
									</Card>
								)
							})
						}
					</Grid>
				</Container>
			</section>
			<button onClick={mostrar}> Mostrar </button>

		</main>
	)
}

export default MyCitas