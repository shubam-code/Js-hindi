// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// } syntax of switch,  key is the value which needs to be checked  , also the role of break is to make sure only that code is executed which matches with the key value.
// actually agar break na ho toh jha key value match ho jaye uske baad ka sara code execute ho jata hai toh uss cheez ko rokne ke liye hum break use krte hai.

const month = "march"

switch (month) {
    case "jan":
    console.log("january");
     break;
    case "feb":
    console.log("february");
        break;
    case "march":
    console.log("march");
        break;
    case "april":
    console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
