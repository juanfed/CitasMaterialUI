import React, { useState } from 'react'
import Footer from '../components/Footer'
import imgRegister from '../images/fondo.jpg'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FormGroup, Input, InputLabel } from '@mui/material';

import { useNavigate } from "react-router-dom"
import axios from 'axios';


const Register = () => {
	useNavigate();
	const navigate = useNavigate();

	const [login, setLogin] = useState(false);
	const [register, setRegister] = useState(false)
	const [dataLogin, setDataLogin] = useState({
		cc: '',
		password: ''
	})

	const [dataRegister, setDataRegister] = useState({
		cc: '',
		nombre: '',
		apellidos: '',
		telefono: '',
		correo: '',
		password: ''
	})

	const ingreso = (e) => {
		setDataLogin({ ...dataLogin, [e.target.name]: e.target.value })
	}

	const registerUser = (e) => {
		setDataRegister({ ...dataRegister, [e.target.name]: e.target.value })
	}

	const registrar = async () => {
		const options = {
			method: 'POST',
			url: 'http://localhost:8080/registrar-usuario',
			headers: { 'Content-Type': 'application/json' },
			data: {
				cc: dataRegister.cc,
				nombre: dataRegister.nombre,
				apellidos: dataRegister.apellidos,
				telefono: dataRegister.telefono,
				correo: dataRegister.correo,
				password: dataRegister.password
			}
		};

		await axios.request(options).then(function (response) {
			console.log(response.data);
			alert("Usuario creado con exito, por favor intente ingresar ahora con su numero de documento y contraseña"); // lo puse como un mensaje emergente :v
			closeRegister()
		}).catch(function (error) {
			console.error(error);
			alert("Error al crear un nuevo usuario");
		});
	}


	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		bgcolor: 'background.paper',
		border: '1px solid #000',
		boxShadow: 24,
		pt: 6,
		px: 0,
		pb: 5,
	};

	const openLogin = () => {
		setLogin(true);
	};
	const closeLogin = () => {
		setLogin(false);
	};

	const ingresar = async () => {
		// donde se manda la solicitud para confirmar el ingreso
		const options = {
			method: 'POST',
			url: 'http://localhost:8080/login',
			headers: { 'Content-Type': 'application/json' },
			data: {
				cc: dataLogin.cc,
				password: dataLogin.password
			}
		};

		await axios.request(options).then(function (response) {
			console.log(response.data.id_usuario);
			localStorage.setItem("ID", response.data.id_usuario)
			alert("Ingreso exitoso"); // lo puse como un mensaje emergente :v
			navigate('/Home');        // se redirige a la siguente ruta despues de ingresar
		}).catch(function (error) {
			console.error(error);
			alert("Ingreso fallido");
		});
	}

	const openRegister = () => {
		setRegister(true);
	};
	const closeRegister = () => {
		setRegister(false);
	};


	return (
		<div>
			<header>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="static">
						<Toolbar>
							<Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
								Clinica my pets
							</Typography>
							<Button color="inherit" onClick={openLogin}>Login</Button>
							<Button color="inherit" onClick={openRegister}>Register</Button>
						</Toolbar>
					</AppBar>
				</Box>
			</header>
			<main>
				<figure style={{ width: "100%", height: "100%" }}>
					<img src={imgRegister} alt="Imagen perros" loading='lazy'
						style={{ width: "100%", height: "100%", backgroundSize: "cover", backgroundPosition: "center center" }} />
				</figure>
			</main>
			<Footer />
			<Modal
				hideBackdrop
				open={login}
				onClose={closeLogin}
			>
				<Box sx={{ ...style, width: "40vw" }}>
					<form action="" style={{ display: "flex", flexDirection: "column", gap: "3rem", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
						<div>
							<label htmlFor="cc">Documento: </label>
							<input type="number" id="cc" placeholder='Numero documento' name="cc" onChange={ingreso} style={{ fontSize: "1.3rem" }} />
						</div>
						<div>
							<label htmlFor="password">Password: </label>
							<input type="password" id='password' placeholder='Contraseña usuario' name="password" onChange={ingreso} style={{ fontSize: "1.3rem" }} />
						</div>
						<div>
							<Button onClick={ingresar}>Ingresar</Button>
							<Button onClick={closeLogin}>Cancelar</Button>
						</div>
					</form>

				</Box>
			</Modal>

			<Modal
				hideBackdrop
				open={register}
				onClose={closeRegister}
			>
				<Box sx={{ ...style, width: "40vw" }}>
					<form action="" style={{ display: "flex", flexDirection: "column", gap: "3rem", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
						<FormGroup >
							<InputLabel htmlFor='cc'>Documento: </InputLabel>
							<Input id='cc' type='number' name='cc' placeholder='Numero de documento' onChange={registerUser} />
							<br />
							<InputLabel htmlFor='nombre'>Nombre: </InputLabel>
							<Input id='nombre' type='text' name='nombre' placeholder='Ingrese su nombre' onChange={registerUser} />
							<br />
							<InputLabel htmlFor='id'>Apellido: </InputLabel>
							<Input id='apellidos' type='text' name='apellidos' placeholder='Ingrese su apellido' onChange={registerUser} />
							<br />
							<InputLabel htmlFor='telefono'>Telefono: </InputLabel>
							<Input id='telefono' type='number' name='telefono' onChange={registerUser} />
							<br />
							<InputLabel htmlFor='correo'>Correo: </InputLabel>
							<Input id='correo' type='email' name='correo' onChange={registerUser} />
							<br />
							<InputLabel htmlFor='password'>Contraseña: </InputLabel>
							<Input id='password' type='password' name="password" placeholder='Tipo de mascota' onChange={registerUser} />
							<br />
							<div>
								<Button onClick={registrar}>Registrar</Button>
								<Button onClick={closeRegister}>Cancelar</Button>
							</div>
						</FormGroup>
					</form>

				</Box>
			</Modal>
		</div>
	)
}

export default Register