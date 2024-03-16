import { MAGIC_SCHOOLS, MagicSchoolCard } from 'src/entities/magic-school';

export const SchoolsList: React.FC = () => {
  return (
    <div className='flex flex-wrap gap-4 after:flex-auto'>
      {MAGIC_SCHOOLS.map((school) => {
        return (
          <MagicSchoolCard key={school.type} school={school} />
        );
      })}
    </div>
  );
};
