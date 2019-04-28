// Swap two numbers without using temporary variable.

const swap = (a,b) => {
    console.log(`Before swap a:${a} and b:${b}`);

    b = b-a;
    a = a+b;
    b = a-b;

    console.log(`After swap a:${a} and b:${b}`);
}

swap(4,5)