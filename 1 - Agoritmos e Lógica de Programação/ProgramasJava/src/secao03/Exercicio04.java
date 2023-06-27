package secao03;

import java.util.Scanner;

public class Exercicio04 {

	public static void main(String[] args) {
		
		// Variaveis
		int num1, num2, soma;
		Scanner teclado = new Scanner(System.in);
		
		
		// Entradas
		System.out.print("Informe o Primeiro Número: ");
		num1 = teclado.nextInt();
		
		System.out.print("Informe o Segundo Número: ");
		num2 = teclado.nextInt();
		
		// Processamento
		soma = num1 + num2;
		
		// Saida
		System.out.println("O resultado da Soma é " + soma);
		
		teclado.close();		

	}

}
