package empresa.model;

import empresa.exception.DniException;
import empresa.exception.SueldoEncargadoException;

public class Encargado extends AEmpleado {
	
	private final int SUELDO_MINIMO = 1200;
	private int antiguedadEmpresa;
	

	public Encargado(String dni, String nombre, double sueldo, int antiguedad) throws DniException, SueldoEncargadoException {
		super(dni, nombre);
		this.antiguedadEmpresa = antiguedadEmpresa;
		
		if(sueldo<SUELDO_MINIMO) {
			throw new SueldoEncargadoException();
		}else {
			this.sueldo = sueldo;
		}
		
	}


	@Override
	public String toString() {
		
		return super.toString() + "\n\t Desempeña el puesto de Encargado. Tiene una antigüedad de: " + antiguedadEmpresa + " años en la empresa "
				+ "y su sueldo es " + sueldo + " euros.";
	}


	/**
	 * se utiliza la interfaz ActualizarSueldo para incrementar el salario del empleado
	 */
	@Override
	public void ActualizarSueldo() {
		double sueldoAnterior = sueldo;
		this.sueldo = sueldoAnterior * INCREMENTO_ENCARGADO;
		
	}


	
	
	

}
