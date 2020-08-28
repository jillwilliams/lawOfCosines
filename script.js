const lawOfCosines = ( ) => {
    var a = document.getElementById("sideA").value;
    var b = document.getElementById("sideB").value;
    var c = document.getElementById("sideC").value;
    var angle = document.getElementById("angle").value;

    if (a != 0 && b != 0 && c == 0) {
        var calculate = (a*a + b*b - 2*a*b*Math.cos(angle));
        var calculate2 =  Math.sqrt(calculate);
            return "Side c = " + calculate2.toFixed(1) + " un";
    } else
    if (a != 0 && c != 0 && b == 0) {
        var calc1 = (a*a + c*c - 2*a*c*Math.cos(angle));
        var calc2 = Math.sqrt(calc1);
            return "Side b = " + calc2.toFixed(1) + " un";
    } else
    if (b != 0 && c != 0 && a == 0) {
        var calc3 = (b*b + c*c - 2*b*c*Math.cos(angle));
        var calc4 = Math.sqrt(calc3);
            return "Side a = " + calc4.toFixed(1) + " un";
    } else
        return "Re-enter your Values";
}
const answer = ( ) => {
    document.getElementById("demo").innerHTML = lawOfCosines( );
};