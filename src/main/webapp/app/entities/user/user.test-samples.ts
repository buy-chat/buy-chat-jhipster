import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 23026,
  login: 'tfImh.@jhO\\RmyuW6',
};

export const sampleWithPartialData: IUser = {
  id: 15945,
  login: '0^@n\\~O\\q3Ru\\<RmAdFK\\XqL0H\\9v47',
};

export const sampleWithFullData: IUser = {
  id: 23655,
  login: '1@eRI',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
