import java.util.Scanner;
 
public class GreetingByName {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int initPoints = Integer.parseInt(scanner.nextLine());
        boolean isBullseye = false;
        boolean isZeroPoints = false;
        boolean negativePoints = false;
        int counter = 0;
 
        while (true){
            if (initPoints == 0){
                isZeroPoints = true;
                break;
            }else if (initPoints < 0){
                negativePoints = true;
                break;
            }
            String typeRing = scanner.nextLine();
            counter++;
 
 
            if (typeRing.equals("bullseye")){
                isBullseye = true;
                break;
            }
 
            int currentPoint = Integer.parseInt(scanner.nextLine());
 
 
 
 
 
            switch (typeRing){
                case "number section":
                    initPoints = initPoints - currentPoint;
                    break;
                case "double ring" :
                    initPoints = initPoints - (currentPoint * 2);
                    break;
                case "triple ring":
                    initPoints = initPoints - (currentPoint * 3);
                    break;
 
            }
        }
        if (isBullseye == true){
            System.out.printf("Congratulations! You won the game with a bullseye in %d moves!",counter);
 
        }else if (isZeroPoints == true){
            System.out.printf("Congratulations! You won the game in %d moves!",counter);
        }else if (negativePoints == true);{
            System.out.printf("Sorry, you lost. Score difference: %d.", Math.abs(initPoints));
        }
 
 
 
 
 
 
 
    }
}