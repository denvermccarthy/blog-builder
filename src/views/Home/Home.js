import React from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';
import { useState } from 'react';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState();

  const [align, setAlign] = useState('');
  const [font, setFont] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [text, setText] = useState('');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, align, subtitle, font, text }} />
      <Editor
        {...{
          title,
          setTitle,
          setAlign,
          font,
          setFont,
          subtitle,
          setSubtitle,
          text,
          setText,
        }}
      />
    </main>
  );
}
// netlify
