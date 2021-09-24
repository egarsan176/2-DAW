package empresa.exception;

public class CargoException extends Exception {

public CargoException() {
	super("Error Rango.\nRecuerde que los posibles valores son:\nPRIMERA, SEGUNDA, TERCERA\n");
}

}
