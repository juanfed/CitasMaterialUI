import React, { useState } from 'react';
import { Button, Grid, FormGroup, InputLabel, Input, Select, FormControl, TextareaAutosize } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

import SendIcon from '@mui/icons-material/Send';

const AgendarCita = () => {

	const sendDate = (e) => {
		e.preventDefault();
		e.target.reset();
	}

	const [data, setData] = useState({
		name: '',
		lastName: '',
		id: localStorage.getItem('ID'),  // para que siempre me agende la cita por el numero de id_usuario
		phone: '',
		email: '',
		petName: '',
		typePet: '',
		doctor: '',
		date: '',
		time: '',
		symptom: ''
	});

	const actualizar = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const agregarCita = async () => {

		const options = {
			method: 'POST',
			url: 'http://localhost:8080/agendar-cita',
			headers: { 'Content-Type': 'application/json' },
			data: {
				id_doctor: data.doctor,
				id_usuario: data.id,
				nombre_mascota: data.petName,
				id_tipo: data.typePet,
				sintomas: data.symptom,
				fecha: data.date,
				hora: data.time
			}
		};

		await axios.request(options).then(function (response) {
			console.log(response.data);
			// alert("Cita agendada con exito"); // lo puse como un mensaje emergente :v
		}).catch(function (error) {
			console.error(error);
		});
	}

	return (
		<div>
			<section>
				<Box
					width="100%"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					paddingTop="2rem"
					paddingLeft="4rem"
					paddingBottom="4rem"
				>
					<Grid container maxWidth="sm">
						<Grid item md={8}>
							<form action="" onSubmit={sendDate}>
								<FormGroup >
									<InputLabel htmlFor='phone'>Telefono: </InputLabel>
									<Input id='phone' type='number' name='phone' onChange={actualizar} />
									<br />
									<InputLabel htmlFor='email'>Email: </InputLabel>
									<Input id='email' type='email' name='email' onChange={actualizar} placeholder='Ingrese su correo electronico' />
									<br />
									<br />
									<InputLabel htmlFor='petName'>Nombre mascota</InputLabel>
									<Input id='petName' type='text' name="petName" onChange={actualizar} placeholder='Nombre de mascota' />
									<br />
									<FormControl>
										<InputLabel htmlFor='typePet'>Tipo mascota: </InputLabel>
										<Select id='typePet' label="Tipo mascota" name='typePet' onChange={actualizar}>
											<MenuItem value={1} name='typePet' placeholder='Perro'>Perro</MenuItem>
											<MenuItem value={2} name='typePet'>Gato</MenuItem>
										</Select>
									</FormControl>
									<br />
									<FormControl>
										<InputLabel htmlFor='doctor'>Doctor: </InputLabel>
										<Select id='doctor' label="Doctor:" name='doctor' onChange={actualizar}>
											<MenuItem value={1} name='doctor'>Cristian Ramirez</MenuItem>
											<MenuItem value={2} name='doctor'>David Parra</MenuItem>
											<MenuItem value={3} name='doctor'>brey Morales</MenuItem>
										</Select>
									</FormControl>
									<br />
									<InputLabel htmlFor='date'>Días disponibles: </InputLabel>
									<Input id='date' type='date' name='date' onChange={actualizar} />
									<br />
									<InputLabel htmlFor='hour'>Hora cita: </InputLabel>
									<Input id='hour' type='time' name='time' onChange={actualizar} />
									<br />
									<InputLabel htmlFor='symptom'>Sintomas</InputLabel>
									<TextareaAutosize
										aria-label="minimum height"
										minRows={5}
										maxRows={6}
										placeholder="Descricción de los sintomas"
										style={{ width: 200 }}
										name='symptom'
										onChange={actualizar}
									/>
									<br /><br />
									<Button variant="contained" color="success" type="submit" onClick={agregarCita} endIcon={<SendIcon />}>
										Agendar
									</Button>
								</FormGroup>
							</form>
						</Grid>
					</Grid>
				</Box>
			</section>
		</div>
	)
}

export default AgendarCita