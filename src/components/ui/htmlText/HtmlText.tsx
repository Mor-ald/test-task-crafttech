import { IHtmlText } from './IHtmlText';

import { forwardRef } from 'react';

const HtmlText = forwardRef<HTMLDivElement, IHtmlText>(({ html, id }, ref) => {
  return (
    <div
      id={`htmltext_${id}`}
      dangerouslySetInnerHTML={{ __html: html }}
      style={{
        position: 'fixed',
        overflow: 'hidden',
        left: '100000px',
        top: '100000px',
      }}
      ref={ref}
    ></div>
  );
});

export default HtmlText;
