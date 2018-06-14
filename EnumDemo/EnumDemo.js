// 数字枚举，可设置初始化值
var Directory;
(function (Directory) {
    Directory[Directory["Up"] = 1] = "Up";
    Directory[Directory["Down"] = 2] = "Down";
    Directory[Directory["Left"] = 3] = "Left";
    Directory[Directory["Right"] = 4] = "Right";
})(Directory || (Directory = {}));
// 字符串枚举
var DirectoryString;
(function (DirectoryString) {
    DirectoryString["Up"] = "Up";
    DirectoryString["Down"] = "Down";
    DirectoryString["Left"] = "Left";
    DirectoryString["Right"] = "Right";
})(DirectoryString || (DirectoryString = {}));
// Heterogeneous Enum
var HeterogeneousEnum;
(function (HeterogeneousEnum) {
    HeterogeneousEnum[HeterogeneousEnum["Up"] = 1] = "Up";
    HeterogeneousEnum["Down"] = "Down";
})(HeterogeneousEnum || (HeterogeneousEnum = {}));
var E;
(function (E) {
    E[E["X"] = 0] = "X";
})(E || (E = {}));
var E1;
(function (E1) {
    E1[E1["X"] = 0] = "X";
    E1[E1["Y"] = 1] = "Y";
    E1[E1["Z"] = 2] = "Z";
})(E1 || (E1 = {}));
