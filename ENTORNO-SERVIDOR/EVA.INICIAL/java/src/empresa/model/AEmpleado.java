package empresa.model;

import empresa.exception.DniException;

public abstract class AEmpleado implements Comparable<AEmpleado>, IActualizarSueldo{	//he creado la clase abstracta porque no voy a instanciar empleados, sino jefes y operarios
	
	
	protected String nombre;
	private String dni;
	protected double sueldo;
	

	public AEmpleado(String dni, String nombre) throws DniException{
		super();
		if(isDniValido(dni)) {
			this.dni = dni;
		}else {
			throw new DniException();
		}
		this.nombre = nombre;
		this.sueldo = sueldo;
	}
	
	
	/**
	 * Comprueba el formato del DNI (longitud y letra)
	 * @param dni
	 * @return true si el DNI es válido, false si no lo es
	 */
	public boolean isDniValido(String dni) {
		
		boolean isValid = false;
		int contador = 0;
		
		for(int i =0; i<dni.length(); i++) {
			
			if(Character.isAlphabetic(dni.charAt(i))) {
				contador++;
			}
		}
		
		if(dni.length()==9 && contador == 1) {
			isValid = true;
		}
		
		return isValid;
	}



	@Override
	public String toString() {
		return "Empleado con DNI: " + dni + ", nombre: " + nombre +".";
	}


	/**
	 * implementa la interfaz Comparable y usa el compareTo para ordenar los nombres alfabeticamente
	 */
	@Override
	public int compareTo(AEmpleado emple) {
		
		return this.nombre.compareTo(emple.nombre);
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((dni == null) ? 0 : dni.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AEmpleado other = (AEmpleado) obj;
		if (dni == null) {
			if (other.dni != null)
				return false;
		} else if (!dni.equals(other.dni))
			return false;
		return true;
	}

	
	
	



	

}


