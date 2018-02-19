$(document).ready(function () {

    var biggreybox = document.getElementById('biggreybox');

    //Input box values
    var sb = document.getElementById('squarebox');
    var rh = document.getElementById('rectanglebox1');
    var rw = document.getElementById('rectanglebox2');
    var bb = document.getElementById('trianglebox');
    var bl = document.getElementById('trianglebox');
    var cr = document.getElementById('circlebox');
    var ch = document.getElementById('circlebox');
    //Input box values

    //Shape Buttons
    var squareButton = document.getElementById('squarebutton');
    var rectangleButton = document.getElementById('rectanglebutton');
    var triangleButton = document.getElementById('trianglebutton');
    var circleButton = document.getElementById('circlebutton');
    //Shape Buttons


    var Shape = function (width, height) {
        this.width = width;
        this.height = height;
    }


    Shape.prototype.draw = function () {
        this.div = document.createElement('div');
        this.div.className = this.cssClass;
        var x = Math.floor(Math.random() * (600 - this.width));
        var y = Math.floor(Math.random() * (600 - this.height));
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.left = x + "px";
        this.div.style.top = y + "px";


        this.div.addEventListener('click', this.describe.bind(this))
        this.div.addEventListener('dblclick', function () {
            this.div.remove();
        }.bind(this));
        biggreybox.appendChild(this.div);
    }

    Shape.prototype.tri = function() {
        this.div = document.createElement('div');
        this.div.className = this.cssClass;
        var x = Math.floor(Math.random() * (600 - this.width));
        var y = Math.floor(Math.random() * (600 - this.height));
        this.div.style.borderBottom = this.width + "px solid green";
        this.div.style.borderLeft = this.height + "px solid transparent";
        this.div.style.left = x + "px";
        this.div.style.top = y + "px";
        this.div.addEventListener('click', this.describe.bind(this))
        this.div.addEventListener('dblclick', function () {
            this.div.remove();
        }.bind(this));
        biggreybox.appendChild(this.div);
    }

    Shape.prototype.describe = function () {
        $('#shape').append(this.constructor.name);
        $('#width').append(" " + this.width + "px");
        $('#height').append(" " + this.height + "px");
        $('#radius').append(this.radius);
        $('#area').append(" " + this.area() + "px");
        $('#perimeter').append(" " + this.perimeter() + "px");
    }


    //Square
    squareButton.addEventListener('click', createsquare);
    function createsquare() {
        var squarevalue = sb.value;
        new Square(squarevalue);
    }
    function Square(side) {
        Shape.call(this, side, side);
        this.side = side;
        this.cssClass = 'square';
        this.draw();
    }


    Square.prototype = Object.create(Shape.prototype);
    Square.prototype.constructor = Square;

    Square.prototype.area = function () {
        return this.side * this.side;
    }
    Square.prototype.radius = function () {
        return "Undefined";
    }
    Square.prototype.perimeter = function () {
        return (this.side * 2) + (this.side * 2);
    }

    //Square

    // //Rectangle

    rectangleButton.addEventListener('click', createrectangle);
    function createrectangle() {
        var rwvalue = rw.value;
        var rhvalue = rh.value;
        new Rectangle(rwvalue, rhvalue)
    }
    function Rectangle(width, height) {
        Shape.call(this, width, height);
        this.width = width;
        this.height = height
        this.cssClass = 'rectangle';
        this.draw();
    }

    Rectangle.prototype = Object.create(Shape.prototype);
    Rectangle.prototype.constructor = Rectangle;

    Rectangle.prototype.area = function () {
        return this.width * this.height;
    }
    Rectangle.prototype.radius = function () {
        return "Undefined";
    }
    Rectangle.prototype.perimeter = function () {
        return (this.width * 2) + (this.height * 2);
    }

    // //Rectangle

    // //Triangle
    triangleButton.addEventListener('click', createtriangle);

    function createtriangle() {
        var tribb = bb.value;
        var tribl = bl.value;
        new Triangle(tribb, tribl)

    }
    function Triangle(width, height) {
        Shape.call(this, width, height);
        this.width = width;
        this.height = height;
        this.cssClass = 'triangle';
        this.draw();
        this.div.style.width = 0;
        this.div.style.height = 0;
        this.div.style.borderRightWidth = this.width + 'px';
        this.div.style.borderBottomWidth = this.height + 'px';
    }


    Triangle.prototype = Object.create(Shape.prototype);
    Triangle.prototype.constructor = Triangle;

    Triangle.prototype.area = function () {
        return 0.5 * this.width * this.height;
    }
    Triangle.prototype.radius = function () {
        return 'undefined';
    }
    Triangle.prototype.perimeter = function () {
        return 2 * this.height + (Math.sqrt(2 * this.height ^ 2));
    }
    // //Triangle

    // //Circle
    circleButton.addEventListener('click', createcircle);

    function createcircle() {
        var cradius = cr.value;
        new Circle(cradius);

    }

    function Circle(radius) {
        Shape.call(this, 2 * radius, 2 * radius);
        this.radius = radius;
        this.cssClass = 'circle';
        this.draw();
    }

    Circle.prototype = Object.create(Shape.prototype);
    Circle.prototype.constructor = Circle;

    
    Circle.prototype.area = function() {
        return Math.PI * this.radius ^ 2;
    }
    Circle.prototype.perimeter = function() {
        return 2 * Math.PI * this.radius;
    }


    // //Circle








});