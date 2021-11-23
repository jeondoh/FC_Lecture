public class fizzbuzz {
    public static void main(String[] args) {
        String result = "";        
        for(int i=1; i<=100; i++){
            if(i%15 == 0) {
                result = "fizzbuzz";
            }else if(i%3 == 0){
                result = "fizz";
            } else if(i%5 == 0) {
                result = "buzz";
            } else {
                result = Integer.toString(i);
            }
            System.out.println(i + " ::::::: " + result);
        }        
    }
}
