var network = new Network('mynetwork');

var p1 = new Place("P1");
var p2 = new Place("P2");
var p3 = new Place("P3");
var p4 = new Place("P4");
var p5 = new Place("P5");
var p6 = new Place("P6");
var p7 = new Place("P7");

var t1 = new Transition("T1");
var t2 = new Transition("T2");
var t3 = new Transition("T3");
var t4 = new Transition("T4");
var t5 = new Transition("T5");
var t6 = new Transition("T6");

t1.add_income(p1);
t1.add_income(p2)
t1.add_income(p3)
t1.add_outcome(p4)

t2.add_income(p4);
t2.add_outcome(p5);

t3.add_income(p4);
t3.add_outcome(p6);

t4.add_income(p4);
t4.add_outcome(p7);

t5.add_income(p5);

network.add_node(p1);
network.add_node(p2);
network.add_node(p3);
network.add_node(p4);
network.add_node(p5);
network.add_node(p6);
network.add_node(p7);

network.add_transition(t1);
network.add_transition(t2);
network.add_transition(t3);
network.add_transition(t4);
network.add_transition(t5);
network.add_transition(t6);

network.display();