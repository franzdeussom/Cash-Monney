export class Users{
    public email!: string;
    public name!: string;
    public surname!: string;
    public phone!: number;
    public mdp!: string;
    
    constructor(name: string, surname: string, email: string, mdp: string, phone: number){
            this.email = email;
            this.name = name;
            this.surname = surname;
            this.phone = phone;
            this.mdp= mdp;
    } 
    getEmail(): string{
        return this.email;
    }
    getName(): string{
        return this.name;
    }

    getSurname(): string{
        return this.surname;
    }
    getPhone(): number{
        return this.phone;
    }
    getMdp(): string{
        return this.mdp;
    }

}