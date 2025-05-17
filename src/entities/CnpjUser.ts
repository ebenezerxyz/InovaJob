import { PrimaryGeneratedColumn, Column, Entity, NumericType } from "typeorm";
import { TypeEntityUserCnpj } from "../../api/libs/interfaces/interfaces_param_constructor";

@Entity('cnpjuser')
export class CnpjUser {
    constructor(
        id: number,
        enterpriseName: string, 
        phone: string, 
        corporativeEmail: string, 
        cnpj: string, 
        password: string, 
        cep: string,
        locallity: string
    ){
        this.id = id;
        this.enterpriseName = enterpriseName;
        this.phone = phone;
        this.corporativeEmail = corporativeEmail;
        this.cnpj = cnpj;
        this.password = password;
        this.cep = cep;
        this.locallity = locallity;
    }

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    enterpriseName: string;
    @Column()
    phone: string;
    @Column()
    corporativeEmail: string
    @Column()
    cnpj: string;
    @Column()
    password: string;
    @Column()
    cep: string;
    @Column()
    locallity: string
}