package secao03;

import java.util.Scanner;

public class Exercicio05 {

	public static void main(String[] args) {
		
		// Variaveis
		int metros,centimetros;
		Scanner teclado = new Scanner(System.in);
		
		
		// Entradas
		System.out.print("Informe o Valor em Metros: ");
		metros = teclado.nextInt();
		
		
		// Processamento
		centimetros = (metros * 100);
		
		// Saida
		System.out.println(metros + " Metros em Centimetros é " + centimetros + "cm.");
		
		teclado.close();		

	}

}
