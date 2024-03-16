import { MAGIC_SCHOOLS, MagicSchool, MagicSchoolCard } from 'src/entities/magic-school';

export const SchoolsList: React.FC = () => {
  const listTemplate = (items: MagicSchool[]) => {
    if (!items || items.length === 0) return null;

    const list = items.map((school) => {
      return (
        <MagicSchoolCard key={school.type} school={school} />
      );
    });

    return <div className='grid grid-nogutter'>{list}</div>;
  };

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
