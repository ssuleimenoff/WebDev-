class Solution {
public:
    int romanToInt(string s) {
        unordered_map <char, int> roman_values
         {{'I', 1}, {'V', 5} , {'X', 10}, {'L', 50}, {'C', 100}, {'D', 500}, {'M', 1000}};
         int total = 0;
         int prev_value = 0;

         for(char& c : s){
             int value = roman_values[c];
             if(value > prev_value){
                 total += value - 2 * prev_value;
             }
             else {
                 total += value;
             }
             prev_value = value;
         }
         return total;
    }
    int main(){
        string input;
        cin >> input;
        cout << romanToInt(input) << endl;
        return 0;
    }
};