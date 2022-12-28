package secao03;

import java.util.Scanner;

public class Exercicio03 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// Variavel
		int quantidade_minima = 0, quantidade_maxima;
		float estoque_medio;
		Scanner teclado = new Scanner(System.in);
		
		
		
		System.out.print("Informe a Quantidade Máxima: ");
		quantidade_maxima = teclado.nextInt();
		
		// Processamento
		estoque_medio = (quantidade_minima + quantidade_maxima) / 2;
		
		// Saida
		System.out.println("O Estoque Médio é " + estoque_medio);
		
		teclado.close();
		
	}

}
