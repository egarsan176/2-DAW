package empresa;

import java.util.Scanner;

import empresa.exception.CargoException;
import empresa.exception.DniException;
import empresa.model.ERango;
import empresa.model.Encargado;
import empresa.model.Oficial;
import empresa.model.Seccion;

public class Principal {
	
	public static Scanner teclado = new Scanner(System.in);

	public static void main(String[] args) {
		
		int opcion;
		Seccion sec = new Seccion("Albañilería");
		
		do {
			mostrarMenu();
			opcion= leerEntero("Introduzca la opción deseada: ");
			switch (opcion) {
			case 1:{
				
				String dni = leerCadena("Introduzca dni: ");
				String nombre = leerCadena("Introduzca el nombre: ");
				String cargo = leerCadena("Introduzca el rango que ocupa: (Los posibles valores son PRIMERA, SEGUNDA, TERCERA)").toUpperCase();
				ERango puesto = null;
				
				try {
					if(cargo.equals(ERango.PRIMERA.toString()) || cargo.equals(ERango.SEGUNDA.toString()) 
							|| cargo.equals(ERango.TERCERA.toString())) {
						puesto = ERango.valueOf(cargo);	
					}else {
						throw new CargoException();
					}
				
				Oficial oficial = new Oficial(dni, nombre, puesto);
				System.out.println(sec.addOficial(oficial)+"\n");
				
				} catch (DniException | CargoException e) {
					System.out.println(e.getMessage()+"\n");
				}
				
				
			}
				break;
				
			case 2:
				
				String dniE = leerCadena("Introduzca dni: ");
				String nombreE = leerCadena("Introduzca el nombre: ");
				int antE = leerEntero("Introduzca su antigüedad en la empresa: ");
				double sueldoE = leerReal("Introduzca el sueldo: ");
				
				try {
					Encargado en = new Encargado(dniE, nombreE, sueldoE, antE);
					System.out.println(sec.addEncargado(en)+"\n");
					
				}catch (Exception e) {
					System.out.println(e.getMessage()+"\n");
				}
				break;
			case 3:
				System.out.println(sec.obtenerSueldoPlantilla()+"\n");
				break;
			case 4:
				System.out.println(sec.toString()+"\n");
				break;
			case 5:
				System.out.println(sec.ordenarPorSueldo()+"\n");
			case 6:
				System.out.println("Saliendo...");
				break;

			default:
				System.out.println("Opción no válida\n");
				break;
			}
		}while (opcion!=6);
	}
		
	
	public static void mostrarMenu() {
		System.out.println("1.- Añadir Oficial\n"+
							"2.- Añadir Encargado\n"+
							"3.- Obtener sueldo total de la plantilla\n"+
							"4.- Mostrar sección ordenada por nombre\n"+
							"5.- Mostrar sección ordenada por salario\n"+
							"6.- Salir\n");
	}
	
	public static int leerEntero(String msg) {
		System.out.println(msg);
		return Integer.parseInt(teclado.nextLine());
	}
	
	public static String leerCadena(String msg) {
		System.out.println(msg);
		return teclado.nextLine();
	}
	
	public static double leerReal(String msg) {
		System.out.println(msg);
		return Double.parseDouble(teclado.nextLine());

	}

}
