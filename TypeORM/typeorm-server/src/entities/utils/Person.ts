import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
} from 'typeorm';

@Entity()
export class Person extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
        type:'varchar'
    })
	first_name: string;

	@Column({
        type:'varchar'
    })
	last_name: string;

	@Column({
		unique: true,
        type:'varchar'
	})
	email: string;

	@Column({
		unique: true,
		length: 10,
        type:'varchar'
	})
	card_number: string;
}