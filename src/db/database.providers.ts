import { Sequelize } from 'sequelize-typescript';
// import { Cat } from '../cats/cat.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './database.sqlite3',
      });
      // sequelize.addModels([Cat]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
