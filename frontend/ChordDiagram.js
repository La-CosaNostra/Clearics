import React, { useContext, useEffect, useState } from 'react';
import { TuningContext } from './TuningContext';

const ChordDiagram = ({ chordName }) => {
  const { offsets } = useContext(TuningContext);
  const [chordData, setChordData] = useState(null);

  useEffect(() => {
    // Load the JSON file from the public directory
    fetch('/fullchords.json')
      .then(response => response.json())
      .then(data => {
        // Find the first variation of the specified chord
        const chord = data.find(chord => chord.chord === chordName);
        if (chord) {
          // Convert fingerings to frets array (strings 6 to 1)
          const frets = Array(6).fill('x'); // Default: all strings muted
          chord.fingerings.forEach(fingering => {
            const stringIndex = 6 - parseInt(fingering.string); // Convert string 1-6 to array index 0-5
            frets[stringIndex] = fingering.fret === 'null' ? 'x' : fingering.fret;
          });
          setChordData({ frets, fingers: frets }); // Fingers can be same as frets for simplicity
        } else {
          setChordData({ frets: ['x', 'x', 'x', 'x', 'x', 'x'], fingers: ['x', 'x', 'x', 'x', 'x', 'x'] });
        }
      })
      .catch(error => console.error('Error fetching chords:', error));
  }, [chordName]);

  if (!chordData) return <div>Loading chord...</div>;

  const adjustedFrets = chordData.frets.map((fret, index) => {
    if (fret === 'x') return 'x';
    return (parseInt(fret) + offsets[index]).toString();
  });

  const strings = ['E', 'A', 'D', 'G', 'B', 'e'];
  const diagram = strings.map((string, index) => {
    const fret = adjustedFrets[index];
    return `${string}|---${fret === 'x' ? 'x' : fret}---|`;
  }).join('\n');

  return (
    <pre style={{ fontFamily: 'monospace', background: '#f0f0f0', padding: '10px' }}>
      {diagram}
    </pre>
  );
};

export default ChordDiagram;
