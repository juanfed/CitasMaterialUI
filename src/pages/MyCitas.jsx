import { Card, CardActions, Button, CardContent, Container, Grid, CardHeader, Avatar, Typography, Dialog, DialogContent, DialogContentText, DialogActions } from '@mui/material';
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

	const eliminar = async (dat) => {
		const options = {
			method: 'DELETE',
			url: `http://localhost:8080/eliminar-cita?id_cita=${parseInt(dat)}`,
		};

		await axios.request(options).then(function (response) {
			// console.log(response.data);
			alert("La cita ha sido borrada");
		}).catch(function (error) {
			console.error(error);
			alert("Error al eliminar la cita");
		});
	}


	// para lo de ver las citas de manera más detallada
	const [open, setOpen] = React.useState(false);
	const [detalles, setDetalles] = useState([])

	const handleClickOpen = (dato) => {
		setOpen(true);
		setDetalles(dato)
		console.log(dato)
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
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
											<Button size="small" onClick={(() => handleClickOpen(dato))}>Ver cita</Button>
											<Button size="small" onClick={(() => eliminar(dato.id_cita))} >Eliminar cita</Button>
										</CardActions>
									</Card>
								)
							})
						}
					</Grid>
				</Container>
			</section>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						<h2>Detalles</h2>
						<p><b>Cita creada por:</b> {detalles.nombre_usuario} {detalles.nombre_apellidos}</p>
						<p><b>Fecha cita:</b> {moment.utc(detalles.fecha_cita).format('MM/DD/YYYY')}</p>
						<p><b>Hora cita:</b> {detalles.fecha_cita}</p>
						<p><b>Nombre mascota:</b> {detalles.nombre_mascota}</p>
						<p><b>Tipo :</b> {detalles.tipo_mascota}</p>
						<p><b>Doctor :</b> {detalles.nombre_doctor} {detalles.apellidos_doctor}</p>
						<p><b>Sintomas :</b> {detalles.sintomas}</p>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cerrar</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default MyCitas