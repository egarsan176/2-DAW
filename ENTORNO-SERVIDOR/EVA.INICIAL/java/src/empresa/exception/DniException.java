package empresa.exception;

public class DniException extends Exception {
	
	public DniException() {
		super("El formato de DNI introducido no es correcto.");
	}

}
