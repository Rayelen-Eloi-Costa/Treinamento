package secao02;

import java.util.Scanner;

public class Exercicio02 {

	public static void main(String[] args) {
		
		// Variaveis
		int num1, num2, soma, mult;
		Scanner teclado = new Scanner(System.in);
		
		
		// Entradas
		System.out.print("Informe o Primeiro Número: ");
		num1 = teclado.nextInt();
		
		System.out.print("Informe o Segundo Número: ");
		num2 = teclado.nextInt();
		
		// Processamento
		soma = num1 + num2;
		mult = num1 * num2;
		
		// Saida
		System.out.println("O resultado da Soma é " + soma);
		System.out.println("O resultado da Multiplicação é " + mult);
		
		teclado.close();

	}

}
