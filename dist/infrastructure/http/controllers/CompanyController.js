export class CompanyController {
  constructor(getAllCompaniesUseCase) {
    this.getAll = async (req, res) => {
      const companies = await this.getAllCompaniesUseCase.execute();
      res.json(companies);
    };
    this.getAllCompaniesUseCase = getAllCompaniesUseCase;
  }
}