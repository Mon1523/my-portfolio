
import React, { useState } from 'react';
import ContentNavbar from './ContentNavbar';
import Footer from './Footer';
import './GamePage.css'; 
import './ContentNavbar.css'; 
import './Home.css';
import CodeHighlighter from './CodeHighlighter'; 

import p1_k from './assets/p1_k.png';
import p1_n from './assets/p1_n.png';
import p1_m from './assets/p1_m.png';
import p1_s from './assets/p1_s.png';
import p2_k from './assets/p2_k.png';
import p2_n from './assets/p2_n.png';
import p2_m from './assets/p2_m.png';
import p2_s from './assets/p2_s.png';

const Board = () => {
  const [hoverCell, setHoverCell] = useState<number | null>(null);

  const lightSquare = "#F0D9B5";
  const darkSquare = "#B58863";
  
  const pieces = [
    { row: 0, col: 0, player: 2, type: "n" }, 
    { row: 0, col: 1, player: 2, type: "k" }, 
    { row: 0, col: 2, player: 2, type: "m" }, 
    { row: 0, col: 3, player: 2, type: "m" }, 
    { row: 0, col: 4, player: 2, type: "k" }, 
    { row: 0, col: 5, player: 2, type: "n" }, 
    
    { row: 1, col: 0, player: 2, type: "s" }, 
    { row: 1, col: 1, player: 2, type: "s" }, 
    { row: 1, col: 2, player: 2, type: "s" }, 
    { row: 1, col: 3, player: 2, type: "s" }, 
    { row: 1, col: 4, player: 2, type: "s" }, 
    { row: 1, col: 5, player: 2, type: "s" }, 
    
    { row: 4, col: 0, player: 1, type: "s" }, 
    { row: 4, col: 1, player: 1, type: "s" }, 
    { row: 4, col: 2, player: 1, type: "s" }, 
    { row: 4, col: 3, player: 1, type: "s" }, 
    { row: 4, col: 4, player: 1, type: "s" }, 
    { row: 4, col: 5, player: 1, type: "s" }, 
    
    { row: 5, col: 0, player: 1, type: "n" }, 
    { row: 5, col: 1, player: 1, type: "k" }, 
    { row: 5, col: 2, player: 1, type: "m" }, 
    { row: 5, col: 3, player: 1, type: "m" }, 
    { row: 5, col: 4, player: 1, type: "k" }, 
    { row: 5, col: 5, player: 1, type: "n" }, 
  ];
  
  const getPieceAt = (row: number, col: number) => {
    return pieces.find(p => p.row === row && p.col === col);
  };
  
  const getPieceImage = (player: number, type: string) => {
    const pieceImages: {[key: string]: any} = {
      'p1_k': p1_k,
      'p1_n': p1_n,
      'p1_m': p1_m,
      'p1_s': p1_s,
      'p2_k': p2_k,
      'p2_n': p2_n,
      'p2_m': p2_m,
      'p2_s': p2_s
    };
    
    const key = `p${player}_${type}`;
    return pieceImages[key];
  };
  
  return (
    <div className="game-board">
      <div className="board-grid">
        {Array(6).fill(null).map((_, row) => (
          Array(6).fill(null).map((_, col) => {
            const isLight = (row + col) % 2 === 0;
            const piece = getPieceAt(row, col);
            const cellId = row * 6 + col;
            
            return (
              <div 
                key={cellId}
                className="board-cell"
                style={{ 
                  backgroundColor: isLight ? lightSquare : darkSquare,
                  position: 'relative',
                }}
                onMouseEnter={() => setHoverCell(cellId)}
                onMouseLeave={() => setHoverCell(null)}
              >
                {piece && (
                  <div style={{ 
                    position: 'relative', 
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
                  }}>
                    <img 
                      src={getPieceImage(piece.player, piece.type)} 
                      alt={`${piece.player === 1 ? 'Player 1' : 'Player 2'} ${piece.type}`}
                      className="piece-image"
                    />
                  </div>
                )}
              </div>
            );
          })
        ))}
      </div>
    </div>
  );
};

const GameplaySection = () => {
  return (
    <div className="gameplay-rules">
      <h4>Gameplay</h4>
      <p>Players alternate turns, with each player having 3 actions per turn.</p>
      <p>An action can be moving a piece or dropping a captured piece.</p>
      <p>Captured pieces can be dropped onto empty squares to be used as your own pieces.</p>
      <p>Protected pieces (Kirin) cannot be captured.</p>
      <p>The game ends when a player's Kirin pieces are in checkmate or when a draw occurs.</p>
    </div>
  );
};

const GameRules = () => {
  return (
    <div className="game-rules">
      <h3>Game Rules</h3>
      <p className="game-subtitle">
        A strategic board game where you must protect your Kirin while trying to checkmate your opponent's.
      </p>
      <div className="rules-content">
        <div className="rule-section">
          <h4>Objective</h4>
          <p>
            The objective of the game is to checkmate your opponent's Kirin pieces. This occurs when 
            the Kirin pieces cannot make any legal moves and cannot be saved by any other pieces.
          </p>
        </div>
        
        <div className="rule-section">
          <h4>Pieces</h4>
          <div className="piece-descriptions">
            <div className="piece-card">
              <div className="piece-icon">
                <img src={p1_k} alt="Kirin" />
              </div>
              <h5>Kirin</h5>
              <p>Moves diagonally one square. Protected piece that cannot be captured.</p>
            </div>
            
            <div className="piece-card">
              <div className="piece-icon">
                <img src={p1_s} alt="Samurai" />
              </div>
              <h5>Samurai</h5>
              <p>Moves forward one square, captures diagonally forward one square.</p>
            </div>
            
            <div className="piece-card">
              <div className="piece-icon">
                <img src={p1_n} alt="Ninja" />
              </div>
              <h5>Ninja</h5>
              <p>Moves/captures by jumping two squares in any direction (orthogonally or diagonally).</p>
            </div>
            
            <div className="piece-card">
              <div className="piece-icon">
                <img src={p1_m} alt="Monk" />
              </div>
              <h5>Monk</h5>
              <p>Moves/captures one square orthogonally (horizontally or vertically).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Source code component
const SourceCodeDisplay = () => {
  const [codeVisible, setCodeVisible] = useState(false);
  
  
  const codeSections = [
    {
      title: "Game Model - Piece Movement Logic",
      code: `# Kirin Piece - Protected and moves diagonally
class KirinPiece(BasePiece):
    def __init__(self, player: Player, pos: Pos):
        super().__init__(player, pos)
        self.is_protected = True  # Cannot be captured
        
    def get_moves(self, board: List[List[Optional['BasePiece']]]) -> List[Pos]:
        moves: List[Pos] = []
        dirs = [(-1, -1), (-1, 1), (1, -1), (1, 1)]  # Diagonal directions
        for dr, dc in dirs:
            new_row = self.pos.row + dr
            new_col = self.pos.col + dc
            if self.is_valid_pos(new_row, new_col) and not board[new_row][new_col]:
                moves.append(Pos(new_row, new_col))
        return moves`,
      language: "python",
      explanation: "The KirinPiece class is one of the key game pieces. It's marked as protected (cannot be captured) and can only move diagonally one square at a time. The get_moves method calculates all legal moves for the piece based on the current state of the board."
    },
    {
      title: "Checkmate Detection Logic",
      code: `def is_checkmate(self, kirin: BasePiece, remaining_moves: int = 3) -> bool:
    if remaining_moves <= 0:
        return True

    # Check if kirin can move to an empty space 
    valid_moves = kirin.get_moves(self.board)
    for move in valid_moves:
        target = self.board[move.row][move.col]
        if not target:
            return False  

    # Check if friendly pieces can move for kirin to escape
    for row in range(6):
        for col in range(6):
            piece = self.board[row][col]
            if not piece or piece.player != kirin.player or piece == kirin:
                continue
            
            piece_moves = piece.get_moves(self.board)
            for move in piece_moves:
                # Simulate move and check if it helps kirin escape
                # ...simulation logic here...
                
    return True  # No escape found, it's checkmate`,
      language: "python",
      explanation: "This method checks if a Kirin piece is in checkmate. It first checks if the Kirin can move by itself. If not, it checks if any friendly piece can move to help the Kirin escape. The method uses simulation by testing each possible move and seeing if it creates an escape path, with a lookahead of up to 3 moves."
    },
    {
      title: "Piece Dropping Mechanism",
      code: `def drop_piece(self, pos: Pos) -> bool:
    if not self.model.can_drop(pos):
        return False

    if self.view.selected_captured is None:
        return False 

    player, index = self.view.selected_captured
    pieces = self.model.get_captured(player)
    
    if index >= len(pieces):
        return False

    piece = pieces[index]
        
    piece.pos = pos
    piece.player = player
    
    # Drop
    self.model.board[pos.row][pos.col] = piece
    self.model.captured[player].pop(index)
    
    self.model.actions_left -= 1
    if self.model.actions_left <= 0:
        self.model.end_turn()
        
    return True`,
      language: "python",
      explanation: "This method implements the unique 'dropping' mechanic where captured pieces can be placed back on the board as your own pieces. It first verifies the move is legal, then updates the game state by placing the piece and removing it from the captured list. This mechanic adds a strategic element similar to games like Shogi."
    },
    {
      title: "Networking for Multiplayer",
      code: `def send_move_to_network(self, from_pos: Optional[Pos], to_pos: Pos, piece_key: Optional[str] = None) -> None:
    if piece_key: 
        message = f"Drop: {to_pos.row},{to_pos.col}:{piece_key}"
    elif from_pos is not None:  # Ensure from_pos is not None for a move message
        message = f"Move: {from_pos.row},{from_pos.col} to {to_pos.row},{to_pos.col}"
    else:
        raise ValueError("from_pos cannot be None if piece_key is not provided.")
    
    self.networking.send(message)

def handle_network_message(self, message: Message) -> None:
    if "Move:" in message.payload:
        move = self.parse_move(message.payload)
        from_pos, to_pos = move
        self.model.move(from_pos, to_pos)
    elif "Drop:" in message.payload:
        drop_info = self.parse_drop(message.payload)
        drop_pos, piece_key = drop_info
        # Handle piece drop
        # ...`,
      language: "python",
      explanation: "The networking code enables multiplayer functionality following the Open-Closed Principle. The game uses just two message types ('Move:' and 'Drop:') for all game actions, which keeps the protocol simple while allowing for extensibility. The system doesn't need to explicitly communicate game state changes like checkmate or victory - these are calculated independently by each client based on the game rules. This design allows for new game features without modifying the communication protocol."
    }
  ];
  
  return (
    <section className="source-code-section">
      <h3>Source Code Highlights</h3>
      <p>
        This game is built using Python and Pygame, implementing a chess-like board game with unique mechanics.
        The code follows the Open-Closed Principle, making it extensible for new features without modifying existing components.
        The network protocol is minimalist - using only "Move:" and "Drop:" messages - while still supporting all game functionality.
      </p>
      
      <button 
        onClick={() => setCodeVisible(!codeVisible)}
        className="code-toggle-button"
      >
        {codeVisible ? "Hide Code" : "View Code Highlights"}
      </button>
      
      {codeVisible && (
        <div className="code-explanations">
          {codeSections.map((section, index) => (
            <div key={index} className="code-section">
              <h4>{section.title}</h4>
              <div className="code-block">
                <CodeHighlighter code={section.code} language={section.language} />
              </div>
              <div className="code-explanation">
                <p>{section.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="github-link-container">
        <p>View the complete source code and play the game:</p>
        <a 
          href="https://github.com/Mon1523/Project" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
};

// Main GamePage component
const GamePage: React.FC = () => {
  return (
    <div className="game-page">
      <ContentNavbar />
      <br></br>
      <br></br>
      <div className="game-container">
        <div className="game-header">
          <h2>Protect The Kirin</h2>
        </div>
        
        <div className="game-content">
          <div className="game-overview">
            <div className="game-preview">
              <h3>Game Preview</h3>
              <Board />
              <GameplaySection />
            </div>
            
            <GameRules />
          </div>
          
          <SourceCodeDisplay />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GamePage;