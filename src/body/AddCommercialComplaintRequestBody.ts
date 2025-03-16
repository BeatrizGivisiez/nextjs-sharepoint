export interface AddCommercialComplaintRequestBody {
    LocalConsumptionCodeId: string;
    ContractHolderName: string;
    PhoneNumber: string;
    Email: string;
    Subject: number;
    ComplaintReason: string;
    Attachments: File[]; 
}