class Queue <T> {
    private stack1: Stack<T>;
    private stack2: Stack<T>;
    constructor(){
        this.stack1 = new Stack<T>();
        this.stack2 = new Stack<T>();
    }
    push(newElement: T): void{
        this.stack1.push(newElement);
    };
    pop(): T|undefined{
        while (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop())
        }
        const value = this.stack2.pop();
        while (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.pop())
        }
        return value;
   };
    peek(): T|undefined{
        while (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop())
        }
        const value = this.stack2.peek();
        while (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.pop())
        }
        return value;
    };
}

class Stack <T> {
    private stack:(T|undefined)[];
    constructor(){
        this.stack = [];
    }
    push(newElement: T|undefined): void{
        this.stack.push(newElement);
    };
    pop(): T| undefined{
        return this.stack.pop();
    };
    peek(): T|undefined{
        return this.isEmpty() ? undefined : this.stack[length-1];
    };
    isEmpty(): boolean{
        return this.stack.length === 0;
    };
}