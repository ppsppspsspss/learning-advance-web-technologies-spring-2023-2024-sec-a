import { UserEntity } from 'src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'product_management_system',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '2486',
  entities: [UserEntity],
  synchronize: true,
};

export default config;