import React,{useState,useEffect} from "react";

const h2Style = {
	textAlign:"center",
	fontSize:60
}

const trafficTopStyle = {
	margin:"auto",
	width: 50,
	height:150,
	background:"black"
}

const containerStyle = {
	margin:"auto",
	width:150,
	height:450,
	background:"black"
}

const redLightStyle = {
	width:150,
	height:150,
	borderRadius: 100,
	background:"red"
}
const yellowLightStyle = {
	width:150,
	height:150,
	borderRadius: 100,
	background:"yellow"
}
const greenLightStyle = {
	width:150,
	height:150,
	borderRadius: 100,
	background:"green"
}

const buttonStyle = {
	marginTop:15,
	backgroundColor: "#008CBA",
  	border: "1 solid black",
  	color: "white",
  	textDecoration: "none",
  	fontSize: 20
}

const buttonNuevoStyle = {
	width:150,
	marginTop:15,
	backgroundColor: "purple",
  	border: "1 solid black",
  	color: "white",
  	textDecoration: "none",
  	fontSize: 20
}


//create your first component
const TrafficLight = () => {
	const [light, setLight] = useState("");

	//condicionales para representar las luces del semáforo
	if(light=="rojo"){
		document.getElementById('rojo').style.background = 'red';
		document.getElementById('amarillo').style.background = 'grey';
		document.getElementById('verde').style.background = 'grey';
		document.getElementById('variable').style.color = 'red';
	}
	if(light == "amarillo"){
		document.getElementById('rojo').style.background = 'grey';
		document.getElementById('amarillo').style.background = 'yellow';
		document.getElementById('verde').style.background = 'grey';
		document.getElementById('variable').style.color = 'yellow';
	}
	if(light == "verde"){
		document.getElementById('rojo').style.background = 'grey';
		document.getElementById('amarillo').style.background = 'grey';
		document.getElementById('verde').style.background = 'green';
		document.getElementById('variable').style.color = 'green';
	}
	
	//funcion de boton para cambiar de color
	const cambiaColor = () =>{
		if(light == ""){
			setLight("rojo");
		}else if(light == "rojo"){
			setLight("amarillo");
		}else if (light == "amarillo"){
			setLight("verde");
		}else(setLight("rojo"))
	}

	//funcion de boton para crear el color purpura
	const colorNuevo = () =>{
		document.getElementById('rojo').style.background = 'purple';
		document.getElementById('amarillo').style.background = 'purple';
		document.getElementById('verde').style.background = 'purple';
		document.getElementById('variable').style.color = 'purple';
		setLight("púrpura");
	}
	

	return (
		<div>
			<h2 style={h2Style}>El semáforo está en <span id="variable">{light}</span></h2>
			<div id="trafficTop" style={trafficTopStyle}></div>
			<div id="container" style ={containerStyle}>
				<div id ="rojo" className="redLight" onClick={()=>setLight("rojo")} style={redLightStyle}></div>
				<div id="amarillo"className="yellowLight"onClick={()=>setLight("amarillo")} style={yellowLightStyle}></div>
				<div id ="verde" className="greenLight"onClick={()=>setLight("verde")} style ={greenLightStyle}></div>
				<button onClick={cambiaColor} style={buttonStyle}>Cambia de Color</button>
				<button onClick={colorNuevo} style={buttonNuevoStyle}>Color nuevo</button>
			</div>
		</div>
	);
};

export default TrafficLight;
