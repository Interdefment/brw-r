import { CardType, EffectTargetType, MagicSchoolType, SchoolSpellCard, SpellElement, SpellType } from "../../cards";

export const SHAMANIC_SPELLS: SchoolSpellCard[] = [
  {
    name: 'Дух погребального костра',
    primary: {
      type: SpellType.Contingency,
      description: 'Уберите цель, у которой максимальное здоровье 3 или меньше. Получите 1 очко силы.',
      element: SpellElement.Fire,
      target: {
        type: EffectTargetType.Evocation,
        distance: 2,
      },
    },
    secondary: {
      type: SpellType.Contingency,
      description: 'Сбросьте 1 событие. Получите 1 очко силы. Вы можете переместить Алтарь на 1 или меньше. Вы можете переместить Алтарь на 1 или меньше. Вы можете переместить Алтарь на 1 или меньше.',
      element: SpellElement.Fire,
      target: {
        type: EffectTargetType.Special,
      },
    },
    school: MagicSchoolType.Shamanic,
    type: CardType.Spell,
    instability: true,
  }
];