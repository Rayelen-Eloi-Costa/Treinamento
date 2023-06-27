package secao06;

import java.util.Scanner;

public class Exercicio01 {

	public static void main(String[] args) {
		
		// Variaveis
		int n;
		Scanner teclado = new Scanner(System.in);
		
		
		// Entradas
		System.out.print("Informe um Número: ");
		n = teclado.nextInt();
		

		// Processamento
		if (n > 100) {
			System.out.println(n);
		} else {
			n = 0;
			System.out.println(n);
		}
		
		
		teclado.close();
	}

}
