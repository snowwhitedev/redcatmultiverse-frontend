import NavMobDropdown from "./NavMobDropdown";
import { langItems } from './constants';

const LangMobDropdown = ({ onSelectLang }: any) => {
  return (
    <NavMobDropdown title='Language' items={langItems} onClickItem={(idx: any) => onSelectLang(idx)} />
  )
}

export default LangMobDropdown;
