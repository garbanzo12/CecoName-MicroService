//Caso de uso de obtener todas los CecoName
export class GetCecoNames {
  constructor(CecoNameRepositoryFindAll) {
    this.CecoNameRepositoryFindAll = CecoNameRepositoryFindAll;
  }

  async execute() {
    return await this.CecoNameRepositoryFindAll.findAll();
  }
}
