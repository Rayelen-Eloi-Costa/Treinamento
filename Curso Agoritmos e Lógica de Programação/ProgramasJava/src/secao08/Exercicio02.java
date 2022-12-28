package secao08;

import java.util.Scanner;

public class Exercicio02 {

	public static void main(String[] args) {
		
		// Variaeis
		int[] vetor1 = new int[10];
		int[] vetor2 = new int[10];
		int[] soma = new int[10];
		Scanner teclado = new Scanner(System.in);
		
		
		// Processamento
		for (int i = 0; i < 10; i++) {
			System.out.println("Informe o valor para o Primeiro vetor: ");
			vetor1[i] = teclado.nextInt();
			System.out.println("Informe o valor para o Segundo vetor: ");
			vetor2[i] = teclado.nextInt();
			
			soma[i] = vetor1[i] + vetor2[i];
		}
		
		for (int i = 0; i < 10; i++) {
			System.out.println(soma[i]);
		}
		
		teclado.close();
		
	}

}
