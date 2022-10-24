import { MigrationInterface, QueryRunner } from 'typeorm';

export class DIG720InsertSkipDocumentSignScreen1659893833836 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('params')
      .values({
        param: 'skipDocumentSignScreen',
        isGlobal: 1,
        dataType: 2,
        intValue: 0,
      })
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from('params')
      .where('param = "skipDocumentSignScreen"')
      .execute();
  }
}
