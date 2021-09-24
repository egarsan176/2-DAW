package empresa.model;

import java.util.Comparator;

public class OrdenaSueldo implements Comparator<AEmpleado>{

	@Override
	public int compare(AEmpleado o1, AEmpleado o2) {
		
		int aux;
		
		if(o1.sueldo < o2.sueldo) {
			aux = 1;
		}else if(o1.sueldo > o2.sueldo) {
			aux = -1;
		}else {	//por si tienen el mismo sueldo que lo ordene por nombre
			aux = o1.nombre.compareToIgnoreCase(o2.nombre);
		}
		
		return aux;
	}

}
