
#include <string>
#include <iterator>
#include <algorithm>
using namespace std;

class Solution {
    
public:

    string reverseStr(string input, int sizeOfGroupToReverse) {
        int startReverse = 0;
        int sizeInput = input.length();

        while (startReverse < sizeInput) {
            reverse(input.begin() + startReverse, input.begin() + min(sizeInput, startReverse + sizeOfGroupToReverse));
            startReverse += 2 * sizeOfGroupToReverse;
        }
        return input;
    }
};
