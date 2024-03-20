import { UserEntity } from 'src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'labexam02',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '2486',
  entities: [UserEntity],
  synchronize: true,
};

export default config;