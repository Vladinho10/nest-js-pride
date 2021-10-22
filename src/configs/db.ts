export const database = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  // password: 'root',
  database: process.env.DB_NAME,
  entities: [`**/*.entity$.ts`],
  synchronize: true,
  autoLoadEntities: true,
};
