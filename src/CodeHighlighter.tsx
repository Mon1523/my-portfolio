import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';

SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);

const customStyle = {
  ...oneLight,
  'pre[class*="language-"]': {
    ...oneLight['pre[class*="language-"]'],
    background: 'inherit',
    margin: 0,
    padding: 0
  },
  'code[class*="language-"]': {
    ...oneLight['code[class*="language-"]'],
    background: 'inherit'
  }
};

interface CodeHighlighterProps {
  code: string;
  language: string;
}

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({ code, language }) => {
  return (
    <SyntaxHighlighter 
      language={language} 
      style={customStyle}
      customStyle={{
        backgroundColor: 'transparent',
        padding: '0',
        fontSize: '0.9rem',
        lineHeight: '1.5'
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;