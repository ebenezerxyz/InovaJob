import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class MigrationForEntityUserCnpj1747481444496 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cnpjuser",
                columns: [
                    {
                        name: "id",
                        type: "number",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "enterprisename",
                        type: "string",
                        length: "25",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "corporativeemail",
                        type: "string",
                        length: "50",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "cnpj",
                        type: "string",
                        length: "14",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "string",
                        length: "60",
                        isNullable: false
                    },
                    {
                        name: "cep",
                        type: "string",
                        length: "10",
                        isNullable: false
                    },
                    {
                        name: "locallity",
                        type: "string",
                        length: "50",
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usercnpj");
    }
}
