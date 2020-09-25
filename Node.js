class Node {
    static id = 0;
    static new_id(){
        Node.id++;
        return Node.id;
    }
    
    constructor(label){
        this.id = Node.new_id();
        this.label = label;
    }
}