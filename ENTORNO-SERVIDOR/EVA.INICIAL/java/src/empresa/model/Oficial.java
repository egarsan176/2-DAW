package empresa.model;

import empresa.exception.DniException;

public class Oficial extends AEmpleado {
	
	private ERango cargo;

	public Oficial(String dni, String nombre, ERango cargo) throws DniException {
		super(dni, nombre);
		this.cargo = cargo;
		obtenerSueldo();
	}
	
	/**
	 * Establece el sueldo del operario en función del cargo que desempeñe
	 */
	public void obtenerSueldo() {
		if(cargo.equals(ERango.PRIMERA)) {
			this.sueldo = ERango.PRIMERA.getSueldo();	
		}
		if(cargo.equals(ERango.SEGUNDA)){
			this.sueldo = ERango.SEGUNDA.getSueldo();
		}
		if(cargo.equals(ERango.TERCERA)) {
			this.sueldo = ERango.TERCERA.getSueldo();
		}
	}

	@Override
	public String toString() {
		
		return super.toString() + "\n\t Desempeña el puesto de Oficial de "+cargo+" y su sueldo es "+sueldo+" €.";
	}


	/**
	 * se utiliza la interfaz ActualizarSueldo para incrementar el salario del empleado
	 */
	@Override
	public void ActualizarSueldo() {
		double sueldoAnterior = sueldo;
		this.sueldo = sueldoAnterior * INCREMENTO_OFICIAL;
		
	}

	

	
	
	

}
