export default interface MyCard {
    id: number;
    OrganizationStructure: string;
    units: string;
    managers:Array<string>;
    RequisitionType:string;
    jobType:string;
    TotalBudgetVacancies:number;
    VacanciesstillOpen: number;
    VacanciesFilled: number;
}