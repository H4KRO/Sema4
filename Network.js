class Network {
    constructor(div){
        this.div = div;
        this.nodes = [];
        this.edges = [];
    }

    add_node(node){
        this.nodes.push(node);
    }

    add_transition(transition){
        this.add_node(transition);
        this.edges = this.edges.concat(transition.edges);
    }

    display(){
        var container = document.getElementById(this.div);
        var data = {
            nodes: new vis.DataSet(this.nodes),
            edges: new vis.DataSet(this.edges)
        };
        var options = {
            edges: {
                arrows: 'middle'
            }
        };
        var network = new vis.Network(container, data, options);
    }

}