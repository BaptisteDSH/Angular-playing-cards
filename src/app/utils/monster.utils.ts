export enum MonsterType {
  PLANT = 'Plant',
  DARK = 'dark',
  FIRE = 'Fire',
  WATER = 'Water',
}

export interface IMonsterProperties {
  ImageUrl: string;
  color: string;
}

export const MonsterTypeProperties: {
  [key in MonsterType]: IMonsterProperties;
} = {
  [MonsterType.PLANT]: {
    ImageUrl: 'assets/img/plant.png',
    color: 'green',
  },
  [MonsterType.DARK]: {
    ImageUrl: 'assets/img/energy.png',
    color: 'purple',
  },
  [MonsterType.FIRE]: {
    ImageUrl: 'assets/img/fire.webp',
    color: 'red',
  },
  [MonsterType.WATER]: {
    ImageUrl: 'assets/img/water.png',
    color: 'blue',
  },
};
