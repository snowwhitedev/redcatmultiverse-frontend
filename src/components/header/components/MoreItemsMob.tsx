import NavMobDropdown from "./NavMobDropdown";

const MoreItemsMob = ({ items, onSelect }: any) => {
  return (
    <NavMobDropdown title='More' items={items} onClickItem={(idx: any) => onSelect(idx)} />
  )
}

export default MoreItemsMob;
