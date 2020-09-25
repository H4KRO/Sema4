class Transition extends Node {
    constructor(label){
        super(label);
        this.edges = [];
        this.shape = 'box';
    }
    add_income(node){
        this.edges.push({
            from: node.id,
            to: this.id
        });
    }
    add_outcome(node){
        this.edges.push({
            from: this.id,
            to: node.id
        });
    }
}