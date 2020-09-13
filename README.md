**Summary**

- It is a multiplayer online/offline chess game
- Allows user to sign up to track progress, past games etc.
- Allows users to play anonymously
- 

**Major Milestones**

- Make a Playable Chess board

- - https://github.com/patosai/chess/tree/master/Sprites for chess pieces image
  - Make a Data structure to represent a chess board at any moment
  - At any moment, find all checks, checkmates and stalemates 
  - At any moment, find all the available squares a piece can legally move to (that does put his king under check)
  - 

- Make a PvP Chess board with results (offline)

- - Add turns and legal moves
  - After every turn check for checks, checkmates and stalemates
  - check for triple same position draw rule
  - check for fifty rule draw (from move 51)

WILL DO LATER because no linux here and I don't know how to setup docker/rabbitmq on windows 

- Setup backend and connect it to Frontend
- Setup a user system
- Setup a online match
- Add user game history
- Parse and show PGN Data
- Parse and show FEN Data