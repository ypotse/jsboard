// create board
var b = jsboard.board({attach:"game", size:"14x14"});
b.cell("each").style({width:"50px", height:"50px"});

// setup pieces
var piece_x = jsboard.piece({text:"X", fontSize:"45px", textAlign:"center"});
var piece_o = jsboard.piece({text:"O", fontSize:"45px", textAlign:"center"});

var default1 = jsboard.piece({text:"1", fontSize:"45px", textAlign:"center"});
var default2 = jsboard.piece({text:"2", fontSize:"45px", textAlign:"center"});
var default3 = jsboard.piece({text:"3", fontSize:"45px", textAlign:"center"});
var default4 = jsboard.piece({text:"4", fontSize:"45px", textAlign:"center"});


//init the central 4 pieces
//1,2,3,4
b.cell([6,6]).place(default1.clone());
b.cell([6,7]).place(default2.clone());
b.cell([7,6]).place(default3.clone());
b.cell([7,7]).place(default4.clone());


// alternate turns of x and o
var turn = true;
b.cell("each").on("click", function() {
    if (b.cell(this).get()==null) {
        if (turn)   b.cell(this).place(piece_x.clone());
        else        b.cell(this).place(piece_o.clone()); 
        turn = !turn;
    }
});