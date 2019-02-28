import React from 'React';

interface CardProps {
    text: string;
}

const Card = ({text}: CardProps) => <div>{text}</div>;

export {Card};
