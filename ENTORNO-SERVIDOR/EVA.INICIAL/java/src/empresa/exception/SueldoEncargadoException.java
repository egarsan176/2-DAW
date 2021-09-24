package empresa.exception;

public class SueldoEncargadoException extends Exception {

	public SueldoEncargadoException(){
		super("El sueldo de un jefe no puede ser inferior a 1200€.");
	}
}
