import { Sequelize } from 'sequelize';

const sequelize = new Sequelize (
    'apiv1',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)
export default sequelize;