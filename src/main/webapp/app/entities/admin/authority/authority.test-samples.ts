import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'b5e84d5e-d87e-464e-be4c-944dd983eebe',
};

export const sampleWithPartialData: IAuthority = {
  name: '858638d7-bb94-4f93-abfc-e070d0753ac3',
};

export const sampleWithFullData: IAuthority = {
  name: 'bf3b9728-ada0-41ce-8dfd-c892ad70040e',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
