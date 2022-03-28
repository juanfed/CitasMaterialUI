import { Card, CardActions, Button, CardContent, Container, Grid, CardHeader, Avatar, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import React, { useState } from 'react'

const MyCitas = () => {
	const [citas, setCitas] = useState([
		{
			id: 1,
			name: 'Juan Fernando',
			lastName: "Gutierrez",
			petName: 'Pachito',
			date: '09/04/2022',
			doctor: 'Alexandra Rodriguez',
			sympton: 'Inflamacion y resequedad en la piel'
		},

		{
			id: 2,
			name: 'Karla',
			lastName: "Perez",
			petName: 'Sasi',
			date: '12/03/2022',
			doctor: 'Jesica Montoya',
			sympton: 'Secreciones acuosas similares al pus en sus ojos. Posteriormente ha presentado  fiebre, secreciones nasales, tos, letargo, falta de apetito y vómitos. '
		},
		{
			id: 3,
			name: 'Santiago',
			lastName: "Zapata",
			petName: 'Tomas',
			date: '12/01/2022',
			doctor: 'Jesica Montoya',
			sympton: 'Secreciones acuosas similares al pus en sus ojos. Posteriormente ha presentado  fiebre, secreciones nasales, tos, letargo, falta de apetito y vómitos. '
		},
		{
			id: 4,
			name: 'Juan Fernando',
			lastName: "Gutierrez",
			petName: 'Pachito',
			date: '09/04/2022',
			doctor: 'Alexandra Rodriguez',
			sympton: 'Inflamacion y resequedad en la piel'
		},
		{
			id: 5,
			name: 'Juan Fernando',
			lastName: "Gutierrez",
			petName: 'Pachito',
			date: '09/04/2022',
			doctor: 'Alexandra Rodriguez',
			sympton: 'Inflamacion y resequedad en la piel'
		},

		{
			id: 6,
			name: 'Karla',
			lastName: "Perez",
			petName: 'Sasi',
			date: '12/03/2022',
			doctor: 'Jesica Montoya',
			sympton: 'Secreciones acuosas similares al pus en sus ojos. Posteriormente ha presentado  fiebre, secreciones nasales, tos, letargo, falta de apetito y vómitos. '
		},
		{
			id: 7,
			name: 'Santiago',
			lastName: "Zapata",
			petName: 'Tomas',
			date: '12/01/2022',
			doctor: 'Jesica Montoya',
			sympton: 'Secreciones acuosas similares al pus en sus ojos. Posteriormente ha presentado  fiebre, secreciones nasales, tos, letargo, falta de apetito y vómitos. '
		},
		{
			id: 8,
			name: 'Juan Fernando',
			lastName: "Gutierrez",
			petName: 'Pachito',
			date: '09/04/2022',
			doctor: 'Alexandra Rodriguez',
			sympton: 'Inflamacion y resequedad en la piel'
		},
	])
	return (
		<main>
			<section>
				<Container>
					<Grid container
						margin="3rem 2rem"
						gap="2rem">
						{
							citas.map(cita => {
								return (
									<Card sx={{ minWidth: 275, maxWidth: 345 }} key={cita.id}>
										<CardHeader
											avatar={
												<Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
													J
												</Avatar>
											}
											title={`Doctor: ${cita.doctor}`}
											subheader={cita.date}
										/>
										<CardContent>
											<h4>{cita.petName}</h4>
											<Typography variant="body2" color="text.secondary">
												<b>Sintomas: </b>
												{cita.sympton}
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

		</main>
	)
}

export default MyCitas