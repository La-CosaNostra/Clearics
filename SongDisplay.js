import React, { useContext, useState } from 'react';
import { SongContext } from './SongContext';
import ChordDiagram from './ChordDiagram';
import TuningSelector from './TuningSelector';

const SongDisplay = () => {
  const { song } = useContext(SongContext);
  const [selectedChord, setSelectedChord] = useState(null);

  if (!song) return <div>Loading...</div>;

  const parseLyrics = (lyrics) => {
    const lines = lyrics.split('\n');
    return lines.map((line, index) => (
      <div key={index} className="lyric_block">
        {line.split(/(\[[A-Za-z0-9#\/]+\])/).map((part, i) => {
          if (part.match(/^\[[A-Za-z0-9#\/]+\]$/)) {
            const chord = part.slice(1, -1);
            return (
              <span
                key={i}
                className="chord"
                onClick={() => setSelectedChord(chord)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && setSelectedChord(chord)}
                aria-label={`Show ${chord} chord diagram`}
              >
                {chord}
              </span>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </div>
    ));
  };

  return (
    <div>
      <TuningSelector />
      <h1>{song.title} by {song.artist}</h1>
      <div>{parseLyrics(song.lyrics)}</div>
      {selectedChord && (
        <div style={{ marginTop: '20px' }}>
          <h3>{selectedChord} Chord Diagram</h3>
          <ChordDiagram chordName={selectedChord} />
        </div>
      )}
    </div>
  );
};

export default SongDisplay;
