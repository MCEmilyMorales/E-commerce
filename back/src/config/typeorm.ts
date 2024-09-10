import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';
import { registerAs } from '@nestjs/config';

dotenvConfig({ path: '.development.env' });

const config = {
  type: 'postgres',
  database: process.env.DATA_BASE,
  host: process.env.HOST,
  port: process.env.PORT as unknown as number,
  password: process.env.PASSWORD,
  username: 'postgres',
  autoLoadEntities: true,
  synchronize: true,
  logging: true,
  //entities: ['dist/**/*.entity{.ts,.js}'],
  //migrations: ['dist/migrations/*{.ts,.js}'],
  // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  // migrations: [__dirname + 'dist/migrations/*{.ts,.js}'],
  //dropSchema:true,
};
export default registerAs('typeorm', () => config); //permite tener una clave con el nombre de typeORM e importar el objeto config
export const connectionSource = new DataSource(config as DataSourceOptions);
