import React, {FC} from 'react';
import RechercheUnconnected from './Recherche';
import {useDispatch, useSelector} from 'react-redux';
import {TStoreState} from '../../../store/store';
import { filterProducts } from '../../../store/ressources';
interface IRechercheProps {
  style?: {};
}
const Recherche: FC<IRechercheProps> = props => {
  const searchValue = useSelector((s: TStoreState) => s.ressources.searchValue);
  const dispatch=useDispatch();
  return (
    <RechercheUnconnected
      {...props}
      value={searchValue}
      onFindValueChange={(t:string) => {
        dispatch(filterProducts(t));
      }}
    />
  );
};

export default Recherche;
