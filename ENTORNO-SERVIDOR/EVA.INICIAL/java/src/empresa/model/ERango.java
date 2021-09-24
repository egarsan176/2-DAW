package empresa.model;

public enum ERango {
	
	PRIMERA(1200), SEGUNDA(1000), TERCERA(800);
	
	private double sueldo;
	
	ERango(double sueldo){
		this.sueldo = sueldo;
	}
	
	public double getSueldo() {
		return sueldo;
	}
	

}
