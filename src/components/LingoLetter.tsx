import React from 'react';
import './LingoLetter.scss';

export const LingoLetter: React.FunctionComponent<{ letter?: string }> = (
    props
) => {
    return <div className="letterBox">{props.letter ?? <>&nbsp;</>}</div>;
};
