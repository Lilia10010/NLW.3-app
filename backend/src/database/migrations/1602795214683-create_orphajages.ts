import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphajages1602795214683 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
      //fazer alterações
      //criar tabela, criar novo campo, deletar ..
      //41:19 explicação de cada coluna
      await queryRunner.createTable(new Table({
        name: 'orphanages',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'about',
            type: 'text',
          },
          {
            name: 'instructions',
            type: 'text',
          },
          {
            name: 'open_on_weekends',
            type: 'boolean',
            default: false,
          }

        ]
      }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      //desfazer o que foi feito no up
      await queryRunner.dropTable('orphanages')
  }

}
