import {
  Model,
  Column,
  Table,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'accounts',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Account extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({ allowNull: false })
  name: string;

  @Column({
    allowNull: false,
    defaultValue: () => Math.random().toString(36).slice(2),
  })
  token: string;
}

//orders - account_id
//token - 

//accounts