function getTriangleArea(a, h) {
	if(a>0 && h>0){
var TriangleArea=a*h/2;
return TriangleArea;
	}
	else{
		console.log("Nieprawidłowe dane");
	}
}
console.log(getTriangleArea(10, 6));
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(20, 15);
var triangle3Area = getTriangleArea(10, 10);
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);