package empresa.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Seccion {
	
	private String nombre;
	private Set<AEmpleado>plantilla;	//voy a utilizar un HashSet para que no pueda haber valores repetidos (dos personas iguales en la plantilla)

	public Seccion(String nombre) {
		this.nombre = nombre;
		this.plantilla = new HashSet<AEmpleado>();
	}
	
	/**
	 * Añade a la plantilla un Encargado
	 * @param empleado
	 * @return true si el empleado ha sido añadido, false en caso contrario
	 */
	public boolean addEncargado(AEmpleado empleado) {
		boolean isAdd = false;
		int contador = 0;
		
		//para comprobar que solo haya un encargado en la plantilla
		for(AEmpleado emple:plantilla) {
			if (emple instanceof Encargado) {
				contador++;
			}
			
		}
		
		if(empleado instanceof Encargado && !plantilla.contains(empleado) 
				&& contador==0) { 
			plantilla.add(empleado);
			isAdd = true;
		}
		
		return isAdd;
		
	}
	
	/**
	 * Añade a la plantilla empleados que sean Operarios
	 * @param empleado
	 * @return true si el empleado ha sido añadido, false en caso contrario
	 */
	public boolean addOficial(AEmpleado empleado) {
		boolean isAdd = false;
		
		if(empleado instanceof Oficial && !plantilla.contains(empleado)) {
			plantilla.add(empleado);
			isAdd = true;
		}
		
		return isAdd;
	}
	
	/**
	 * Recorre la plantilla y va sumando el sueldo de cada empleado
	 * @return Un string con el sueldo total de la plantilla
	 */
	public String obtenerSueldoPlantilla() {
		double sueldoTotal = 0;
		
		for(AEmpleado empleado:plantilla) {
			sueldoTotal += empleado.sueldo;
		}
				
		return "El sueldo total de la plantilla asciende a "+sueldoTotal+" €.";
	}

	/**
	 * Muestra los miembros de la plantilla ordenados alfabéticamente
	 */
	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder("Sección: "+nombre+ "\nCompuesta por: \n");
		
		List<AEmpleado> nueva = new ArrayList<AEmpleado>(plantilla);	//transformo el set en un array para poder ordenarlo
		
		Collections.sort(nueva);
		
		for (AEmpleado emple:nueva) {
			sb.append("\t> "+emple+"\n");
		}
		
		return sb.toString();
	}
	
	/**
	 * muestra los miembros de la plantillas ordenados de mayor sueldo a menor
	 * @return string con el listado ordenado por sueldo
	 */
	public String ordenarPorSueldo() {
		
		StringBuilder sb = new StringBuilder("Sección: "+nombre+ "\nCompuesta por: \n");
		
		List<AEmpleado> nueva = new ArrayList<AEmpleado>(plantilla);
		
		Collections.sort(nueva, new OrdenaSueldo());
		
		for (AEmpleado emple:nueva) {
			sb.append("\t> "+emple+"\n");
		}
		
		return sb.toString();
		
	}



	
	
	
	
	

}
