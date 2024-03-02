import { MagicSchoolType, SchoolSpellCard } from '../../cards';
import { AGONY_SPELLS } from './agony';
import { ALCHEMY_SPELLS } from './alchemy';
import { HEX_SPELLS } from './hex';
import { NECROMANCY_SPELLS } from './necromancy';
import { NIGHTMARE_SPELLS } from './nightmare';
import { SHAMANIC_SPELLS } from './shamanic';
import { FORGOTTEN_SPELLS } from './forgotten';

export const SPELLS: Record<MagicSchoolType, SchoolSpellCard[]> = {
  [MagicSchoolType.Agony]: AGONY_SPELLS,
  [MagicSchoolType.Alchemy]: ALCHEMY_SPELLS,
  [MagicSchoolType.Forgotten]: FORGOTTEN_SPELLS,
  [MagicSchoolType.Hex]: HEX_SPELLS,
  [MagicSchoolType.Necromancy]: NECROMANCY_SPELLS,
  [MagicSchoolType.Nightmare]: NIGHTMARE_SPELLS,
  [MagicSchoolType.Shamanic]: SHAMANIC_SPELLS,
}