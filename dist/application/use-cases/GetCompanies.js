export class GetCompanies {
  constructor(companyRepository) {
    this.companyRepository = companyRepository;
  }
  async execute() {
    return await this.companyRepository.findAll();
  }
}