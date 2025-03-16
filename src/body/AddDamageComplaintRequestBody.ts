export interface AddDamageComplaintRequestBody {
    LocalConsumptionCodeId: string;
    ContractHolderName: string;
    PhoneNumber: number;
    Email: string;
    BeginDate: string;
    EndDate: string;
    BeginTime: string;
    EndTime: string;
    DamagedEquipment: string;
    Description: string;
    Attachments: File[];
    [key: string]: string | number | File[]; // Index signature
  }