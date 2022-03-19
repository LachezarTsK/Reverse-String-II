
public class Solution {

    public String reverseStr(String input, int sizeOfGroupToReverse) {

        char[] array = input.toCharArray();
        int startReverse = 0;
        int sizeInput = input.length();

        while (startReverse < sizeInput) {
            reverseRange(startReverse, Math.min(sizeInput - 1, startReverse + sizeOfGroupToReverse - 1), array);
            startReverse += 2 * sizeOfGroupToReverse;
        }
        return String.valueOf(array);
    }

    private void reverseRange(int start, int end, char[] array) {
        while (start < end) {
            swapTwoElements(start++, end--, array);
        }
    }

    private void swapTwoElements(int start, int end, char[] array) {
        char temp = array[start];
        array[start] = array[end];
        array[end] = temp;
    }
}
