#include <iostream>
#include <vector>
#include <cmath>

struct room{
    int length;
    int width;
    room(int l, int w){
        this->length= l;
        this->width = w;
    }
};

void solution(std::vector<room> &details, int cost){
    int total_square = 0; 
    for(room get: details){
        total_square += get.length * get.width;
    }
    //convert inch to yard the round up
    int square_yard = round(total_square/1296);

    std::cout << "Total square yards needed: " << square_yard << std::endl;
    int total_cost = square_yard * cost;
    std::cout << "Total cost: " << total_cost << std::endl;
    int total_instal = total_cost * 0.1;
    total_cost += total_instal;
    std::cout << "Total Installation cost: " << total_instal << std::endl;
    std::cout << "Total of everything: " << total_cost << std::endl;
}

int main(){

}