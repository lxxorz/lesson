#include <iostream>
using namespace std;
struct gun{
    string name, power;
    gun(){}
    gun(string name, string power): name(name), power(power){
    }
};

struct ak47:gun
{
    ak47(string name, string power): gun(name, power){
    }
};

//newTpye 和 g 周期一样
struct newType
{
    gun g;//组合
    gun *t;//聚合
    string name,power;
    newType(string _name, string _power):name(_name), power(_power),t(nullptr){ }
    newType(gun *p):t(p){}
};
struct muket:gun
{
    muket(string name, string power): gun(name, power){
    }
};
//ak47 ==> gun;
//muket ==> gun;

//golnag: ak47, muket, gun独立的类型.

gun* test(int id){
    if(id == 1) {
        return new ak47("hello", "fuck");
    }
    else if(id == 2) {
        return new ak47("xxx", "fuck");
    }
    return nullptr;
}
void test2(gun *p) {

    //组合
    newType a("lxx", "fuck");

    //聚合
    newType b(p);
}
int main() {
    gun* t = test(1);
    // newType a("lxx", "fuck");
    // gun *p = new gun("p gun", "fuck");
    // test2(p);
    // cout << p->name << ' ' << p->power << endl;
    // cout << t->name << ' ' << t->power << endl;

}