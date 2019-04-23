#include <iostream>
#include <vector>

using namespace std;

long long solution(int a, int b) {
    long long answer = 0;
    long long big = 0;
    long long small = 0;
   	if(a >= b){
		big = a;
		small = b;
   	} else {
		big = b;
		small = a;
   	}
   	for(int i = small; i <= big; i++){
		answer += i;
   	}
    return answer;
}

int main(){
	cout << solution(3, 5) << endl;
	return 0;
}


