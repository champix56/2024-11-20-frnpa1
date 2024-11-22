import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import RechercheUnconnected from './Recherche';
import {RootState} from '../../../store/store';
import {clear, update} from '../../../store/current.slice';
import {filterProductList} from '../../../store/ressources.slice';

const Recherche: React.FC<any> = props => {
  const d = useDispatch();
  const value = useSelector((s: RootState) => s.ressources.filterProductValue);
  return (
    <RechercheUnconnected
      {...props}
      value={value}
      onFindValueChange={(v: string) => {
        d(filterProductList(v));
      }}
    />
  );
};

export default Recherche;
