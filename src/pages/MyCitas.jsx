import { Card, CardActions, Button, CardContent, Container, Grid, CardHeader, Avatar, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'; // para las fechas que me llean en formato de la ISO 8601

const MyCitas = () => {
	const [datos, setDatos] = useState([]);

	useEffect(() => {
		const options = { 
			method: 'GET', 
			url: `http://localhost:8080/consultar-citas?id_usuario=${parseInt(localStorage.getItem('ID'))}`,
			headers: { 'Content-Type': 'application/json' },
		};
		axios.request(options).then(function (response) {
			setDatos(response.data.consulta);
		}).catch(function (error) {
			console.error(error);
		});
	}, []);

	const eliminar = async (dat) =>{
		const options = {
      method: 'DELETE',
      url: `http://localhost:8080/eliminar-cita?id_cita=${parseInt(dat)}`,
    };
    
    await axios.request(options).then(function (response) {
      console.log(response.data);
      alert("La cita ha sido borrada");
    }).catch(function (error) {
      console.error(error);
      alert("Error al eliminar la cita");
    });
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
											title={`Doctor: ${dato.nombre_doctor} ${dato.apellidos_doctor}`}
											subheader={`Fecha: ${moment.utc(dato.fecha_cita).format('MM/DD/YYYY')}`}
										/>
										<CardContent>
											<p><b>Mascota:</b> {dato.nombre_mascota}</p>
											<Typography variant="body2" color="text.secondary">
												<b>Sintomas: </b>
												{dato.sintomas}
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small">Ver cita</Button>
											<Button size="small" onClick={(()=>eliminar(dato.id_cita))} >Eliminar cita</Button>
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