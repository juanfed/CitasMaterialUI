import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, FormGroup, Grid, Input, InputLabel, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import { blue } from '@mui/material/colors';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Usuario = () => {
	const [mostrar, setMostrar] = useState(false);
	const [datos, setDatos] = useState([]);

	const [data, setData] = useState({
		cedula: '',
		nombre_usuario: '',
		apellidos_usuario: '',
		telefono: '',
		correo: '',
		password: ''
	})

	useEffect(() => {
		const options = {
			method: 'GET',
			url: `http://localhost:8080/consultar-usuario?id_usuario=${parseInt(localStorage.getItem('ID'))}`,
			headers: { 'Content-Type': 'application/json' },
		};
		axios.request(options).then(function (response) {
			setDatos(response.data.consulta[0]);
			console.log(datos)
		}).catch(function (error) {
			console.error(error);
		});
	}, []);

	// console.log(datos.nombre_usuario)

	const change = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const save = async () => {

		// confirmo los datos

		if(data.cedula === ''){
			data.cedula = datos.cedula
		};
		if (data.nombre_usuario === ''){
			data.nombre_usuario = datos.nombre_usuario
		};
		if (data.apellidos_usuario === ''){
			data.apellidos_usuario = datos.apellidos_usuario
		};
		if(data.telefono === ''){
			data.telefono = datos.telefono
		};
		if(data.correo === ''){
			data.correo = datos.correo
		};
		if(data.password === ''){
			alert("Ingrese su contraseña para validad los cambios")
		};


		const options = {
			method: 'PUT',
			url: 'http://localhost:8080/actualizar-usuario',
			headers: { 'Content-Type': 'application/json' },
			data: {
				cc: data.cedula,
				nombre: data.nombre_usuario,
				apellidos: data.apellidos_usuario,
				telefono: data.telefono,
				correo: data.telefono,
				password: data.password
			}
		};

		await axios.request(options).then(function (response) {
			alert("datos cambiados")
		}).catch(function (error) {
			console.error(error);
			alert("Error al guardar los cambios");
		});
	}


	const envio = (e) =>{
		e.preventDefault()
	}

	return (
		<div>
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

				{mostrar ?
					<Grid container maxWidth="sm" style={{ marginLeft: "4rem" }}>
						<Grid item md={8}>
							<form action="" onSubmit={envio}>
								<FormGroup >
									<InputLabel htmlFor='cc'>Numero Cedula: </InputLabel>
									<Input id='cc' type='number' name='cc' defaultValue={datos.cedula} onChange={change} />
									<br />
									<InputLabel htmlFor='nombre'>Nombre: </InputLabel>
									<Input id='nombre' type='text' name='nombre' defaultValue={datos.nombre_usuario} placeholder={datos.nombre_usuario} onChange={change} />
									<br />
									<InputLabel htmlFor='apellidos'>Apellido: </InputLabel>
									<Input id='apellidos' type='text' name='apellidos' defaultValue={datos.apellidos_usuario} placeholder={datos.apellidos_usuario} onChange={change}/>
									<br />
									<InputLabel htmlFor='telefono'>Telefono: </InputLabel>
									<Input id='telefono' type='number' name='telefono' defaultValue={datos.telefono} placeholder={datos.telefono} onChange={change} />
									<br />
									<InputLabel htmlFor='correo'>Email: </InputLabel>
									<Input id='correo' type='email' name='correo' defaultValue={datos.correo} placeholder={datos.correo} onChange={change}/>
									<br />
									<InputLabel htmlFor='password'>Contraseña: </InputLabel>
									<Input id='password' type='password' name='password'  placeholder='Ingrese su contraseña' onChange={change} required />
									<br />

									<br /><br />
									<br />
									<Button variant="contained" color="success" type="submit" endIcon={<SaveIcon />} onClick={save}>
										Guardar cambios
									</Button>
									<br />
									<Button variant="contained" color="warning" type="submit" endIcon={<CancelIcon />}>
										Cancelar
									</Button>
								</FormGroup>
							</form>
						</Grid>
					</Grid> :


					<Card sx={{ minWidth: 350, margin: "4rem 4rem 0rem 0rem", boxShadow: "3px 3px 10px 3px gray" }}>
						<CardHeader
							avatar={
								<Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
									J
								</Avatar>
							}
							title={`${datos.nombre_usuario} ${datos.apellidos_usuario}`}
						/>
						<CardContent>
							<Typography variant="body2" color="text.secondary">
								<p>Nombre: {datos.nombre_usuario}</p>
								<p>Apellido: {datos.apellidos_usuario}</p>
								<p>Telefono: {datos.telefono}</p>
								<p>Corrreo: {datos.correo}</p>
							</Typography>
						</CardContent>
						<CardActions style={{ width: "100%", textAlign: "center" }}>
							<Button variant="contained"
								color="success"
								type="submit"
								onClick={(() => { setMostrar(true) })}
								endIcon={<EditIcon />}>
								Editar
							</Button>
						</CardActions>
					</Card>}






			</Box>
		</div>
	)
}

export default Usuario