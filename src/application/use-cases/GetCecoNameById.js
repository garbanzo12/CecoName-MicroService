//Caso de uso de obtener un cecoName por su Id
export class GetCecoNameById {
  constructor(CecoNameRepositoryById) {
    this.CecoNameRepositoryById = CecoNameRepositoryById;
  }

  async execute(id) {
    return await this.CecoNameRepositoryById.findById(id);
  }
}