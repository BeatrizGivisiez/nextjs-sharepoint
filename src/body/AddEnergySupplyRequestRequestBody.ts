export interface AddEnergySupplyRequestRequestBody {
    RequestType: number;
    RequesterName: string;
    RequesterAddress: string;
    RequesterLocality: string;
    RequesterMunicipality: string;
    RequesterPostalCode: string;
    RequesterPhoneNumber: string;
    RequesterNIForNIPC: string;
    RequesterEmail: string;
    ContactName: string;
    ContactAddress: string;
    ContactLocality: string;
    ContactPostalCode: string;
    ContactMunicipality: string;
    ContactPhoneNumber: string;
    ContactEmail: string;
    BuildingAddress: string;
    BuildingLocality: string;
    BuildingMunicipality: string;
    BuildingPostalCode: string;
    NumberOfInstallations: string;
    RequestedPower: string;
    Attachments: File[];
}