import { Card } from 'primereact/card';

import { MagicSchool } from '../magic-school.model';

interface MagicSchoolCardProps {
  school: MagicSchool;
}

export const MagicSchoolCard: React.FC<MagicSchoolCardProps> = ({ school }) => {
  return (
    <Card title={school.name}>
      <p>
        {school.description}
      </p>
    </Card>
  );
};
