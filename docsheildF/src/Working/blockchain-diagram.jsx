import "./blockchain-diagram.css"

export default function BlockchainDiagram() {
  return (
    <div className="blockchain-diagram">
      <div className="diagram-document">
        <div className="document-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="document-label">Your Document</div>
      </div>

      <div className="diagram-arrow">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M12 5L19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="diagram-hash">
        <div className="hash-content">
          <div className="hash-label">Cryptographic Hash</div>
          <div className="hash-value">8e5d7fc97e7b51a7348db9b0fb12d045269138f35c1c6f40be42c38c9f334dea</div>
        </div>
      </div>

      <div className="diagram-arrow">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M12 5L19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="diagram-blockchain">
        <div className="blockchain-blocks">
          <div className="blockchain-block">
            <div className="block-header">Block #1</div>
            <div className="block-content">
              <div className="block-hash">Hash: 0x4a2...</div>
              <div className="block-time">Time: 12:01:15</div>
            </div>
          </div>
          <div className="blockchain-block">
            <div className="block-header">Block #2</div>
            <div className="block-content">
              <div className="block-hash">Hash: 0x7f3...</div>
              <div className="block-time">Time: 12:02:30</div>
            </div>
          </div>
          <div className="blockchain-block active-block">
            <div className="block-header">Block #3</div>
            <div className="block-content">
              <div className="block-hash">Hash: 0x9e5...</div>
              <div className="block-time">Time: 12:03:45</div>
              <div className="document-record">Your Document Hash</div>
            </div>
          </div>
          <div className="blockchain-block">
            <div className="block-header">Block #4</div>
            <div className="block-content">
              <div className="block-hash">Hash: 0xb21...</div>
              <div className="block-time">Time: 12:05:00</div>
            </div>
          </div>
          <div className="blockchain-block">
            <div className="block-header">Block #5</div>
            <div className="block-content">
              <div className="block-hash">Hash: 0xc8f...</div>
              <div className="block-time">Time: 12:06:15</div>
            </div>
          </div>
        </div>
        <div className="blockchain-label">Immutable Blockchain Record</div>
      </div>
    </div>
  )
}

