import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmpDataUsersService {
    private email!: string;
    private name!: string;
    private surname!: string;
    private phone!: number;
    private mdp!: string;

  constructor() { }
  
  setEmail(email: string){
    this.email = email;
  }
  setName(nom: string){
    this.name = nom;
  }
  setSurname(surname: string){
    this.surname = surname;
  }
  setPhone(tel: number){
    this.phone = tel;
  }
  setMdp(motdepasse: string){
    this.mdp = motdepasse;
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
