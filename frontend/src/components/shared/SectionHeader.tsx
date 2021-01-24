import { FC } from 'react';

type SectionHeaderProps = {
  mainText: string;
  smallText: string;
  bgText: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({ mainText, smallText, bgText }) => {
  return (
    <header className="section-header">
      <h5>{smallText}</h5>
      <h6>{bgText}</h6>
      <h2>{mainText}</h2>
    </header>
  );
};

export default SectionHeader;
