//Assumes 2 players. Concept of colors and players could be combined for simplicity but
//looks cleaner at this level of abstraction. Combination of code, syntax (java and javascript) and comments used to give an idea of the
//data and behavior/logic.

enum COLOR {
    RED, BLACK
}

class Player {
    COLOR color;

    Player (COLOR color) {
        this. color = color;
    }
}


@Singleton
class Board {
    private COLOR arr[][];
    private Player players[];
    private Player turn;

    ...
    private Board() {
        players = new Player[2];
        players[0] = new Player(COLOR.RED);
        players[1] = new Player(COLOR.BLACK);
        turn = players[0];
    }

    public static getInstance() {
        ...
    }

    public Player getTurn() {
        return turn;
    }

    public MOVE(col) {
        Player winner;
        if (winner = doWeHaveAWinner()!=null) {
            //alert winner "Wins!!"
        }
        if (boardFilled())
            //alert "tie"
        ...

        arr[determineRow()][col] = turn.color;
        turn = switch(Player);
    }

    private int determineRow() {
        //determine which row the piece will fall in...
        ...

    }

    private Player switch(Player player) {
        turn = (turn.color == players[0])? players[1] : players[0];
    }

    private Player doWeHaveAWinner() {
        ...
        //go vertical, horizontal and diagonal checking all the cells
        ...
        //return Player || null;
    }

    private boolean boardFilled() {
        ...
    }

    ...

}

@Singleton
class GUI {
    private Board board;

    GUI() {
        board = Board.getInstance();
        ...
    }
    ...
    handleUserAction(event) {
        board.MOVE(getColumn(event));
    }
    getColumn(event) {
        ...
    }
    ...
}