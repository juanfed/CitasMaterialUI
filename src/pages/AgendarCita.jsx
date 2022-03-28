import React, { useState } from 'react';
import { Button, Grid, FormGroup, InputLabel, Input, Select, FormControl, TextareaAutosize } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

import SendIcon from '@mui/icons-material/Send';

const AgendarCita = () => {

	const sendDate = (e) => {
		e.preventDefault();
		e.target.reset();
	}

	const [data, setData] = useState({
		name: '',
		lastName: '',
		id: '',
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
	return (
		<main>
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
									<InputLabel htmlFor='name'>Nombre: </InputLabel>
									<Input id='name' type='text' name='name' onChange={actualizar} placeholder='Ingrese su nombre' />
									<br />
									<InputLabel htmlFor='lastName'>Apellido: </InputLabel>
									<Input id='lastName' type='text' name='lastName' onChange={actualizar} placeholder='Ingrese su apellido' />
									<br />
									<InputLabel htmlFor='id'>Cedula: </InputLabel>
									<Input id='id' type='number' name='id' onChange={actualizar} />
									<br />
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
									<InputLabel htmlFor='typePet'>Tipo de mascota</InputLabel>
									<Input id='petName' type='text' name="typePet" onChange={actualizar} placeholder='Tipo de mascota' />
									<br />
									<FormControl>
										<InputLabel htmlFor='doctor'>Doctor</InputLabel>
										<Select id='doctor' label="doctor" name='doctor' onChange={actualizar} value=''>
											<MenuItem value={"Karen Ortiz"} name='doctor'>Karen Ortiz</MenuItem>
											<MenuItem value={"Jaun Camilo"} name='doctor'>Juan Camilo</MenuItem>
											<MenuItem value={"Alexandra Rodriguez"} name='doctor'>Alexandra Rodriguez</MenuItem>
										</Select>
									</FormControl>
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
									<Button variant="contained" color="success" type="submit" endIcon={<SendIcon />}>
										Agendar
									</Button>
								</FormGroup>
							</form>
						</Grid>
					</Grid>
				</Box>
			</section>
		</main>
	)
}

export default AgendarCita