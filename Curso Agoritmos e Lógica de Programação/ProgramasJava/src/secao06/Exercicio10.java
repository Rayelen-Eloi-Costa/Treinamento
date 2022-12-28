package secao06;

import java.util.Scanner;

public class Exercicio10 {

	public static void main(String[] args) {
		// Variaveis
		int idade;
		Scanner teclado = new Scanner(System.in);
		
		
		// Entradas
		System.out.print("Informe sua Idade: ");
		idade = teclado.nextInt();
		
		
		// Processamento
		if (idade >= 5 && idade <= 7) {
			System.out.print("Infantil A");
		}
		else if (idade >= 8 && idade <= 11) {
			System.out.print("Infantil B");
		}
		else if (idade >= 12 && idade <= 13) {
			System.out.print("Juvenil A");
		}
		else if (idade >= 14 && idade <= 17) {
			System.out.print("Juvenil B");
		}
		else if (idade > 18) {
			System.out.print("Adulto");
		}
				
		teclado.close();

	}

}
