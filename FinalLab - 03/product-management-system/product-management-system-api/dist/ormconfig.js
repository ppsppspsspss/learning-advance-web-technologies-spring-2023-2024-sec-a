"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("./src/entities/user.entity");
const config = {
    type: 'postgres',
    database: 'product_management_system',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '2486',
    entities: [user_entity_1.UserEntity],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map